import openColor from "open-color";
interface Colors {
  [key: string]: string;
}

export default () => {
  const colors: Colors = {};
  Object.entries(openColor).map(
    ([key, colorList]: [string, string | string[]]) => {
      const list: string[] = Array.isArray(colorList) ? colorList : [colorList];
      if (list.length === 1) {
        colors[key] = list[0];
        return;
      }
      list.forEach((color: string, i: number) => {
        const idx: string = key + i;
        colors[idx] = color;
      });
    }
  );
  return colors;
};

