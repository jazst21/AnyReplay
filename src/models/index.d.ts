import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReplayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comments {
  readonly id: string;
  readonly replay_id?: string | null;
  readonly comment?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comments, CommentsMetaData>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

export declare class Replay {
  readonly id: string;
  readonly teamA?: string | null;
  readonly teamB?: string | null;
  readonly scoreA?: number | null;
  readonly scoreB?: number | null;
  readonly video_url_replay?: string | null;
  readonly image_url_replay?: string | null;
  readonly date?: string | null;
  readonly rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Replay, ReplayMetaData>);
  static copyOf(source: Replay, mutator: (draft: MutableModel<Replay, ReplayMetaData>) => MutableModel<Replay, ReplayMetaData> | void): Replay;
}