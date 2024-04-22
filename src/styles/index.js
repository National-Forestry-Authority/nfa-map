import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Circle from 'ol/style/Circle';
import Text from 'ol/style/Text';

// Define the available colors and their associated RGBA values.
// Colors are listed in README.md documentation, keep these in sync.
const colors = {
  blue: 'rgba(51,153,255,1)',
  lightgreen: 'rgb(170,255,0,1)',
  green: 'rgba(51,153,51,1)',
  darkgreen: 'rgb(34,85,51,1)',
  grey: 'rgba(204,204,204,0.7)',
  orange: 'rgba(255,153,51,1)',
  red: 'rgba(204,0,0,1)',
  purple: 'rgba(204,51,102,1)',
  yellow: 'rgba(255,255,51,1)',
};

// Returns an OpenLayers Style for a given color.
const colorStyles = (color) => {
  let rgba = colors[color] || colors.yellow;

  // Allow for custom colors.
  if (color.startsWith('#')) {
    if (color.length === 7) {
      rgba = `rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)} ,1`;
    } else if (color.length === 9) {
      rgba = `rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)},${parseInt(color.slice(7, 9), 16)}`;
    }
  } else if (color.startsWith('rgba')) {
    rgba = color;
  }
  else if (color.startsWith('rgb')) {
    rgba = color.replace('rgb', 'rgba').replace(')', ',1)');
  }

  const stroke = new Stroke({
    color: rgba,
    width: 2,
  });
  const fill = new Fill({
    color: 'rgba(0,0,0,0)',
  });
  const image = new Circle({
    stroke,
    fill,
    radius: 4,
  });
  return new Style({
    stroke,
    fill,
    image,
  });
};
export default colorStyles;

// Provide a standard cluster style.
const styleCache = {};
export function clusterStyle(feature) {
  const size = feature.get('features').length;
  let style = styleCache[size];
  if (!style) {
    style = new Style({
      image: new Circle({
        radius: 14,
        stroke: new Stroke({
          color: 'rgba(255,255,255,1)',
        }),
        fill: new Fill({
          color: 'green',
        }),
      }),
      text: new Text({
        text: size.toString(),
        fill: new Fill({
          color: 'rgba(255,255,255,1)',
        }),
      }),
    });
    styleCache[size] = style;
  }
  return style;
}
