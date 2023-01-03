type NullUndefined = null | undefined;

export interface Svg {
  width: string | NullUndefined;
  height: string | NullUndefined;
  viewBox: string | NullUndefined;
  paths: { definition: string; id: string; fill: string }[];
}

export async function getSvgFromUrl(url: string): Promise<Svg> {
  const response = await fetch(url);
  const svgString = await response.text();
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
  const svg = svgDoc.querySelector('svg');
  const pathElements = svgDoc.querySelectorAll('path');

  return {
    width: svg?.getAttribute('width'),
    height: svg?.getAttribute('height'),
    viewBox: svg?.getAttribute('viewBox'),
    paths: Array.from(pathElements).map((path, index) => {
      const paths = path.getAttribute('d') || '';
      const fill = path.getAttribute('fill') || '';
      const id = `${index}-${paths}`;
      return {definition: paths, fill, id};
    })
  };
}
