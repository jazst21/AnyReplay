import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReplayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comments {
  readonly id: string;
  readonly replay_id?: string;
  readonly comment?: string;
  readonly username?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comments, CommentsMetaData>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

export declare class Replay {
  readonly id: string;
  readonly teamA?: string;
  readonly teamB?: string;
  readonly scoreA?: number;
  readonly scoreB?: number;
  readonly video_url_replay?: string;
  readonly image_url_replay?: string;
  readonly date?: string;
  readonly rating?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Replay, ReplayMetaData>);
  static copyOf(source: Replay, mutator: (draft: MutableModel<Replay, ReplayMetaData>) => MutableModel<Replay, ReplayMetaData> | void): Replay;
}