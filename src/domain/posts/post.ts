export type PostID = number;

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = {
  id: PostID;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
};

export type PostAuthor = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
};

export type PostCategory = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
};

export type PostData = {
  id: PostID;
  documentId: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
  cover: PostCover;
  author: PostAuthor;
  category: PostCategory;
  localizations: unknown[]; // Ajuste para localizações, se necessário
};

export type ApiResponseMeta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type ApiResponse = {
  data: PostData[];
  meta: ApiResponseMeta;
};
