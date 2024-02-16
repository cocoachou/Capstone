import * as FileSystem from 'expo-file-system';

const server = ''; //서버주소 입력

const LoadFile = async (uri) => {
  const formData = new FormData();
  formData.append('file', {
    uri,
    type: 'image/png',
    name: 'image.png',
  });

  try {
    const response = await fetch(`${server}/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      console.log('성공!');
    } else {
      console.error('실패..');
    }
  } catch (error) {
    console.error('오류:', error);
  }
};

export default LoadFile;