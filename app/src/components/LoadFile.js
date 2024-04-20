import Words from '../../data/words.json';

const server = '';

const StageLabels = Words.map((item) => Object.keys(item)[0]);

const LoadFile = async (uri, stageLabelValue) => {
  const fileName = `${stageLabelValue}.png`;
  const formData = new FormData();
  formData.append('file', {
    uri,
    type: 'image/png',
    name: fileName,
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