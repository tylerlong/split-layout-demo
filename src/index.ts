import Split from 'split-grid';

Split({
  columnGutters: [
    {
      track: 1,
      element: document.querySelector('#col-gutter')!,
    },
  ],
  snapOffset: 128,
});

const rowGutter = document.querySelector('#row-gutter') as HTMLDivElement;
const rowsGrid = document.querySelector('#rows-grid') as HTMLDivElement;
const toolbar = document.querySelector('#toolbar') as HTMLDivElement;
rowGutter.addEventListener('click', () => {
  rowsGrid.style.gridTemplateRows =
    toolbar.offsetHeight === 0 ? '24px 6px 1fr' : '0px 6px 1fr';
  rowGutter.title =
    toolbar.offsetHeight === 0 ? 'Show toolbar' : 'Hide toolbar';
});

// how to programmatically change the panel width
// const colsGrid = document.querySelector('#cols-grid') as HTMLDivElement;
// let count = 0;
// setInterval(() => {
//   count += 1;
//   if (count % 2 === 0) {
//     colsGrid.style.gridTemplateColumns = '2fr 6px 1fr';
//   } else {
//     colsGrid.style.gridTemplateColumns = '1fr 6px 2fr';
//   }
// }, 3000);
