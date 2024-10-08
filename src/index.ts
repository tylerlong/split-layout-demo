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
    toolbar.offsetHeight === 0 ? '24px 8px 1fr' : '0px 8px 1fr';
  rowGutter.title =
    toolbar.offsetHeight === 0 ? 'Show toolbar' : 'Hide toolbar';
});
