const image = document.createElement('img');
const btn = document.querySelector('.btn');

const applyImg = async () => {
  const res = await fetch('https://random.imagecdn.app/500/150');

  image.src = res.url;
  document.body.append(image);
};

btn.addEventListener('click', applyImg);
