let videoStream = null;

    // 打开摄像头
    async function startCamera() {
      try {
        // 请求摄像头访问权限
        videoStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },  // 建议分辨率
            height: { ideal: 720 },
            facingMode: "user"       // 前置摄像头（"environment" 后置）
          },
          audio: false               // 是否开启麦克风
        });

        // 将视频流绑定到video元素
        const videoElement = document.getElementById('videoElement');
        videoElement.srcObject = videoStream;
      } catch (error) {
        console.error('摄像头访问失败:', error);
        alert('无法访问摄像头，请检查权限设置');
      }

      document.getElementById('photo').src = 'bb.jpg';
    }

    // 关闭摄像头
    function stopCamera() {
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        const videoElement = document.getElementById('videoElement');
        videoElement.srcObject = null;
      }
    }

    startCamera();