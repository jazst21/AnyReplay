// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, Replay } = initSchema(schema);

export {
  Comments,
  Replay
};