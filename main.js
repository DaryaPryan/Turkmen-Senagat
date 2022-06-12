// function onEntry(entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//        change.target.classList.add('element-show');
//       }
//     });
//   }

//   let options = {
//     threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('.sizes');

//   for (let elm of elements) {
//     observer.observe(elm);
//   } 





const html = document.documentElement;

const canvas = document.getElementById('animation_block');
const context = canvas.getContext('2d');

const frameCount = 34;
const currentFrame = index => (
    `animation1/anim${index.toString()}.svg`
);

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1260;
canvas.height = 640;
img.onload = function() {
    context.drawImage(img, 0, 0);

};

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
};

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();