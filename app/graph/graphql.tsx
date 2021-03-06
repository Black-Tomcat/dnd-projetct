import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * Allows use of a JSON String for input / output from the GraphQL schema.
     *
     * Use of this type is *not recommended* as you lose the benefits of having a defined, static
     * schema (one of the key benefits of GraphQL).
     */
    JSONString: any;
    /**
     * The `DateTime` scalar type represents a DateTime
     * value as specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    DateTime: any;
};

export type Query = {
    __typename?: "Query";
    me?: Maybe<User>;
    user?: Maybe<User>;
    users?: Maybe<UserConnection>;
    templates?: Maybe<TemplateConnection>;
    documents?: Maybe<DocumentConnection>;
    document?: Maybe<Document>;
};

export type QueryUserArgs = {
    id: Scalars["ID"];
};

export type QueryUsersArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["ID"]>;
    roles?: Maybe<Scalars["String"]>;
    username?: Maybe<Scalars["String"]>;
    username_Icontains?: Maybe<Scalars["String"]>;
    username_Not_Exact?: Maybe<Scalars["String"]>;
    id_Ne?: Maybe<Scalars["ID"]>;
};

export type QueryTemplatesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    created?: Maybe<Scalars["DateTime"]>;
    description?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ID"]>;
    title?: Maybe<Scalars["String"]>;
};

export type QueryDocumentsArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    created?: Maybe<Scalars["DateTime"]>;
    description?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ID"]>;
    title?: Maybe<Scalars["String"]>;
    author?: Maybe<Scalars["ID"]>;
    title_Icontains?: Maybe<Scalars["String"]>;
};

export type QueryDocumentArgs = {
    id: Scalars["ID"];
};

export type User = Node & {
    __typename?: "User";
    articles?: Maybe<DocumentConnection>;
    /** The ID of the object. */
    id: Scalars["ID"];
    roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
    username: Scalars["String"];
    sharedArticles?: Maybe<DocumentConnection>;
};

export type UserArticlesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    created?: Maybe<Scalars["DateTime"]>;
    description?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ID"]>;
    title?: Maybe<Scalars["String"]>;
    author?: Maybe<Scalars["ID"]>;
    title_Icontains?: Maybe<Scalars["String"]>;
};

export type UserSharedArticlesArgs = {
    before?: Maybe<Scalars["String"]>;
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    created?: Maybe<Scalars["DateTime"]>;
    description?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ID"]>;
    title?: Maybe<Scalars["String"]>;
    author?: Maybe<Scalars["ID"]>;
    title_Icontains?: Maybe<Scalars["String"]>;
};

/** An object with an ID */
export type Node = {
    /** The ID of the object. */
    id: Scalars["ID"];
};

export type DocumentConnection = {
    __typename?: "DocumentConnection";
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<DocumentEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
    __typename?: "PageInfo";
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]>;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]>;
};

/** A Relay edge containing a `Document` and its cursor. */
export type DocumentEdge = {
    __typename?: "DocumentEdge";
    /** The item at the end of the edge */
    node?: Maybe<Document>;
    /** A cursor for use in pagination */
    cursor: Scalars["String"];
};

export type Document = Node & {
    __typename?: "Document";
    author: User;
    contents: Array<DocumentSection>;
    created: Scalars["DateTime"];
    description?: Maybe<Scalars["String"]>;
    /** The ID of the object. */
    id: Scalars["ID"];
    privacySettings: PrivacySettings;
    title: Scalars["String"];
    isAuthor: Scalars["Boolean"];
    accessPermission: AccessEnum;
};

export type DocumentSection = {
    __typename?: "DocumentSection";
    content?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    template?: Maybe<TemplateSection>;
    values?: Maybe<Array<Maybe<Value>>>;
};

export type TemplateSection = {
    __typename?: "TemplateSection";
    defaultParams?: Maybe<Scalars["JSONString"]>;
    defaultValues?: Maybe<Scalars["JSONString"]>;
    name: Scalars["String"];
    renderType: Scalars["String"];
};

export type Value = {
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
};

export type PrivacySettings = {
    __typename?: "PrivacySettings";
    publicAccessType: AccessEnum;
    usersAccess: Array<UserPrivacySettings>;
    visibility: VisibilityEnum;
};

export enum AccessEnum {
    Read = "READ",
    Edit = "EDIT",
    None = "NONE",
}

export type UserPrivacySettings = {
    __typename?: "UserPrivacySettings";
    accessType: AccessEnum;
    user: User;
};

export enum VisibilityEnum {
    Private = "PRIVATE",
    Users = "USERS",
    Public = "PUBLIC",
}

export type UserConnection = {
    __typename?: "UserConnection";
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<UserEdge>>;
};

/** A Relay edge containing a `User` and its cursor. */
export type UserEdge = {
    __typename?: "UserEdge";
    /** The item at the end of the edge */
    node?: Maybe<User>;
    /** A cursor for use in pagination */
    cursor: Scalars["String"];
};

export type TemplateConnection = {
    __typename?: "TemplateConnection";
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<TemplateEdge>>;
};

/** A Relay edge containing a `Template` and its cursor. */
export type TemplateEdge = {
    __typename?: "TemplateEdge";
    /** The item at the end of the edge */
    node?: Maybe<Template>;
    /** A cursor for use in pagination */
    cursor: Scalars["String"];
};

export type Template = Node & {
    __typename?: "Template";
    created: Scalars["DateTime"];
    description?: Maybe<Scalars["String"]>;
    /** The ID of the object. */
    id: Scalars["ID"];
    title: Scalars["String"];
    contents: Array<Maybe<TemplateSection>>;
};

export type Mutation = {
    __typename?: "Mutation";
    login?: Maybe<LoginResult>;
    refresh?: Maybe<RefreshResult>;
    userCreate?: Maybe<UserCreateResult>;
    userUpdate?: Maybe<UserUpdateResult>;
    userDelete?: Maybe<UserDeleteResult>;
    documentCreate?: Maybe<DocumentCreateResult>;
    documentUpdate?: Maybe<DocumentUpdateResult>;
};

export type MutationLoginArgs = {
    password: Scalars["String"];
    username: Scalars["String"];
};

export type MutationRefreshArgs = {
    refreshToken: Scalars["String"];
};

export type MutationUserCreateArgs = {
    input?: Maybe<UserInput>;
    password: Scalars["String"];
    username: Scalars["String"];
};

export type MutationUserUpdateArgs = {
    input?: Maybe<UserInput>;
};

export type MutationDocumentCreateArgs = {
    input: DocumentInput;
};

export type MutationDocumentUpdateArgs = {
    id: Scalars["ID"];
    input: DocumentInput;
};

export type LoginResult = MutationFail | Login;

export type MutationFail = {
    __typename?: "MutationFail";
    errors?: Maybe<Array<Error>>;
};

export type Error = {
    __typename?: "Error";
    message: Scalars["String"];
    path: Array<Scalars["String"]>;
};

export type Login = {
    __typename?: "Login";
    refreshToken: Scalars["String"];
    accessToken: Scalars["String"];
    user: User;
};

export type RefreshResult = MutationFail | Refresh;

export type Refresh = {
    __typename?: "Refresh";
    accessToken: Scalars["String"];
};

export type UserCreateResult = MutationFail | UserCreate;

export type UserCreate = {
    __typename?: "UserCreate";
    user: User;
    refreshToken: Scalars["String"];
    accessToken: Scalars["String"];
};

export type UserInput = {
    roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UserUpdateResult = MutationFail | UserUpdate;

export type UserUpdate = {
    __typename?: "UserUpdate";
    user?: Maybe<User>;
};

export type UserDeleteResult = MutationFail | UserDelete;

export type UserDelete = {
    __typename?: "UserDelete";
    user?: Maybe<User>;
};

export type DocumentCreateResult = MutationFail | DocumentCreate;

export type DocumentCreate = {
    __typename?: "DocumentCreate";
    document: Document;
};

export type DocumentInput = {
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    author?: Maybe<Scalars["ID"]>;
    contents?: Maybe<Array<DocumentSectionInput>>;
    privacySettings?: Maybe<PrivacySettingsInput>;
};

export type DocumentSectionInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
};

export type PrivacySettingsInput = {
    visibility?: Maybe<VisibilityEnum>;
    publicAccessType?: Maybe<AccessEnum>;
    usersAccess?: Maybe<Array<UserPrivacySettingsInput>>;
};

export type UserPrivacySettingsInput = {
    accessType?: Maybe<AccessEnum>;
    id: Scalars["ID"];
};

export type DocumentUpdateResult = MutationFail | DocumentUpdate;

export type DocumentUpdate = {
    __typename?: "DocumentUpdate";
    document?: Maybe<Document>;
};

export type Subscription = {
    __typename?: "Subscription";
    documentUpdate?: Maybe<Document>;
    userUpdate?: Maybe<User>;
};

export type SubscriptionDocumentUpdateArgs = {
    id: Scalars["ID"];
};

export type SubscriptionUserUpdateArgs = {
    id: Scalars["ID"];
};

export type NumericValue = Value & {
    __typename?: "NumericValue";
    description?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    value?: Maybe<Scalars["Float"]>;
};

export type NumericRuleValue = Value &
    RuleValue & {
        __typename?: "NumericRuleValue";
        description?: Maybe<Scalars["String"]>;
        name: Scalars["String"];
        rules?: Maybe<Array<Maybe<Rule>>>;
        value?: Maybe<Scalars["Float"]>;
    };

export type RuleValue = {
    rules?: Maybe<Array<Maybe<Rule>>>;
};

export type Rule = {
    __typename?: "Rule";
    rule: Scalars["String"];
    targetValue: Scalars["String"];
};

export type LoginMutationVariables = {
    username: Scalars["String"];
    password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
    login?: Maybe<
        | ({ __typename?: "MutationFail" } & {
              errors?: Maybe<Array<{ __typename?: "Error" } & Pick<Error, "message" | "path">>>;
          })
        | ({ __typename?: "Login" } & Pick<Login, "refreshToken" | "accessToken"> & {
                  user: { __typename?: "User" } & Pick<User, "id">;
              })
    >;
};

export type RefreshMutationVariables = {
    refreshToken: Scalars["String"];
};

export type RefreshMutation = { __typename?: "Mutation" } & {
    refresh?: Maybe<
        | { __typename?: "MutationFail" }
        | ({ __typename?: "Refresh" } & Pick<Refresh, "accessToken">)
    >;
};

export type DocumentUpdateMutationVariables = {
    id: Scalars["ID"];
    input: DocumentInput;
};

export type DocumentUpdateMutation = { __typename?: "Mutation" } & {
    documentUpdate?: Maybe<
        | { __typename: "MutationFail" }
        | ({ __typename: "DocumentUpdate" } & {
              document?: Maybe<
                  { __typename?: "Document" } & Pick<
                      Document,
                      "id" | "title" | "description" | "created"
                  > & {
                          author: { __typename?: "User" } & Pick<User, "id">;
                          contents: Array<
                              { __typename?: "DocumentSection" } & Pick<
                                  DocumentSection,
                                  "name" | "description" | "content"
                              >
                          >;
                      }
              >;
          })
    >;
};

export type RegisterMutationVariables = {
    password: Scalars["String"];
    username: Scalars["String"];
};

export type RegisterMutation = { __typename?: "Mutation" } & {
    userCreate?: Maybe<
        | ({ __typename?: "MutationFail" } & {
              errors?: Maybe<Array<{ __typename?: "Error" } & Pick<Error, "message" | "path">>>;
          })
        | ({ __typename?: "UserCreate" } & Pick<UserCreate, "accessToken" | "refreshToken">)
    >;
};

export type CreateNewDocumentMutationVariables = {};

export type CreateNewDocumentMutation = { __typename?: "Mutation" } & {
    documentCreate?: Maybe<
        | { __typename: "MutationFail" }
        | ({ __typename: "DocumentCreate" } & {
              document: { __typename?: "Document" } & Pick<Document, "id">;
          })
    >;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: "Query" } & {
    me?: Maybe<
        { __typename: "User" } & Pick<User, "id" | "username"> & {
                articles?: Maybe<
                    { __typename?: "DocumentConnection" } & {
                        edges: Array<
                            Maybe<
                                { __typename?: "DocumentEdge" } & {
                                    node?: Maybe<
                                        { __typename: "Document" } & Pick<
                                            Document,
                                            "id" | "created" | "title" | "description"
                                        > & {
                                                contents: Array<
                                                    { __typename?: "DocumentSection" } & Pick<
                                                        DocumentSection,
                                                        "name" | "content" | "description"
                                                    > & {
                                                            template?: Maybe<
                                                                {
                                                                    __typename?: "TemplateSection";
                                                                } & Pick<
                                                                    TemplateSection,
                                                                    "name" | "renderType"
                                                                >
                                                            >;
                                                        }
                                                >;
                                            }
                                    >;
                                }
                            >
                        >;
                    }
                >;
                sharedArticles?: Maybe<
                    { __typename?: "DocumentConnection" } & {
                        edges: Array<
                            Maybe<
                                { __typename?: "DocumentEdge" } & {
                                    node?: Maybe<
                                        { __typename: "Document" } & Pick<
                                            Document,
                                            "id" | "created" | "title" | "description"
                                        > & {
                                                author: { __typename: "User" } & Pick<
                                                    User,
                                                    "id" | "username"
                                                >;
                                                contents: Array<
                                                    { __typename?: "DocumentSection" } & Pick<
                                                        DocumentSection,
                                                        "name" | "content" | "description"
                                                    > & {
                                                            template?: Maybe<
                                                                {
                                                                    __typename?: "TemplateSection";
                                                                } & Pick<
                                                                    TemplateSection,
                                                                    "name" | "renderType"
                                                                >
                                                            >;
                                                        }
                                                >;
                                            }
                                    >;
                                }
                            >
                        >;
                    }
                >;
            }
    >;
};

export type DocumentQueryVariables = {
    id: Scalars["ID"];
};

export type DocumentQuery = { __typename?: "Query" } & {
    document?: Maybe<
        { __typename: "Document" } & Pick<
            Document,
            "id" | "title" | "description" | "created" | "isAuthor" | "accessPermission"
        > & {
                author: { __typename: "User" } & Pick<User, "id" | "username">;
                privacySettings: { __typename?: "PrivacySettings" } & Pick<
                    PrivacySettings,
                    "visibility" | "publicAccessType"
                > & {
                        usersAccess: Array<
                            { __typename?: "UserPrivacySettings" } & Pick<
                                UserPrivacySettings,
                                "accessType"
                            > & { user: { __typename: "User" } & Pick<User, "id" | "username"> }
                        >;
                    };
                contents: Array<
                    { __typename?: "DocumentSection" } & Pick<
                        DocumentSection,
                        "name" | "description" | "content"
                    >
                >;
            }
    >;
};

export type SearchByUsernameQueryVariables = {
    usernameContains: Scalars["String"];
    meID: Scalars["ID"];
};

export type SearchByUsernameQuery = { __typename?: "Query" } & {
    users?: Maybe<
        { __typename?: "UserConnection" } & {
            edges: Array<
                Maybe<
                    { __typename?: "UserEdge" } & {
                        node?: Maybe<{ __typename: "User" } & Pick<User, "username" | "id">>;
                    }
                >
            >;
        }
    >;
};

export type GetMyDocumentsQueryVariables = {};

export type GetMyDocumentsQuery = { __typename?: "Query" } & {
    me?: Maybe<
        { __typename?: "User" } & {
            articles?: Maybe<
                { __typename?: "DocumentConnection" } & {
                    edges: Array<
                        Maybe<
                            { __typename?: "DocumentEdge" } & {
                                node?: Maybe<
                                    { __typename?: "Document" } & Pick<
                                        Document,
                                        "id" | "title" | "description"
                                    >
                                >;
                            }
                        >
                    >;
                }
            >;
        }
    >;
};

export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ... on Login {
                refreshToken
                accessToken
                user {
                    id
                }
            }
            ... on MutationFail {
                errors {
                    message
                    path
                }
            }
        }
    }
`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
    LoginMutation,
    LoginMutationVariables
>;
export type LoginComponentProps = Omit<
    ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>,
    "mutation"
>;

export const LoginComponent = (props: LoginComponentProps) => (
    <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables>
        mutation={LoginDocument}
        {...props}
    />
);

export type LoginProps<TChildProps = {}, TDataName extends string = "mutate"> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
} &
    TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = "mutate">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        LoginMutation,
        LoginMutationVariables,
        LoginProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withMutation<
        TProps,
        LoginMutation,
        LoginMutationVariables,
        LoginProps<TChildProps, TDataName>
    >(LoginDocument, {
        alias: "login",
        ...operationOptions,
    });
}
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
    LoginMutation,
    LoginMutationVariables
>;
export const RefreshDocument = gql`
    mutation refresh($refreshToken: String!) {
        refresh(refreshToken: $refreshToken) {
            ... on Refresh {
                accessToken
            }
        }
    }
`;
export type RefreshMutationFn = ApolloReactCommon.MutationFunction<
    RefreshMutation,
    RefreshMutationVariables
>;
export type RefreshComponentProps = Omit<
    ApolloReactComponents.MutationComponentOptions<RefreshMutation, RefreshMutationVariables>,
    "mutation"
>;

export const RefreshComponent = (props: RefreshComponentProps) => (
    <ApolloReactComponents.Mutation<RefreshMutation, RefreshMutationVariables>
        mutation={RefreshDocument}
        {...props}
    />
);

export type RefreshProps<TChildProps = {}, TDataName extends string = "mutate"> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<
        RefreshMutation,
        RefreshMutationVariables
    >;
} &
    TChildProps;
export function withRefresh<TProps, TChildProps = {}, TDataName extends string = "mutate">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        RefreshMutation,
        RefreshMutationVariables,
        RefreshProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withMutation<
        TProps,
        RefreshMutation,
        RefreshMutationVariables,
        RefreshProps<TChildProps, TDataName>
    >(RefreshDocument, {
        alias: "refresh",
        ...operationOptions,
    });
}
export type RefreshMutationResult = ApolloReactCommon.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = ApolloReactCommon.BaseMutationOptions<
    RefreshMutation,
    RefreshMutationVariables
>;
export const DocumentUpdateDocument = gql`
    mutation documentUpdate($id: ID!, $input: DocumentInput!) {
        documentUpdate(id: $id, input: $input) {
            __typename
            ... on DocumentUpdate {
                document {
                    id
                    title
                    description
                    created
                    author {
                        id
                    }
                    contents {
                        name
                        description
                        content
                    }
                }
            }
        }
    }
`;
export type DocumentUpdateMutationFn = ApolloReactCommon.MutationFunction<
    DocumentUpdateMutation,
    DocumentUpdateMutationVariables
>;
export type DocumentUpdateComponentProps = Omit<
    ApolloReactComponents.MutationComponentOptions<
        DocumentUpdateMutation,
        DocumentUpdateMutationVariables
    >,
    "mutation"
>;

export const DocumentUpdateComponent = (props: DocumentUpdateComponentProps) => (
    <ApolloReactComponents.Mutation<DocumentUpdateMutation, DocumentUpdateMutationVariables>
        mutation={DocumentUpdateDocument}
        {...props}
    />
);

export type DocumentUpdateProps<TChildProps = {}, TDataName extends string = "mutate"> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<
        DocumentUpdateMutation,
        DocumentUpdateMutationVariables
    >;
} &
    TChildProps;
export function withDocumentUpdate<TProps, TChildProps = {}, TDataName extends string = "mutate">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        DocumentUpdateMutation,
        DocumentUpdateMutationVariables,
        DocumentUpdateProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withMutation<
        TProps,
        DocumentUpdateMutation,
        DocumentUpdateMutationVariables,
        DocumentUpdateProps<TChildProps, TDataName>
    >(DocumentUpdateDocument, {
        alias: "documentUpdate",
        ...operationOptions,
    });
}
export type DocumentUpdateMutationResult = ApolloReactCommon.MutationResult<DocumentUpdateMutation>;
export type DocumentUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DocumentUpdateMutation,
    DocumentUpdateMutationVariables
>;
export const RegisterDocument = gql`
    mutation register($password: String!, $username: String!) {
        userCreate(password: $password, username: $username) {
            ... on UserCreate {
                accessToken
                refreshToken
            }
            ... on MutationFail {
                errors {
                    message
                    path
                }
            }
        }
    }
`;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<
    RegisterMutation,
    RegisterMutationVariables
>;
export type RegisterComponentProps = Omit<
    ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>,
    "mutation"
>;

export const RegisterComponent = (props: RegisterComponentProps) => (
    <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={RegisterDocument}
        {...props}
    />
);

export type RegisterProps<TChildProps = {}, TDataName extends string = "mutate"> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<
        RegisterMutation,
        RegisterMutationVariables
    >;
} &
    TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = "mutate">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        RegisterMutation,
        RegisterMutationVariables,
        RegisterProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withMutation<
        TProps,
        RegisterMutation,
        RegisterMutationVariables,
        RegisterProps<TChildProps, TDataName>
    >(RegisterDocument, {
        alias: "register",
        ...operationOptions,
    });
}
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<
    RegisterMutation,
    RegisterMutationVariables
>;
export const CreateNewDocumentDocument = gql`
    mutation createNewDocument {
        documentCreate(input: { title: "Untitled Document" }) {
            __typename
            ... on DocumentCreate {
                document {
                    id
                }
            }
        }
    }
`;
export type CreateNewDocumentMutationFn = ApolloReactCommon.MutationFunction<
    CreateNewDocumentMutation,
    CreateNewDocumentMutationVariables
>;
export type CreateNewDocumentComponentProps = Omit<
    ApolloReactComponents.MutationComponentOptions<
        CreateNewDocumentMutation,
        CreateNewDocumentMutationVariables
    >,
    "mutation"
>;

export const CreateNewDocumentComponent = (props: CreateNewDocumentComponentProps) => (
    <ApolloReactComponents.Mutation<CreateNewDocumentMutation, CreateNewDocumentMutationVariables>
        mutation={CreateNewDocumentDocument}
        {...props}
    />
);

export type CreateNewDocumentProps<TChildProps = {}, TDataName extends string = "mutate"> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<
        CreateNewDocumentMutation,
        CreateNewDocumentMutationVariables
    >;
} &
    TChildProps;
export function withCreateNewDocument<
    TProps,
    TChildProps = {},
    TDataName extends string = "mutate"
>(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        CreateNewDocumentMutation,
        CreateNewDocumentMutationVariables,
        CreateNewDocumentProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withMutation<
        TProps,
        CreateNewDocumentMutation,
        CreateNewDocumentMutationVariables,
        CreateNewDocumentProps<TChildProps, TDataName>
    >(CreateNewDocumentDocument, {
        alias: "createNewDocument",
        ...operationOptions,
    });
}
export type CreateNewDocumentMutationResult = ApolloReactCommon.MutationResult<
    CreateNewDocumentMutation
>;
export type CreateNewDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateNewDocumentMutation,
    CreateNewDocumentMutationVariables
>;
export const MeDocument = gql`
    query me {
        me {
            __typename
            id
            username
            articles {
                edges {
                    node {
                        __typename
                        id
                        created
                        title
                        description
                        contents {
                            name
                            content
                            description
                            template {
                                name
                                renderType
                            }
                        }
                    }
                }
            }
            sharedArticles {
                edges {
                    node {
                        __typename
                        id
                        created
                        title
                        description
                        author {
                            __typename
                            id
                            username
                        }
                        contents {
                            name
                            content
                            description
                            template {
                                name
                                renderType
                            }
                        }
                    }
                }
            }
        }
    }
`;
export type MeComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>,
    "query"
>;

export const MeComponent = (props: MeComponentProps) => (
    <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
);

export type MeProps<TChildProps = {}, TDataName extends string = "data"> = {
    [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>;
} &
    TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = "data">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        MeQuery,
        MeQueryVariables,
        MeProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        MeQuery,
        MeQueryVariables,
        MeProps<TChildProps, TDataName>
    >(MeDocument, {
        alias: "me",
        ...operationOptions,
    });
}
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const DocumentDocument = gql`
    query document($id: ID!) {
        document(id: $id) {
            __typename
            id
            title
            description
            created
            author {
                __typename
                id
                username
            }
            isAuthor
            accessPermission
            privacySettings {
                visibility
                publicAccessType
                usersAccess {
                    user {
                        __typename
                        id
                        username
                    }
                    accessType
                }
            }
            contents {
                name
                description
                content
            }
        }
    }
`;
export type DocumentComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<DocumentQuery, DocumentQueryVariables>,
    "query"
> &
    ({ variables: DocumentQueryVariables; skip?: boolean } | { skip: boolean });

export const DocumentComponent = (props: DocumentComponentProps) => (
    <ApolloReactComponents.Query<DocumentQuery, DocumentQueryVariables>
        query={DocumentDocument}
        {...props}
    />
);

export type DocumentProps<TChildProps = {}, TDataName extends string = "data"> = {
    [key in TDataName]: ApolloReactHoc.DataValue<DocumentQuery, DocumentQueryVariables>;
} &
    TChildProps;
export function withDocument<TProps, TChildProps = {}, TDataName extends string = "data">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        DocumentQuery,
        DocumentQueryVariables,
        DocumentProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        DocumentQuery,
        DocumentQueryVariables,
        DocumentProps<TChildProps, TDataName>
    >(DocumentDocument, {
        alias: "document",
        ...operationOptions,
    });
}
export type DocumentQueryResult = ApolloReactCommon.QueryResult<
    DocumentQuery,
    DocumentQueryVariables
>;
export const SearchByUsernameDocument = gql`
    query searchByUsername($usernameContains: String!, $meID: ID!) {
        users(username_Icontains: $usernameContains, first: 5, id_Ne: $meID) {
            edges {
                node {
                    __typename
                    username
                    id
                }
            }
        }
    }
`;
export type SearchByUsernameComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<
        SearchByUsernameQuery,
        SearchByUsernameQueryVariables
    >,
    "query"
> &
    ({ variables: SearchByUsernameQueryVariables; skip?: boolean } | { skip: boolean });

export const SearchByUsernameComponent = (props: SearchByUsernameComponentProps) => (
    <ApolloReactComponents.Query<SearchByUsernameQuery, SearchByUsernameQueryVariables>
        query={SearchByUsernameDocument}
        {...props}
    />
);

export type SearchByUsernameProps<TChildProps = {}, TDataName extends string = "data"> = {
    [key in TDataName]: ApolloReactHoc.DataValue<
        SearchByUsernameQuery,
        SearchByUsernameQueryVariables
    >;
} &
    TChildProps;
export function withSearchByUsername<TProps, TChildProps = {}, TDataName extends string = "data">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        SearchByUsernameQuery,
        SearchByUsernameQueryVariables,
        SearchByUsernameProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        SearchByUsernameQuery,
        SearchByUsernameQueryVariables,
        SearchByUsernameProps<TChildProps, TDataName>
    >(SearchByUsernameDocument, {
        alias: "searchByUsername",
        ...operationOptions,
    });
}
export type SearchByUsernameQueryResult = ApolloReactCommon.QueryResult<
    SearchByUsernameQuery,
    SearchByUsernameQueryVariables
>;
export const GetMyDocumentsDocument = gql`
    query getMyDocuments {
        me {
            articles {
                edges {
                    node {
                        id
                        title
                        description
                    }
                }
            }
        }
    }
`;
export type GetMyDocumentsComponentProps = Omit<
    ApolloReactComponents.QueryComponentOptions<GetMyDocumentsQuery, GetMyDocumentsQueryVariables>,
    "query"
>;

export const GetMyDocumentsComponent = (props: GetMyDocumentsComponentProps) => (
    <ApolloReactComponents.Query<GetMyDocumentsQuery, GetMyDocumentsQueryVariables>
        query={GetMyDocumentsDocument}
        {...props}
    />
);

export type GetMyDocumentsProps<TChildProps = {}, TDataName extends string = "data"> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetMyDocumentsQuery, GetMyDocumentsQueryVariables>;
} &
    TChildProps;
export function withGetMyDocuments<TProps, TChildProps = {}, TDataName extends string = "data">(
    operationOptions?: ApolloReactHoc.OperationOption<
        TProps,
        GetMyDocumentsQuery,
        GetMyDocumentsQueryVariables,
        GetMyDocumentsProps<TChildProps, TDataName>
    >
) {
    return ApolloReactHoc.withQuery<
        TProps,
        GetMyDocumentsQuery,
        GetMyDocumentsQueryVariables,
        GetMyDocumentsProps<TChildProps, TDataName>
    >(GetMyDocumentsDocument, {
        alias: "getMyDocuments",
        ...operationOptions,
    });
}
export type GetMyDocumentsQueryResult = ApolloReactCommon.QueryResult<
    GetMyDocumentsQuery,
    GetMyDocumentsQueryVariables
>;

export interface IntrospectionResultData {
    __schema: {
        types: {
            kind: string;
            name: string;
            possibleTypes: {
                name: string;
            }[];
        }[];
    };
}
const result: IntrospectionResultData = {
    __schema: {
        types: [
            {
                kind: "INTERFACE",
                name: "Node",
                possibleTypes: [
                    {
                        name: "User",
                    },
                    {
                        name: "Document",
                    },
                    {
                        name: "Template",
                    },
                ],
            },
            {
                kind: "INTERFACE",
                name: "Value",
                possibleTypes: [
                    {
                        name: "NumericValue",
                    },
                    {
                        name: "NumericRuleValue",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "LoginResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "Login",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "RefreshResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "Refresh",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "UserCreateResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "UserCreate",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "UserUpdateResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "UserUpdate",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "UserDeleteResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "UserDelete",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "DocumentCreateResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "DocumentCreate",
                    },
                ],
            },
            {
                kind: "UNION",
                name: "DocumentUpdateResult",
                possibleTypes: [
                    {
                        name: "MutationFail",
                    },
                    {
                        name: "DocumentUpdate",
                    },
                ],
            },
            {
                kind: "INTERFACE",
                name: "RuleValue",
                possibleTypes: [
                    {
                        name: "NumericRuleValue",
                    },
                ],
            },
        ],
    },
};
export default result;
