// src/components/VideoCall.jsx
import React, { useRef, useState } from 'react';

const VideoCall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  let localStream;
  let peerConnection;

  const startCall = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = localStream;

    const config = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
      ],
    };
    peerConnection = new RTCPeerConnection(config);

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        // Send candidate to the remote peer
      }
    };

    peerConnection.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Send offer to the remote peer
    setIsCallActive(true);
  };

  const endCall = () => {
    peerConnection.close();
    localStream.getTracks().forEach(track => track.stop());
    setIsCallActive(false);
  };

  return (
    <div>
      <h2>Video Call</h2>
      <div>
        <video ref={localVideoRef} autoPlay playsInline muted />
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
      {!isCallActive ? (
        <button onClick={startCall}>Start Call</button>
      ) : (
        <button onClick={endCall}>End Call</button>
      )}
    </div>
  );
};

export default VideoCall;
