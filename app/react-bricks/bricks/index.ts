import { types } from 'react-bricks/frontend';

// React Bricks UI website bricks
import website from 'react-bricks-ui/website';

// Example brick
import HeroUnit from './HeroUnit';

const bricks: types.Brick<any>[] = [
  ...website,
  HeroUnit,
  // Put here your other bricks...
];

export default bricks;
