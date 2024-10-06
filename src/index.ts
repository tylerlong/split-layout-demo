import Split from 'split-grid';

Split({
  columnGutters: [
    {
      track: 1,
      element: document.querySelector('.gutter-col-1')!,
    },
  ],
});

const rowGutter = document.querySelector('.gutter-row-1') as HTMLDivElement;
const rowsGrid = document.querySelector('.grid-rows') as HTMLDivElement;
const toolbar = document.querySelector('#toolbar') as HTMLDivElement;
rowGutter.addEventListener('click', () => {
  if (toolbar.style.visibility === 'hidden') {
    rowsGrid.style.gridTemplateRows = '16px 8px 1fr';
    toolbar.style.visibility = 'visible';
    return;
  }
  rowsGrid.style.gridTemplateRows = '0px 8px 1fr';
  toolbar.style.visibility = 'hidden';
});
