
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AccessCode
 * 
 */
export type AccessCode = $Result.DefaultSelection<Prisma.$AccessCodePayload>
/**
 * Model Cause
 * 
 */
export type Cause = $Result.DefaultSelection<Prisma.$CausePayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model Don
 * 
 */
export type Don = $Result.DefaultSelection<Prisma.$DonPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model WebhookEvent
 * 
 */
export type WebhookEvent = $Result.DefaultSelection<Prisma.$WebhookEventPayload>
/**
 * Model Signatory
 * 
 */
export type Signatory = $Result.DefaultSelection<Prisma.$SignatoryPayload>
/**
 * Model PayoutRequest
 * 
 */
export type PayoutRequest = $Result.DefaultSelection<Prisma.$PayoutRequestPayload>
/**
 * Model PayoutApproval
 * 
 */
export type PayoutApproval = $Result.DefaultSelection<Prisma.$PayoutApprovalPayload>
/**
 * Model Ceinture
 * 
 */
export type Ceinture = $Result.DefaultSelection<Prisma.$CeinturePayload>
/**
 * Model Poem
 * 
 */
export type Poem = $Result.DefaultSelection<Prisma.$PoemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessCode`: Exposes CRUD operations for the **AccessCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessCodes
    * const accessCodes = await prisma.accessCode.findMany()
    * ```
    */
  get accessCode(): Prisma.AccessCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cause`: Exposes CRUD operations for the **Cause** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Causes
    * const causes = await prisma.cause.findMany()
    * ```
    */
  get cause(): Prisma.CauseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.don`: Exposes CRUD operations for the **Don** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dons
    * const dons = await prisma.don.findMany()
    * ```
    */
  get don(): Prisma.DonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookEvent`: Exposes CRUD operations for the **WebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvent.findMany()
    * ```
    */
  get webhookEvent(): Prisma.WebhookEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signatory`: Exposes CRUD operations for the **Signatory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signatories
    * const signatories = await prisma.signatory.findMany()
    * ```
    */
  get signatory(): Prisma.SignatoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payoutRequest`: Exposes CRUD operations for the **PayoutRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayoutRequests
    * const payoutRequests = await prisma.payoutRequest.findMany()
    * ```
    */
  get payoutRequest(): Prisma.PayoutRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payoutApproval`: Exposes CRUD operations for the **PayoutApproval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayoutApprovals
    * const payoutApprovals = await prisma.payoutApproval.findMany()
    * ```
    */
  get payoutApproval(): Prisma.PayoutApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ceinture`: Exposes CRUD operations for the **Ceinture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ceintures
    * const ceintures = await prisma.ceinture.findMany()
    * ```
    */
  get ceinture(): Prisma.CeintureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poem`: Exposes CRUD operations for the **Poem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Poems
    * const poems = await prisma.poem.findMany()
    * ```
    */
  get poem(): Prisma.PoemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AccessCode: 'AccessCode',
    Cause: 'Cause',
    Milestone: 'Milestone',
    Don: 'Don',
    Payment: 'Payment',
    WebhookEvent: 'WebhookEvent',
    Signatory: 'Signatory',
    PayoutRequest: 'PayoutRequest',
    PayoutApproval: 'PayoutApproval',
    Ceinture: 'Ceinture',
    Poem: 'Poem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "accessCode" | "cause" | "milestone" | "don" | "payment" | "webhookEvent" | "signatory" | "payoutRequest" | "payoutApproval" | "ceinture" | "poem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AccessCode: {
        payload: Prisma.$AccessCodePayload<ExtArgs>
        fields: Prisma.AccessCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>
          }
          findFirst: {
            args: Prisma.AccessCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>
          }
          findMany: {
            args: Prisma.AccessCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>[]
          }
          create: {
            args: Prisma.AccessCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>
          }
          createMany: {
            args: Prisma.AccessCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>[]
          }
          delete: {
            args: Prisma.AccessCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>
          }
          update: {
            args: Prisma.AccessCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>
          }
          deleteMany: {
            args: Prisma.AccessCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>[]
          }
          upsert: {
            args: Prisma.AccessCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessCodePayload>
          }
          aggregate: {
            args: Prisma.AccessCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessCode>
          }
          groupBy: {
            args: Prisma.AccessCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessCodeCountArgs<ExtArgs>
            result: $Utils.Optional<AccessCodeCountAggregateOutputType> | number
          }
        }
      }
      Cause: {
        payload: Prisma.$CausePayload<ExtArgs>
        fields: Prisma.CauseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CauseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CauseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>
          }
          findFirst: {
            args: Prisma.CauseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CauseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>
          }
          findMany: {
            args: Prisma.CauseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>[]
          }
          create: {
            args: Prisma.CauseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>
          }
          createMany: {
            args: Prisma.CauseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CauseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>[]
          }
          delete: {
            args: Prisma.CauseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>
          }
          update: {
            args: Prisma.CauseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>
          }
          deleteMany: {
            args: Prisma.CauseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CauseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CauseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>[]
          }
          upsert: {
            args: Prisma.CauseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CausePayload>
          }
          aggregate: {
            args: Prisma.CauseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCause>
          }
          groupBy: {
            args: Prisma.CauseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CauseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CauseCountArgs<ExtArgs>
            result: $Utils.Optional<CauseCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      Don: {
        payload: Prisma.$DonPayload<ExtArgs>
        fields: Prisma.DonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>
          }
          findFirst: {
            args: Prisma.DonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>
          }
          findMany: {
            args: Prisma.DonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>[]
          }
          create: {
            args: Prisma.DonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>
          }
          createMany: {
            args: Prisma.DonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>[]
          }
          delete: {
            args: Prisma.DonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>
          }
          update: {
            args: Prisma.DonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>
          }
          deleteMany: {
            args: Prisma.DonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>[]
          }
          upsert: {
            args: Prisma.DonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonPayload>
          }
          aggregate: {
            args: Prisma.DonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDon>
          }
          groupBy: {
            args: Prisma.DonGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonCountArgs<ExtArgs>
            result: $Utils.Optional<DonCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvent: {
        payload: Prisma.$WebhookEventPayload<ExtArgs>
        fields: Prisma.WebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findMany: {
            args: Prisma.WebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          create: {
            args: Prisma.WebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          createMany: {
            args: Prisma.WebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          update: {
            args: Prisma.WebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.WebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvent>
          }
          groupBy: {
            args: Prisma.WebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventCountAggregateOutputType> | number
          }
        }
      }
      Signatory: {
        payload: Prisma.$SignatoryPayload<ExtArgs>
        fields: Prisma.SignatoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignatoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignatoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>
          }
          findFirst: {
            args: Prisma.SignatoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignatoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>
          }
          findMany: {
            args: Prisma.SignatoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>[]
          }
          create: {
            args: Prisma.SignatoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>
          }
          createMany: {
            args: Prisma.SignatoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignatoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>[]
          }
          delete: {
            args: Prisma.SignatoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>
          }
          update: {
            args: Prisma.SignatoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>
          }
          deleteMany: {
            args: Prisma.SignatoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignatoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignatoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>[]
          }
          upsert: {
            args: Prisma.SignatoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatoryPayload>
          }
          aggregate: {
            args: Prisma.SignatoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignatory>
          }
          groupBy: {
            args: Prisma.SignatoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignatoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignatoryCountArgs<ExtArgs>
            result: $Utils.Optional<SignatoryCountAggregateOutputType> | number
          }
        }
      }
      PayoutRequest: {
        payload: Prisma.$PayoutRequestPayload<ExtArgs>
        fields: Prisma.PayoutRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          findFirst: {
            args: Prisma.PayoutRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          findMany: {
            args: Prisma.PayoutRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>[]
          }
          create: {
            args: Prisma.PayoutRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          createMany: {
            args: Prisma.PayoutRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>[]
          }
          delete: {
            args: Prisma.PayoutRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          update: {
            args: Prisma.PayoutRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          deleteMany: {
            args: Prisma.PayoutRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayoutRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>[]
          }
          upsert: {
            args: Prisma.PayoutRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          aggregate: {
            args: Prisma.PayoutRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayoutRequest>
          }
          groupBy: {
            args: Prisma.PayoutRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutRequestCountAggregateOutputType> | number
          }
        }
      }
      PayoutApproval: {
        payload: Prisma.$PayoutApprovalPayload<ExtArgs>
        fields: Prisma.PayoutApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>
          }
          findFirst: {
            args: Prisma.PayoutApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>
          }
          findMany: {
            args: Prisma.PayoutApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>[]
          }
          create: {
            args: Prisma.PayoutApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>
          }
          createMany: {
            args: Prisma.PayoutApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>[]
          }
          delete: {
            args: Prisma.PayoutApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>
          }
          update: {
            args: Prisma.PayoutApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>
          }
          deleteMany: {
            args: Prisma.PayoutApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayoutApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>[]
          }
          upsert: {
            args: Prisma.PayoutApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutApprovalPayload>
          }
          aggregate: {
            args: Prisma.PayoutApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayoutApproval>
          }
          groupBy: {
            args: Prisma.PayoutApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutApprovalCountAggregateOutputType> | number
          }
        }
      }
      Ceinture: {
        payload: Prisma.$CeinturePayload<ExtArgs>
        fields: Prisma.CeintureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CeintureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CeintureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>
          }
          findFirst: {
            args: Prisma.CeintureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CeintureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>
          }
          findMany: {
            args: Prisma.CeintureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>[]
          }
          create: {
            args: Prisma.CeintureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>
          }
          createMany: {
            args: Prisma.CeintureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CeintureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>[]
          }
          delete: {
            args: Prisma.CeintureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>
          }
          update: {
            args: Prisma.CeintureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>
          }
          deleteMany: {
            args: Prisma.CeintureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CeintureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CeintureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>[]
          }
          upsert: {
            args: Prisma.CeintureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CeinturePayload>
          }
          aggregate: {
            args: Prisma.CeintureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCeinture>
          }
          groupBy: {
            args: Prisma.CeintureGroupByArgs<ExtArgs>
            result: $Utils.Optional<CeintureGroupByOutputType>[]
          }
          count: {
            args: Prisma.CeintureCountArgs<ExtArgs>
            result: $Utils.Optional<CeintureCountAggregateOutputType> | number
          }
        }
      }
      Poem: {
        payload: Prisma.$PoemPayload<ExtArgs>
        fields: Prisma.PoemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          findFirst: {
            args: Prisma.PoemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          findMany: {
            args: Prisma.PoemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>[]
          }
          create: {
            args: Prisma.PoemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          createMany: {
            args: Prisma.PoemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>[]
          }
          delete: {
            args: Prisma.PoemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          update: {
            args: Prisma.PoemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          deleteMany: {
            args: Prisma.PoemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>[]
          }
          upsert: {
            args: Prisma.PoemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          aggregate: {
            args: Prisma.PoemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoem>
          }
          groupBy: {
            args: Prisma.PoemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoemCountArgs<ExtArgs>
            result: $Utils.Optional<PoemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    accessCode?: AccessCodeOmit
    cause?: CauseOmit
    milestone?: MilestoneOmit
    don?: DonOmit
    payment?: PaymentOmit
    webhookEvent?: WebhookEventOmit
    signatory?: SignatoryOmit
    payoutRequest?: PayoutRequestOmit
    payoutApproval?: PayoutApprovalOmit
    ceinture?: CeintureOmit
    poem?: PoemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    causesSubmitted: number
    donsMade: number
    ceintures: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    causesSubmitted?: boolean | UserCountOutputTypeCountCausesSubmittedArgs
    donsMade?: boolean | UserCountOutputTypeCountDonsMadeArgs
    ceintures?: boolean | UserCountOutputTypeCountCeinturesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCausesSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CauseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCeinturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CeintureWhereInput
  }


  /**
   * Count Type CauseCountOutputType
   */

  export type CauseCountOutputType = {
    milestones: number
    dons: number
    signatories: number
    payoutRequests: number
  }

  export type CauseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | CauseCountOutputTypeCountMilestonesArgs
    dons?: boolean | CauseCountOutputTypeCountDonsArgs
    signatories?: boolean | CauseCountOutputTypeCountSignatoriesArgs
    payoutRequests?: boolean | CauseCountOutputTypeCountPayoutRequestsArgs
  }

  // Custom InputTypes
  /**
   * CauseCountOutputType without action
   */
  export type CauseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseCountOutputType
     */
    select?: CauseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CauseCountOutputType without action
   */
  export type CauseCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }

  /**
   * CauseCountOutputType without action
   */
  export type CauseCountOutputTypeCountDonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonWhereInput
  }

  /**
   * CauseCountOutputType without action
   */
  export type CauseCountOutputTypeCountSignatoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignatoryWhereInput
  }

  /**
   * CauseCountOutputType without action
   */
  export type CauseCountOutputTypeCountPayoutRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutRequestWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    webhookEvents: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhookEvents?: boolean | PaymentCountOutputTypeCountWebhookEventsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountWebhookEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
  }


  /**
   * Count Type SignatoryCountOutputType
   */

  export type SignatoryCountOutputType = {
    approvals: number
  }

  export type SignatoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | SignatoryCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * SignatoryCountOutputType without action
   */
  export type SignatoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryCountOutputType
     */
    select?: SignatoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignatoryCountOutputType without action
   */
  export type SignatoryCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutApprovalWhereInput
  }


  /**
   * Count Type PayoutRequestCountOutputType
   */

  export type PayoutRequestCountOutputType = {
    approvals: number
  }

  export type PayoutRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | PayoutRequestCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * PayoutRequestCountOutputType without action
   */
  export type PayoutRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequestCountOutputType
     */
    select?: PayoutRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayoutRequestCountOutputType without action
   */
  export type PayoutRequestCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutApprovalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: string | null
    email: string | null
    name: string | null
    phone: string | null
    city: string | null
    country: string | null
    mobileMoneyConfig: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: string | null
    email: string | null
    name: string | null
    phone: string | null
    city: string | null
    country: string | null
    mobileMoneyConfig: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    email: number
    name: number
    phone: number
    city: number
    country: number
    mobileMoneyConfig: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    email?: true
    name?: true
    phone?: true
    city?: true
    country?: true
    mobileMoneyConfig?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    email?: true
    name?: true
    phone?: true
    city?: true
    country?: true
    mobileMoneyConfig?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    email?: true
    name?: true
    phone?: true
    city?: true
    country?: true
    mobileMoneyConfig?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: string
    email: string
    name: string | null
    phone: string | null
    city: string | null
    country: string | null
    mobileMoneyConfig: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    mobileMoneyConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    causesSubmitted?: boolean | User$causesSubmittedArgs<ExtArgs>
    donsMade?: boolean | User$donsMadeArgs<ExtArgs>
    ceintures?: boolean | User$ceinturesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    mobileMoneyConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    mobileMoneyConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    mobileMoneyConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "email" | "name" | "phone" | "city" | "country" | "mobileMoneyConfig" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    causesSubmitted?: boolean | User$causesSubmittedArgs<ExtArgs>
    donsMade?: boolean | User$donsMadeArgs<ExtArgs>
    ceintures?: boolean | User$ceinturesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      causesSubmitted: Prisma.$CausePayload<ExtArgs>[]
      donsMade: Prisma.$DonPayload<ExtArgs>[]
      ceintures: Prisma.$CeinturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      email: string
      name: string | null
      phone: string | null
      city: string | null
      country: string | null
      mobileMoneyConfig: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    causesSubmitted<T extends User$causesSubmittedArgs<ExtArgs> = {}>(args?: Subset<T, User$causesSubmittedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donsMade<T extends User$donsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$donsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ceintures<T extends User$ceinturesArgs<ExtArgs> = {}>(args?: Subset<T, User$ceinturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly mobileMoneyConfig: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.causesSubmitted
   */
  export type User$causesSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    where?: CauseWhereInput
    orderBy?: CauseOrderByWithRelationInput | CauseOrderByWithRelationInput[]
    cursor?: CauseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CauseScalarFieldEnum | CauseScalarFieldEnum[]
  }

  /**
   * User.donsMade
   */
  export type User$donsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    where?: DonWhereInput
    orderBy?: DonOrderByWithRelationInput | DonOrderByWithRelationInput[]
    cursor?: DonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonScalarFieldEnum | DonScalarFieldEnum[]
  }

  /**
   * User.ceintures
   */
  export type User$ceinturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    where?: CeintureWhereInput
    orderBy?: CeintureOrderByWithRelationInput | CeintureOrderByWithRelationInput[]
    cursor?: CeintureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CeintureScalarFieldEnum | CeintureScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AccessCode
   */

  export type AggregateAccessCode = {
    _count: AccessCodeCountAggregateOutputType | null
    _min: AccessCodeMinAggregateOutputType | null
    _max: AccessCodeMaxAggregateOutputType | null
  }

  export type AccessCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    issuedBy: string | null
    usedBy: string | null
    usedAt: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    issuedBy: string | null
    usedBy: string | null
    usedAt: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessCodeCountAggregateOutputType = {
    id: number
    code: number
    type: number
    issuedBy: number
    usedBy: number
    usedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessCodeMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    issuedBy?: true
    usedBy?: true
    usedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessCodeMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    issuedBy?: true
    usedBy?: true
    usedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessCodeCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    issuedBy?: true
    usedBy?: true
    usedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessCode to aggregate.
     */
    where?: AccessCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessCodes to fetch.
     */
    orderBy?: AccessCodeOrderByWithRelationInput | AccessCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessCodes
    **/
    _count?: true | AccessCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessCodeMaxAggregateInputType
  }

  export type GetAccessCodeAggregateType<T extends AccessCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessCode[P]>
      : GetScalarType<T[P], AggregateAccessCode[P]>
  }




  export type AccessCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessCodeWhereInput
    orderBy?: AccessCodeOrderByWithAggregationInput | AccessCodeOrderByWithAggregationInput[]
    by: AccessCodeScalarFieldEnum[] | AccessCodeScalarFieldEnum
    having?: AccessCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessCodeCountAggregateInputType | true
    _min?: AccessCodeMinAggregateInputType
    _max?: AccessCodeMaxAggregateInputType
  }

  export type AccessCodeGroupByOutputType = {
    id: string
    code: string
    type: string
    issuedBy: string | null
    usedBy: string | null
    usedAt: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AccessCodeCountAggregateOutputType | null
    _min: AccessCodeMinAggregateOutputType | null
    _max: AccessCodeMaxAggregateOutputType | null
  }

  type GetAccessCodeGroupByPayload<T extends AccessCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessCodeGroupByOutputType[P]>
            : GetScalarType<T[P], AccessCodeGroupByOutputType[P]>
        }
      >
    >


  export type AccessCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    issuedBy?: boolean
    usedBy?: boolean
    usedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | AccessCode$causeArgs<ExtArgs>
  }, ExtArgs["result"]["accessCode"]>

  export type AccessCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    issuedBy?: boolean
    usedBy?: boolean
    usedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessCode"]>

  export type AccessCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    issuedBy?: boolean
    usedBy?: boolean
    usedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accessCode"]>

  export type AccessCodeSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    issuedBy?: boolean
    usedBy?: boolean
    usedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccessCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "issuedBy" | "usedBy" | "usedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["accessCode"]>
  export type AccessCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | AccessCode$causeArgs<ExtArgs>
  }
  export type AccessCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccessCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccessCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessCode"
    objects: {
      cause: Prisma.$CausePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: string
      issuedBy: string | null
      usedBy: string | null
      usedAt: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessCode"]>
    composites: {}
  }

  type AccessCodeGetPayload<S extends boolean | null | undefined | AccessCodeDefaultArgs> = $Result.GetResult<Prisma.$AccessCodePayload, S>

  type AccessCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessCodeCountAggregateInputType | true
    }

  export interface AccessCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessCode'], meta: { name: 'AccessCode' } }
    /**
     * Find zero or one AccessCode that matches the filter.
     * @param {AccessCodeFindUniqueArgs} args - Arguments to find a AccessCode
     * @example
     * // Get one AccessCode
     * const accessCode = await prisma.accessCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessCodeFindUniqueArgs>(args: SelectSubset<T, AccessCodeFindUniqueArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessCodeFindUniqueOrThrowArgs} args - Arguments to find a AccessCode
     * @example
     * // Get one AccessCode
     * const accessCode = await prisma.accessCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeFindFirstArgs} args - Arguments to find a AccessCode
     * @example
     * // Get one AccessCode
     * const accessCode = await prisma.accessCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessCodeFindFirstArgs>(args?: SelectSubset<T, AccessCodeFindFirstArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeFindFirstOrThrowArgs} args - Arguments to find a AccessCode
     * @example
     * // Get one AccessCode
     * const accessCode = await prisma.accessCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessCodes
     * const accessCodes = await prisma.accessCode.findMany()
     * 
     * // Get first 10 AccessCodes
     * const accessCodes = await prisma.accessCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessCodeWithIdOnly = await prisma.accessCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessCodeFindManyArgs>(args?: SelectSubset<T, AccessCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessCode.
     * @param {AccessCodeCreateArgs} args - Arguments to create a AccessCode.
     * @example
     * // Create one AccessCode
     * const AccessCode = await prisma.accessCode.create({
     *   data: {
     *     // ... data to create a AccessCode
     *   }
     * })
     * 
     */
    create<T extends AccessCodeCreateArgs>(args: SelectSubset<T, AccessCodeCreateArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessCodes.
     * @param {AccessCodeCreateManyArgs} args - Arguments to create many AccessCodes.
     * @example
     * // Create many AccessCodes
     * const accessCode = await prisma.accessCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessCodeCreateManyArgs>(args?: SelectSubset<T, AccessCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessCodes and returns the data saved in the database.
     * @param {AccessCodeCreateManyAndReturnArgs} args - Arguments to create many AccessCodes.
     * @example
     * // Create many AccessCodes
     * const accessCode = await prisma.accessCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessCodes and only return the `id`
     * const accessCodeWithIdOnly = await prisma.accessCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessCode.
     * @param {AccessCodeDeleteArgs} args - Arguments to delete one AccessCode.
     * @example
     * // Delete one AccessCode
     * const AccessCode = await prisma.accessCode.delete({
     *   where: {
     *     // ... filter to delete one AccessCode
     *   }
     * })
     * 
     */
    delete<T extends AccessCodeDeleteArgs>(args: SelectSubset<T, AccessCodeDeleteArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessCode.
     * @param {AccessCodeUpdateArgs} args - Arguments to update one AccessCode.
     * @example
     * // Update one AccessCode
     * const accessCode = await prisma.accessCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessCodeUpdateArgs>(args: SelectSubset<T, AccessCodeUpdateArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessCodes.
     * @param {AccessCodeDeleteManyArgs} args - Arguments to filter AccessCodes to delete.
     * @example
     * // Delete a few AccessCodes
     * const { count } = await prisma.accessCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessCodeDeleteManyArgs>(args?: SelectSubset<T, AccessCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessCodes
     * const accessCode = await prisma.accessCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessCodeUpdateManyArgs>(args: SelectSubset<T, AccessCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessCodes and returns the data updated in the database.
     * @param {AccessCodeUpdateManyAndReturnArgs} args - Arguments to update many AccessCodes.
     * @example
     * // Update many AccessCodes
     * const accessCode = await prisma.accessCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessCodes and only return the `id`
     * const accessCodeWithIdOnly = await prisma.accessCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessCode.
     * @param {AccessCodeUpsertArgs} args - Arguments to update or create a AccessCode.
     * @example
     * // Update or create a AccessCode
     * const accessCode = await prisma.accessCode.upsert({
     *   create: {
     *     // ... data to create a AccessCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessCode we want to update
     *   }
     * })
     */
    upsert<T extends AccessCodeUpsertArgs>(args: SelectSubset<T, AccessCodeUpsertArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeCountArgs} args - Arguments to filter AccessCodes to count.
     * @example
     * // Count the number of AccessCodes
     * const count = await prisma.accessCode.count({
     *   where: {
     *     // ... the filter for the AccessCodes we want to count
     *   }
     * })
    **/
    count<T extends AccessCodeCountArgs>(
      args?: Subset<T, AccessCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessCodeAggregateArgs>(args: Subset<T, AccessCodeAggregateArgs>): Prisma.PrismaPromise<GetAccessCodeAggregateType<T>>

    /**
     * Group by AccessCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessCodeGroupByArgs['orderBy'] }
        : { orderBy?: AccessCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessCode model
   */
  readonly fields: AccessCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cause<T extends AccessCode$causeArgs<ExtArgs> = {}>(args?: Subset<T, AccessCode$causeArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessCode model
   */
  interface AccessCodeFieldRefs {
    readonly id: FieldRef<"AccessCode", 'String'>
    readonly code: FieldRef<"AccessCode", 'String'>
    readonly type: FieldRef<"AccessCode", 'String'>
    readonly issuedBy: FieldRef<"AccessCode", 'String'>
    readonly usedBy: FieldRef<"AccessCode", 'String'>
    readonly usedAt: FieldRef<"AccessCode", 'DateTime'>
    readonly status: FieldRef<"AccessCode", 'String'>
    readonly createdAt: FieldRef<"AccessCode", 'DateTime'>
    readonly updatedAt: FieldRef<"AccessCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessCode findUnique
   */
  export type AccessCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * Filter, which AccessCode to fetch.
     */
    where: AccessCodeWhereUniqueInput
  }

  /**
   * AccessCode findUniqueOrThrow
   */
  export type AccessCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * Filter, which AccessCode to fetch.
     */
    where: AccessCodeWhereUniqueInput
  }

  /**
   * AccessCode findFirst
   */
  export type AccessCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * Filter, which AccessCode to fetch.
     */
    where?: AccessCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessCodes to fetch.
     */
    orderBy?: AccessCodeOrderByWithRelationInput | AccessCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessCodes.
     */
    cursor?: AccessCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessCodes.
     */
    distinct?: AccessCodeScalarFieldEnum | AccessCodeScalarFieldEnum[]
  }

  /**
   * AccessCode findFirstOrThrow
   */
  export type AccessCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * Filter, which AccessCode to fetch.
     */
    where?: AccessCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessCodes to fetch.
     */
    orderBy?: AccessCodeOrderByWithRelationInput | AccessCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessCodes.
     */
    cursor?: AccessCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessCodes.
     */
    distinct?: AccessCodeScalarFieldEnum | AccessCodeScalarFieldEnum[]
  }

  /**
   * AccessCode findMany
   */
  export type AccessCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * Filter, which AccessCodes to fetch.
     */
    where?: AccessCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessCodes to fetch.
     */
    orderBy?: AccessCodeOrderByWithRelationInput | AccessCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessCodes.
     */
    cursor?: AccessCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessCodes.
     */
    skip?: number
    distinct?: AccessCodeScalarFieldEnum | AccessCodeScalarFieldEnum[]
  }

  /**
   * AccessCode create
   */
  export type AccessCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessCode.
     */
    data: XOR<AccessCodeCreateInput, AccessCodeUncheckedCreateInput>
  }

  /**
   * AccessCode createMany
   */
  export type AccessCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessCodes.
     */
    data: AccessCodeCreateManyInput | AccessCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessCode createManyAndReturn
   */
  export type AccessCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * The data used to create many AccessCodes.
     */
    data: AccessCodeCreateManyInput | AccessCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessCode update
   */
  export type AccessCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessCode.
     */
    data: XOR<AccessCodeUpdateInput, AccessCodeUncheckedUpdateInput>
    /**
     * Choose, which AccessCode to update.
     */
    where: AccessCodeWhereUniqueInput
  }

  /**
   * AccessCode updateMany
   */
  export type AccessCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessCodes.
     */
    data: XOR<AccessCodeUpdateManyMutationInput, AccessCodeUncheckedUpdateManyInput>
    /**
     * Filter which AccessCodes to update
     */
    where?: AccessCodeWhereInput
    /**
     * Limit how many AccessCodes to update.
     */
    limit?: number
  }

  /**
   * AccessCode updateManyAndReturn
   */
  export type AccessCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * The data used to update AccessCodes.
     */
    data: XOR<AccessCodeUpdateManyMutationInput, AccessCodeUncheckedUpdateManyInput>
    /**
     * Filter which AccessCodes to update
     */
    where?: AccessCodeWhereInput
    /**
     * Limit how many AccessCodes to update.
     */
    limit?: number
  }

  /**
   * AccessCode upsert
   */
  export type AccessCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessCode to update in case it exists.
     */
    where: AccessCodeWhereUniqueInput
    /**
     * In case the AccessCode found by the `where` argument doesn't exist, create a new AccessCode with this data.
     */
    create: XOR<AccessCodeCreateInput, AccessCodeUncheckedCreateInput>
    /**
     * In case the AccessCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessCodeUpdateInput, AccessCodeUncheckedUpdateInput>
  }

  /**
   * AccessCode delete
   */
  export type AccessCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    /**
     * Filter which AccessCode to delete.
     */
    where: AccessCodeWhereUniqueInput
  }

  /**
   * AccessCode deleteMany
   */
  export type AccessCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessCodes to delete
     */
    where?: AccessCodeWhereInput
    /**
     * Limit how many AccessCodes to delete.
     */
    limit?: number
  }

  /**
   * AccessCode.cause
   */
  export type AccessCode$causeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    where?: CauseWhereInput
  }

  /**
   * AccessCode without action
   */
  export type AccessCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
  }


  /**
   * Model Cause
   */

  export type AggregateCause = {
    _count: CauseCountAggregateOutputType | null
    _avg: CauseAvgAggregateOutputType | null
    _sum: CauseSumAggregateOutputType | null
    _min: CauseMinAggregateOutputType | null
    _max: CauseMaxAggregateOutputType | null
  }

  export type CauseAvgAggregateOutputType = {
    goalAmount: number | null
    approvalThreshold: number | null
  }

  export type CauseSumAggregateOutputType = {
    goalAmount: number | null
    approvalThreshold: number | null
  }

  export type CauseMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    summary: string | null
    description: string | null
    type: string | null
    city: string | null
    country: string | null
    reference: string | null
    goalAmount: number | null
    currency: string | null
    status: string | null
    payoutModel: string | null
    approvalThreshold: number | null
    fundManagerRef: string | null
    porteurId: string | null
    accessCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CauseMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    summary: string | null
    description: string | null
    type: string | null
    city: string | null
    country: string | null
    reference: string | null
    goalAmount: number | null
    currency: string | null
    status: string | null
    payoutModel: string | null
    approvalThreshold: number | null
    fundManagerRef: string | null
    porteurId: string | null
    accessCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CauseCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    summary: number
    description: number
    type: number
    city: number
    country: number
    reference: number
    goalAmount: number
    currency: number
    status: number
    payoutModel: number
    approvalThreshold: number
    fundManagerRef: number
    porteurId: number
    accessCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CauseAvgAggregateInputType = {
    goalAmount?: true
    approvalThreshold?: true
  }

  export type CauseSumAggregateInputType = {
    goalAmount?: true
    approvalThreshold?: true
  }

  export type CauseMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    summary?: true
    description?: true
    type?: true
    city?: true
    country?: true
    reference?: true
    goalAmount?: true
    currency?: true
    status?: true
    payoutModel?: true
    approvalThreshold?: true
    fundManagerRef?: true
    porteurId?: true
    accessCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CauseMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    summary?: true
    description?: true
    type?: true
    city?: true
    country?: true
    reference?: true
    goalAmount?: true
    currency?: true
    status?: true
    payoutModel?: true
    approvalThreshold?: true
    fundManagerRef?: true
    porteurId?: true
    accessCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CauseCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    summary?: true
    description?: true
    type?: true
    city?: true
    country?: true
    reference?: true
    goalAmount?: true
    currency?: true
    status?: true
    payoutModel?: true
    approvalThreshold?: true
    fundManagerRef?: true
    porteurId?: true
    accessCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CauseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cause to aggregate.
     */
    where?: CauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Causes to fetch.
     */
    orderBy?: CauseOrderByWithRelationInput | CauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Causes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Causes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Causes
    **/
    _count?: true | CauseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CauseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CauseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CauseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CauseMaxAggregateInputType
  }

  export type GetCauseAggregateType<T extends CauseAggregateArgs> = {
        [P in keyof T & keyof AggregateCause]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCause[P]>
      : GetScalarType<T[P], AggregateCause[P]>
  }




  export type CauseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CauseWhereInput
    orderBy?: CauseOrderByWithAggregationInput | CauseOrderByWithAggregationInput[]
    by: CauseScalarFieldEnum[] | CauseScalarFieldEnum
    having?: CauseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CauseCountAggregateInputType | true
    _avg?: CauseAvgAggregateInputType
    _sum?: CauseSumAggregateInputType
    _min?: CauseMinAggregateInputType
    _max?: CauseMaxAggregateInputType
  }

  export type CauseGroupByOutputType = {
    id: string
    slug: string
    title: string
    summary: string | null
    description: string
    type: string | null
    city: string | null
    country: string | null
    reference: string | null
    goalAmount: number | null
    currency: string
    status: string
    payoutModel: string
    approvalThreshold: number
    fundManagerRef: string | null
    porteurId: string
    accessCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: CauseCountAggregateOutputType | null
    _avg: CauseAvgAggregateOutputType | null
    _sum: CauseSumAggregateOutputType | null
    _min: CauseMinAggregateOutputType | null
    _max: CauseMaxAggregateOutputType | null
  }

  type GetCauseGroupByPayload<T extends CauseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CauseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CauseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CauseGroupByOutputType[P]>
            : GetScalarType<T[P], CauseGroupByOutputType[P]>
        }
      >
    >


  export type CauseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    type?: boolean
    city?: boolean
    country?: boolean
    reference?: boolean
    goalAmount?: boolean
    currency?: boolean
    status?: boolean
    payoutModel?: boolean
    approvalThreshold?: boolean
    fundManagerRef?: boolean
    porteurId?: boolean
    accessCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    porteur?: boolean | UserDefaultArgs<ExtArgs>
    accessCodeRel?: boolean | Cause$accessCodeRelArgs<ExtArgs>
    milestones?: boolean | Cause$milestonesArgs<ExtArgs>
    dons?: boolean | Cause$donsArgs<ExtArgs>
    signatories?: boolean | Cause$signatoriesArgs<ExtArgs>
    payoutRequests?: boolean | Cause$payoutRequestsArgs<ExtArgs>
    _count?: boolean | CauseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cause"]>

  export type CauseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    type?: boolean
    city?: boolean
    country?: boolean
    reference?: boolean
    goalAmount?: boolean
    currency?: boolean
    status?: boolean
    payoutModel?: boolean
    approvalThreshold?: boolean
    fundManagerRef?: boolean
    porteurId?: boolean
    accessCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    porteur?: boolean | UserDefaultArgs<ExtArgs>
    accessCodeRel?: boolean | Cause$accessCodeRelArgs<ExtArgs>
  }, ExtArgs["result"]["cause"]>

  export type CauseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    type?: boolean
    city?: boolean
    country?: boolean
    reference?: boolean
    goalAmount?: boolean
    currency?: boolean
    status?: boolean
    payoutModel?: boolean
    approvalThreshold?: boolean
    fundManagerRef?: boolean
    porteurId?: boolean
    accessCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    porteur?: boolean | UserDefaultArgs<ExtArgs>
    accessCodeRel?: boolean | Cause$accessCodeRelArgs<ExtArgs>
  }, ExtArgs["result"]["cause"]>

  export type CauseSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    type?: boolean
    city?: boolean
    country?: boolean
    reference?: boolean
    goalAmount?: boolean
    currency?: boolean
    status?: boolean
    payoutModel?: boolean
    approvalThreshold?: boolean
    fundManagerRef?: boolean
    porteurId?: boolean
    accessCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CauseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "summary" | "description" | "type" | "city" | "country" | "reference" | "goalAmount" | "currency" | "status" | "payoutModel" | "approvalThreshold" | "fundManagerRef" | "porteurId" | "accessCode" | "createdAt" | "updatedAt", ExtArgs["result"]["cause"]>
  export type CauseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    porteur?: boolean | UserDefaultArgs<ExtArgs>
    accessCodeRel?: boolean | Cause$accessCodeRelArgs<ExtArgs>
    milestones?: boolean | Cause$milestonesArgs<ExtArgs>
    dons?: boolean | Cause$donsArgs<ExtArgs>
    signatories?: boolean | Cause$signatoriesArgs<ExtArgs>
    payoutRequests?: boolean | Cause$payoutRequestsArgs<ExtArgs>
    _count?: boolean | CauseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CauseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    porteur?: boolean | UserDefaultArgs<ExtArgs>
    accessCodeRel?: boolean | Cause$accessCodeRelArgs<ExtArgs>
  }
  export type CauseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    porteur?: boolean | UserDefaultArgs<ExtArgs>
    accessCodeRel?: boolean | Cause$accessCodeRelArgs<ExtArgs>
  }

  export type $CausePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cause"
    objects: {
      porteur: Prisma.$UserPayload<ExtArgs>
      accessCodeRel: Prisma.$AccessCodePayload<ExtArgs> | null
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      dons: Prisma.$DonPayload<ExtArgs>[]
      signatories: Prisma.$SignatoryPayload<ExtArgs>[]
      payoutRequests: Prisma.$PayoutRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      summary: string | null
      description: string
      type: string | null
      city: string | null
      country: string | null
      reference: string | null
      goalAmount: number | null
      currency: string
      status: string
      payoutModel: string
      approvalThreshold: number
      fundManagerRef: string | null
      porteurId: string
      accessCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cause"]>
    composites: {}
  }

  type CauseGetPayload<S extends boolean | null | undefined | CauseDefaultArgs> = $Result.GetResult<Prisma.$CausePayload, S>

  type CauseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CauseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CauseCountAggregateInputType | true
    }

  export interface CauseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cause'], meta: { name: 'Cause' } }
    /**
     * Find zero or one Cause that matches the filter.
     * @param {CauseFindUniqueArgs} args - Arguments to find a Cause
     * @example
     * // Get one Cause
     * const cause = await prisma.cause.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CauseFindUniqueArgs>(args: SelectSubset<T, CauseFindUniqueArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cause that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CauseFindUniqueOrThrowArgs} args - Arguments to find a Cause
     * @example
     * // Get one Cause
     * const cause = await prisma.cause.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CauseFindUniqueOrThrowArgs>(args: SelectSubset<T, CauseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cause that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseFindFirstArgs} args - Arguments to find a Cause
     * @example
     * // Get one Cause
     * const cause = await prisma.cause.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CauseFindFirstArgs>(args?: SelectSubset<T, CauseFindFirstArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cause that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseFindFirstOrThrowArgs} args - Arguments to find a Cause
     * @example
     * // Get one Cause
     * const cause = await prisma.cause.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CauseFindFirstOrThrowArgs>(args?: SelectSubset<T, CauseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Causes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Causes
     * const causes = await prisma.cause.findMany()
     * 
     * // Get first 10 Causes
     * const causes = await prisma.cause.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const causeWithIdOnly = await prisma.cause.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CauseFindManyArgs>(args?: SelectSubset<T, CauseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cause.
     * @param {CauseCreateArgs} args - Arguments to create a Cause.
     * @example
     * // Create one Cause
     * const Cause = await prisma.cause.create({
     *   data: {
     *     // ... data to create a Cause
     *   }
     * })
     * 
     */
    create<T extends CauseCreateArgs>(args: SelectSubset<T, CauseCreateArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Causes.
     * @param {CauseCreateManyArgs} args - Arguments to create many Causes.
     * @example
     * // Create many Causes
     * const cause = await prisma.cause.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CauseCreateManyArgs>(args?: SelectSubset<T, CauseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Causes and returns the data saved in the database.
     * @param {CauseCreateManyAndReturnArgs} args - Arguments to create many Causes.
     * @example
     * // Create many Causes
     * const cause = await prisma.cause.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Causes and only return the `id`
     * const causeWithIdOnly = await prisma.cause.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CauseCreateManyAndReturnArgs>(args?: SelectSubset<T, CauseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cause.
     * @param {CauseDeleteArgs} args - Arguments to delete one Cause.
     * @example
     * // Delete one Cause
     * const Cause = await prisma.cause.delete({
     *   where: {
     *     // ... filter to delete one Cause
     *   }
     * })
     * 
     */
    delete<T extends CauseDeleteArgs>(args: SelectSubset<T, CauseDeleteArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cause.
     * @param {CauseUpdateArgs} args - Arguments to update one Cause.
     * @example
     * // Update one Cause
     * const cause = await prisma.cause.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CauseUpdateArgs>(args: SelectSubset<T, CauseUpdateArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Causes.
     * @param {CauseDeleteManyArgs} args - Arguments to filter Causes to delete.
     * @example
     * // Delete a few Causes
     * const { count } = await prisma.cause.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CauseDeleteManyArgs>(args?: SelectSubset<T, CauseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Causes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Causes
     * const cause = await prisma.cause.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CauseUpdateManyArgs>(args: SelectSubset<T, CauseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Causes and returns the data updated in the database.
     * @param {CauseUpdateManyAndReturnArgs} args - Arguments to update many Causes.
     * @example
     * // Update many Causes
     * const cause = await prisma.cause.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Causes and only return the `id`
     * const causeWithIdOnly = await prisma.cause.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CauseUpdateManyAndReturnArgs>(args: SelectSubset<T, CauseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cause.
     * @param {CauseUpsertArgs} args - Arguments to update or create a Cause.
     * @example
     * // Update or create a Cause
     * const cause = await prisma.cause.upsert({
     *   create: {
     *     // ... data to create a Cause
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cause we want to update
     *   }
     * })
     */
    upsert<T extends CauseUpsertArgs>(args: SelectSubset<T, CauseUpsertArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Causes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseCountArgs} args - Arguments to filter Causes to count.
     * @example
     * // Count the number of Causes
     * const count = await prisma.cause.count({
     *   where: {
     *     // ... the filter for the Causes we want to count
     *   }
     * })
    **/
    count<T extends CauseCountArgs>(
      args?: Subset<T, CauseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CauseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CauseAggregateArgs>(args: Subset<T, CauseAggregateArgs>): Prisma.PrismaPromise<GetCauseAggregateType<T>>

    /**
     * Group by Cause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CauseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CauseGroupByArgs['orderBy'] }
        : { orderBy?: CauseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CauseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCauseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cause model
   */
  readonly fields: CauseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cause.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CauseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    porteur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accessCodeRel<T extends Cause$accessCodeRelArgs<ExtArgs> = {}>(args?: Subset<T, Cause$accessCodeRelArgs<ExtArgs>>): Prisma__AccessCodeClient<$Result.GetResult<Prisma.$AccessCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestones<T extends Cause$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Cause$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dons<T extends Cause$donsArgs<ExtArgs> = {}>(args?: Subset<T, Cause$donsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signatories<T extends Cause$signatoriesArgs<ExtArgs> = {}>(args?: Subset<T, Cause$signatoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payoutRequests<T extends Cause$payoutRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Cause$payoutRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cause model
   */
  interface CauseFieldRefs {
    readonly id: FieldRef<"Cause", 'String'>
    readonly slug: FieldRef<"Cause", 'String'>
    readonly title: FieldRef<"Cause", 'String'>
    readonly summary: FieldRef<"Cause", 'String'>
    readonly description: FieldRef<"Cause", 'String'>
    readonly type: FieldRef<"Cause", 'String'>
    readonly city: FieldRef<"Cause", 'String'>
    readonly country: FieldRef<"Cause", 'String'>
    readonly reference: FieldRef<"Cause", 'String'>
    readonly goalAmount: FieldRef<"Cause", 'Float'>
    readonly currency: FieldRef<"Cause", 'String'>
    readonly status: FieldRef<"Cause", 'String'>
    readonly payoutModel: FieldRef<"Cause", 'String'>
    readonly approvalThreshold: FieldRef<"Cause", 'Int'>
    readonly fundManagerRef: FieldRef<"Cause", 'String'>
    readonly porteurId: FieldRef<"Cause", 'String'>
    readonly accessCode: FieldRef<"Cause", 'String'>
    readonly createdAt: FieldRef<"Cause", 'DateTime'>
    readonly updatedAt: FieldRef<"Cause", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cause findUnique
   */
  export type CauseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * Filter, which Cause to fetch.
     */
    where: CauseWhereUniqueInput
  }

  /**
   * Cause findUniqueOrThrow
   */
  export type CauseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * Filter, which Cause to fetch.
     */
    where: CauseWhereUniqueInput
  }

  /**
   * Cause findFirst
   */
  export type CauseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * Filter, which Cause to fetch.
     */
    where?: CauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Causes to fetch.
     */
    orderBy?: CauseOrderByWithRelationInput | CauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Causes.
     */
    cursor?: CauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Causes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Causes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Causes.
     */
    distinct?: CauseScalarFieldEnum | CauseScalarFieldEnum[]
  }

  /**
   * Cause findFirstOrThrow
   */
  export type CauseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * Filter, which Cause to fetch.
     */
    where?: CauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Causes to fetch.
     */
    orderBy?: CauseOrderByWithRelationInput | CauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Causes.
     */
    cursor?: CauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Causes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Causes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Causes.
     */
    distinct?: CauseScalarFieldEnum | CauseScalarFieldEnum[]
  }

  /**
   * Cause findMany
   */
  export type CauseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * Filter, which Causes to fetch.
     */
    where?: CauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Causes to fetch.
     */
    orderBy?: CauseOrderByWithRelationInput | CauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Causes.
     */
    cursor?: CauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Causes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Causes.
     */
    skip?: number
    distinct?: CauseScalarFieldEnum | CauseScalarFieldEnum[]
  }

  /**
   * Cause create
   */
  export type CauseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * The data needed to create a Cause.
     */
    data: XOR<CauseCreateInput, CauseUncheckedCreateInput>
  }

  /**
   * Cause createMany
   */
  export type CauseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Causes.
     */
    data: CauseCreateManyInput | CauseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cause createManyAndReturn
   */
  export type CauseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * The data used to create many Causes.
     */
    data: CauseCreateManyInput | CauseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cause update
   */
  export type CauseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * The data needed to update a Cause.
     */
    data: XOR<CauseUpdateInput, CauseUncheckedUpdateInput>
    /**
     * Choose, which Cause to update.
     */
    where: CauseWhereUniqueInput
  }

  /**
   * Cause updateMany
   */
  export type CauseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Causes.
     */
    data: XOR<CauseUpdateManyMutationInput, CauseUncheckedUpdateManyInput>
    /**
     * Filter which Causes to update
     */
    where?: CauseWhereInput
    /**
     * Limit how many Causes to update.
     */
    limit?: number
  }

  /**
   * Cause updateManyAndReturn
   */
  export type CauseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * The data used to update Causes.
     */
    data: XOR<CauseUpdateManyMutationInput, CauseUncheckedUpdateManyInput>
    /**
     * Filter which Causes to update
     */
    where?: CauseWhereInput
    /**
     * Limit how many Causes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cause upsert
   */
  export type CauseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * The filter to search for the Cause to update in case it exists.
     */
    where: CauseWhereUniqueInput
    /**
     * In case the Cause found by the `where` argument doesn't exist, create a new Cause with this data.
     */
    create: XOR<CauseCreateInput, CauseUncheckedCreateInput>
    /**
     * In case the Cause was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CauseUpdateInput, CauseUncheckedUpdateInput>
  }

  /**
   * Cause delete
   */
  export type CauseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
    /**
     * Filter which Cause to delete.
     */
    where: CauseWhereUniqueInput
  }

  /**
   * Cause deleteMany
   */
  export type CauseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Causes to delete
     */
    where?: CauseWhereInput
    /**
     * Limit how many Causes to delete.
     */
    limit?: number
  }

  /**
   * Cause.accessCodeRel
   */
  export type Cause$accessCodeRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCode
     */
    select?: AccessCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessCode
     */
    omit?: AccessCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessCodeInclude<ExtArgs> | null
    where?: AccessCodeWhereInput
  }

  /**
   * Cause.milestones
   */
  export type Cause$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Cause.dons
   */
  export type Cause$donsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    where?: DonWhereInput
    orderBy?: DonOrderByWithRelationInput | DonOrderByWithRelationInput[]
    cursor?: DonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonScalarFieldEnum | DonScalarFieldEnum[]
  }

  /**
   * Cause.signatories
   */
  export type Cause$signatoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    where?: SignatoryWhereInput
    orderBy?: SignatoryOrderByWithRelationInput | SignatoryOrderByWithRelationInput[]
    cursor?: SignatoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignatoryScalarFieldEnum | SignatoryScalarFieldEnum[]
  }

  /**
   * Cause.payoutRequests
   */
  export type Cause$payoutRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    where?: PayoutRequestWhereInput
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    cursor?: PayoutRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * Cause without action
   */
  export type CauseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cause
     */
    select?: CauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cause
     */
    omit?: CauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    target: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    target: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    causeId: string | null
    label: string | null
    target: number | null
    reached: boolean | null
    reachedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    causeId: string | null
    label: string | null
    target: number | null
    reached: boolean | null
    reachedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    causeId: number
    label: number
    target: number
    reached: number
    reachedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    target?: true
  }

  export type MilestoneSumAggregateInputType = {
    target?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    causeId?: true
    label?: true
    target?: true
    reached?: true
    reachedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    causeId?: true
    label?: true
    target?: true
    reached?: true
    reachedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    causeId?: true
    label?: true
    target?: true
    reached?: true
    reachedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    causeId: string
    label: string
    target: number
    reached: boolean
    reachedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    label?: boolean
    target?: boolean
    reached?: boolean
    reachedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    label?: boolean
    target?: boolean
    reached?: boolean
    reachedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    label?: boolean
    target?: boolean
    reached?: boolean
    reachedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    causeId?: boolean
    label?: boolean
    target?: boolean
    reached?: boolean
    reachedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "causeId" | "label" | "target" | "reached" | "reachedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      cause: Prisma.$CausePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      causeId: string
      label: string
      target: number
      reached: boolean
      reachedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cause<T extends CauseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CauseDefaultArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly causeId: FieldRef<"Milestone", 'String'>
    readonly label: FieldRef<"Milestone", 'String'>
    readonly target: FieldRef<"Milestone", 'Float'>
    readonly reached: FieldRef<"Milestone", 'Boolean'>
    readonly reachedAt: FieldRef<"Milestone", 'DateTime'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model Don
   */

  export type AggregateDon = {
    _count: DonCountAggregateOutputType | null
    _avg: DonAvgAggregateOutputType | null
    _sum: DonSumAggregateOutputType | null
    _min: DonMinAggregateOutputType | null
    _max: DonMaxAggregateOutputType | null
  }

  export type DonAvgAggregateOutputType = {
    amount: number | null
    commission: number | null
    netPorteur: number | null
  }

  export type DonSumAggregateOutputType = {
    amount: number | null
    commission: number | null
    netPorteur: number | null
  }

  export type DonMinAggregateOutputType = {
    id: string | null
    causeId: string | null
    meceneId: string | null
    amount: number | null
    currency: string | null
    commission: number | null
    netPorteur: number | null
    method: string | null
    status: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonMaxAggregateOutputType = {
    id: string | null
    causeId: string | null
    meceneId: string | null
    amount: number | null
    currency: string | null
    commission: number | null
    netPorteur: number | null
    method: string | null
    status: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonCountAggregateOutputType = {
    id: number
    causeId: number
    meceneId: number
    amount: number
    currency: number
    commission: number
    netPorteur: number
    method: number
    status: number
    displayName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonAvgAggregateInputType = {
    amount?: true
    commission?: true
    netPorteur?: true
  }

  export type DonSumAggregateInputType = {
    amount?: true
    commission?: true
    netPorteur?: true
  }

  export type DonMinAggregateInputType = {
    id?: true
    causeId?: true
    meceneId?: true
    amount?: true
    currency?: true
    commission?: true
    netPorteur?: true
    method?: true
    status?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonMaxAggregateInputType = {
    id?: true
    causeId?: true
    meceneId?: true
    amount?: true
    currency?: true
    commission?: true
    netPorteur?: true
    method?: true
    status?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonCountAggregateInputType = {
    id?: true
    causeId?: true
    meceneId?: true
    amount?: true
    currency?: true
    commission?: true
    netPorteur?: true
    method?: true
    status?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Don to aggregate.
     */
    where?: DonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dons to fetch.
     */
    orderBy?: DonOrderByWithRelationInput | DonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dons
    **/
    _count?: true | DonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonMaxAggregateInputType
  }

  export type GetDonAggregateType<T extends DonAggregateArgs> = {
        [P in keyof T & keyof AggregateDon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDon[P]>
      : GetScalarType<T[P], AggregateDon[P]>
  }




  export type DonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonWhereInput
    orderBy?: DonOrderByWithAggregationInput | DonOrderByWithAggregationInput[]
    by: DonScalarFieldEnum[] | DonScalarFieldEnum
    having?: DonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonCountAggregateInputType | true
    _avg?: DonAvgAggregateInputType
    _sum?: DonSumAggregateInputType
    _min?: DonMinAggregateInputType
    _max?: DonMaxAggregateInputType
  }

  export type DonGroupByOutputType = {
    id: string
    causeId: string
    meceneId: string | null
    amount: number
    currency: string
    commission: number
    netPorteur: number
    method: string
    status: string
    displayName: string | null
    createdAt: Date
    updatedAt: Date
    _count: DonCountAggregateOutputType | null
    _avg: DonAvgAggregateOutputType | null
    _sum: DonSumAggregateOutputType | null
    _min: DonMinAggregateOutputType | null
    _max: DonMaxAggregateOutputType | null
  }

  type GetDonGroupByPayload<T extends DonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonGroupByOutputType[P]>
            : GetScalarType<T[P], DonGroupByOutputType[P]>
        }
      >
    >


  export type DonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    meceneId?: boolean
    amount?: boolean
    currency?: boolean
    commission?: boolean
    netPorteur?: boolean
    method?: boolean
    status?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    mecene?: boolean | Don$meceneArgs<ExtArgs>
    poem?: boolean | Don$poemArgs<ExtArgs>
    payment?: boolean | Don$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["don"]>

  export type DonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    meceneId?: boolean
    amount?: boolean
    currency?: boolean
    commission?: boolean
    netPorteur?: boolean
    method?: boolean
    status?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    mecene?: boolean | Don$meceneArgs<ExtArgs>
  }, ExtArgs["result"]["don"]>

  export type DonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    meceneId?: boolean
    amount?: boolean
    currency?: boolean
    commission?: boolean
    netPorteur?: boolean
    method?: boolean
    status?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    mecene?: boolean | Don$meceneArgs<ExtArgs>
  }, ExtArgs["result"]["don"]>

  export type DonSelectScalar = {
    id?: boolean
    causeId?: boolean
    meceneId?: boolean
    amount?: boolean
    currency?: boolean
    commission?: boolean
    netPorteur?: boolean
    method?: boolean
    status?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "causeId" | "meceneId" | "amount" | "currency" | "commission" | "netPorteur" | "method" | "status" | "displayName" | "createdAt" | "updatedAt", ExtArgs["result"]["don"]>
  export type DonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    mecene?: boolean | Don$meceneArgs<ExtArgs>
    poem?: boolean | Don$poemArgs<ExtArgs>
    payment?: boolean | Don$paymentArgs<ExtArgs>
  }
  export type DonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    mecene?: boolean | Don$meceneArgs<ExtArgs>
  }
  export type DonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    mecene?: boolean | Don$meceneArgs<ExtArgs>
  }

  export type $DonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Don"
    objects: {
      cause: Prisma.$CausePayload<ExtArgs>
      mecene: Prisma.$UserPayload<ExtArgs> | null
      poem: Prisma.$PoemPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      causeId: string
      meceneId: string | null
      amount: number
      currency: string
      commission: number
      netPorteur: number
      method: string
      status: string
      displayName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["don"]>
    composites: {}
  }

  type DonGetPayload<S extends boolean | null | undefined | DonDefaultArgs> = $Result.GetResult<Prisma.$DonPayload, S>

  type DonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonCountAggregateInputType | true
    }

  export interface DonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Don'], meta: { name: 'Don' } }
    /**
     * Find zero or one Don that matches the filter.
     * @param {DonFindUniqueArgs} args - Arguments to find a Don
     * @example
     * // Get one Don
     * const don = await prisma.don.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonFindUniqueArgs>(args: SelectSubset<T, DonFindUniqueArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Don that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonFindUniqueOrThrowArgs} args - Arguments to find a Don
     * @example
     * // Get one Don
     * const don = await prisma.don.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonFindUniqueOrThrowArgs>(args: SelectSubset<T, DonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Don that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonFindFirstArgs} args - Arguments to find a Don
     * @example
     * // Get one Don
     * const don = await prisma.don.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonFindFirstArgs>(args?: SelectSubset<T, DonFindFirstArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Don that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonFindFirstOrThrowArgs} args - Arguments to find a Don
     * @example
     * // Get one Don
     * const don = await prisma.don.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonFindFirstOrThrowArgs>(args?: SelectSubset<T, DonFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dons
     * const dons = await prisma.don.findMany()
     * 
     * // Get first 10 Dons
     * const dons = await prisma.don.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donWithIdOnly = await prisma.don.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonFindManyArgs>(args?: SelectSubset<T, DonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Don.
     * @param {DonCreateArgs} args - Arguments to create a Don.
     * @example
     * // Create one Don
     * const Don = await prisma.don.create({
     *   data: {
     *     // ... data to create a Don
     *   }
     * })
     * 
     */
    create<T extends DonCreateArgs>(args: SelectSubset<T, DonCreateArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dons.
     * @param {DonCreateManyArgs} args - Arguments to create many Dons.
     * @example
     * // Create many Dons
     * const don = await prisma.don.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonCreateManyArgs>(args?: SelectSubset<T, DonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dons and returns the data saved in the database.
     * @param {DonCreateManyAndReturnArgs} args - Arguments to create many Dons.
     * @example
     * // Create many Dons
     * const don = await prisma.don.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dons and only return the `id`
     * const donWithIdOnly = await prisma.don.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonCreateManyAndReturnArgs>(args?: SelectSubset<T, DonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Don.
     * @param {DonDeleteArgs} args - Arguments to delete one Don.
     * @example
     * // Delete one Don
     * const Don = await prisma.don.delete({
     *   where: {
     *     // ... filter to delete one Don
     *   }
     * })
     * 
     */
    delete<T extends DonDeleteArgs>(args: SelectSubset<T, DonDeleteArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Don.
     * @param {DonUpdateArgs} args - Arguments to update one Don.
     * @example
     * // Update one Don
     * const don = await prisma.don.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonUpdateArgs>(args: SelectSubset<T, DonUpdateArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dons.
     * @param {DonDeleteManyArgs} args - Arguments to filter Dons to delete.
     * @example
     * // Delete a few Dons
     * const { count } = await prisma.don.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonDeleteManyArgs>(args?: SelectSubset<T, DonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dons
     * const don = await prisma.don.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonUpdateManyArgs>(args: SelectSubset<T, DonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dons and returns the data updated in the database.
     * @param {DonUpdateManyAndReturnArgs} args - Arguments to update many Dons.
     * @example
     * // Update many Dons
     * const don = await prisma.don.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dons and only return the `id`
     * const donWithIdOnly = await prisma.don.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonUpdateManyAndReturnArgs>(args: SelectSubset<T, DonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Don.
     * @param {DonUpsertArgs} args - Arguments to update or create a Don.
     * @example
     * // Update or create a Don
     * const don = await prisma.don.upsert({
     *   create: {
     *     // ... data to create a Don
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Don we want to update
     *   }
     * })
     */
    upsert<T extends DonUpsertArgs>(args: SelectSubset<T, DonUpsertArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonCountArgs} args - Arguments to filter Dons to count.
     * @example
     * // Count the number of Dons
     * const count = await prisma.don.count({
     *   where: {
     *     // ... the filter for the Dons we want to count
     *   }
     * })
    **/
    count<T extends DonCountArgs>(
      args?: Subset<T, DonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Don.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonAggregateArgs>(args: Subset<T, DonAggregateArgs>): Prisma.PrismaPromise<GetDonAggregateType<T>>

    /**
     * Group by Don.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonGroupByArgs['orderBy'] }
        : { orderBy?: DonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Don model
   */
  readonly fields: DonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Don.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cause<T extends CauseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CauseDefaultArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mecene<T extends Don$meceneArgs<ExtArgs> = {}>(args?: Subset<T, Don$meceneArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    poem<T extends Don$poemArgs<ExtArgs> = {}>(args?: Subset<T, Don$poemArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Don$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Don$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Don model
   */
  interface DonFieldRefs {
    readonly id: FieldRef<"Don", 'String'>
    readonly causeId: FieldRef<"Don", 'String'>
    readonly meceneId: FieldRef<"Don", 'String'>
    readonly amount: FieldRef<"Don", 'Float'>
    readonly currency: FieldRef<"Don", 'String'>
    readonly commission: FieldRef<"Don", 'Float'>
    readonly netPorteur: FieldRef<"Don", 'Float'>
    readonly method: FieldRef<"Don", 'String'>
    readonly status: FieldRef<"Don", 'String'>
    readonly displayName: FieldRef<"Don", 'String'>
    readonly createdAt: FieldRef<"Don", 'DateTime'>
    readonly updatedAt: FieldRef<"Don", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Don findUnique
   */
  export type DonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * Filter, which Don to fetch.
     */
    where: DonWhereUniqueInput
  }

  /**
   * Don findUniqueOrThrow
   */
  export type DonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * Filter, which Don to fetch.
     */
    where: DonWhereUniqueInput
  }

  /**
   * Don findFirst
   */
  export type DonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * Filter, which Don to fetch.
     */
    where?: DonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dons to fetch.
     */
    orderBy?: DonOrderByWithRelationInput | DonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dons.
     */
    cursor?: DonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dons.
     */
    distinct?: DonScalarFieldEnum | DonScalarFieldEnum[]
  }

  /**
   * Don findFirstOrThrow
   */
  export type DonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * Filter, which Don to fetch.
     */
    where?: DonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dons to fetch.
     */
    orderBy?: DonOrderByWithRelationInput | DonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dons.
     */
    cursor?: DonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dons.
     */
    distinct?: DonScalarFieldEnum | DonScalarFieldEnum[]
  }

  /**
   * Don findMany
   */
  export type DonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * Filter, which Dons to fetch.
     */
    where?: DonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dons to fetch.
     */
    orderBy?: DonOrderByWithRelationInput | DonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dons.
     */
    cursor?: DonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dons.
     */
    skip?: number
    distinct?: DonScalarFieldEnum | DonScalarFieldEnum[]
  }

  /**
   * Don create
   */
  export type DonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * The data needed to create a Don.
     */
    data: XOR<DonCreateInput, DonUncheckedCreateInput>
  }

  /**
   * Don createMany
   */
  export type DonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dons.
     */
    data: DonCreateManyInput | DonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Don createManyAndReturn
   */
  export type DonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * The data used to create many Dons.
     */
    data: DonCreateManyInput | DonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Don update
   */
  export type DonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * The data needed to update a Don.
     */
    data: XOR<DonUpdateInput, DonUncheckedUpdateInput>
    /**
     * Choose, which Don to update.
     */
    where: DonWhereUniqueInput
  }

  /**
   * Don updateMany
   */
  export type DonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dons.
     */
    data: XOR<DonUpdateManyMutationInput, DonUncheckedUpdateManyInput>
    /**
     * Filter which Dons to update
     */
    where?: DonWhereInput
    /**
     * Limit how many Dons to update.
     */
    limit?: number
  }

  /**
   * Don updateManyAndReturn
   */
  export type DonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * The data used to update Dons.
     */
    data: XOR<DonUpdateManyMutationInput, DonUncheckedUpdateManyInput>
    /**
     * Filter which Dons to update
     */
    where?: DonWhereInput
    /**
     * Limit how many Dons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Don upsert
   */
  export type DonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * The filter to search for the Don to update in case it exists.
     */
    where: DonWhereUniqueInput
    /**
     * In case the Don found by the `where` argument doesn't exist, create a new Don with this data.
     */
    create: XOR<DonCreateInput, DonUncheckedCreateInput>
    /**
     * In case the Don was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonUpdateInput, DonUncheckedUpdateInput>
  }

  /**
   * Don delete
   */
  export type DonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
    /**
     * Filter which Don to delete.
     */
    where: DonWhereUniqueInput
  }

  /**
   * Don deleteMany
   */
  export type DonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dons to delete
     */
    where?: DonWhereInput
    /**
     * Limit how many Dons to delete.
     */
    limit?: number
  }

  /**
   * Don.mecene
   */
  export type Don$meceneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Don.poem
   */
  export type Don$poemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    where?: PoemWhereInput
  }

  /**
   * Don.payment
   */
  export type Don$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Don without action
   */
  export type DonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Don
     */
    select?: DonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Don
     */
    omit?: DonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    donId: string | null
    provider: string | null
    providerRef: string | null
    status: string | null
    checkoutUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    donId: string | null
    provider: string | null
    providerRef: string | null
    status: string | null
    checkoutUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    donId: number
    provider: number
    providerRef: number
    status: number
    checkoutUrl: number
    providerPayload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    donId?: true
    provider?: true
    providerRef?: true
    status?: true
    checkoutUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    donId?: true
    provider?: true
    providerRef?: true
    status?: true
    checkoutUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    donId?: true
    provider?: true
    providerRef?: true
    status?: true
    checkoutUrl?: true
    providerPayload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    donId: string
    provider: string
    providerRef: string | null
    status: string
    checkoutUrl: string | null
    providerPayload: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donId?: boolean
    provider?: boolean
    providerRef?: boolean
    status?: boolean
    checkoutUrl?: boolean
    providerPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    don?: boolean | DonDefaultArgs<ExtArgs>
    webhookEvents?: boolean | Payment$webhookEventsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donId?: boolean
    provider?: boolean
    providerRef?: boolean
    status?: boolean
    checkoutUrl?: boolean
    providerPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    don?: boolean | DonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donId?: boolean
    provider?: boolean
    providerRef?: boolean
    status?: boolean
    checkoutUrl?: boolean
    providerPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    don?: boolean | DonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    donId?: boolean
    provider?: boolean
    providerRef?: boolean
    status?: boolean
    checkoutUrl?: boolean
    providerPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donId" | "provider" | "providerRef" | "status" | "checkoutUrl" | "providerPayload" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    don?: boolean | DonDefaultArgs<ExtArgs>
    webhookEvents?: boolean | Payment$webhookEventsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    don?: boolean | DonDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    don?: boolean | DonDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      don: Prisma.$DonPayload<ExtArgs>
      webhookEvents: Prisma.$WebhookEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donId: string
      provider: string
      providerRef: string | null
      status: string
      checkoutUrl: string | null
      providerPayload: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    don<T extends DonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonDefaultArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    webhookEvents<T extends Payment$webhookEventsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$webhookEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly donId: FieldRef<"Payment", 'String'>
    readonly provider: FieldRef<"Payment", 'String'>
    readonly providerRef: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly checkoutUrl: FieldRef<"Payment", 'String'>
    readonly providerPayload: FieldRef<"Payment", 'Json'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.webhookEvents
   */
  export type Payment$webhookEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    cursor?: WebhookEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvent
   */

  export type AggregateWebhookEvent = {
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  export type WebhookEventMinAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    eventType: string | null
    paymentId: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookEventMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    eventType: string | null
    paymentId: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookEventCountAggregateOutputType = {
    id: number
    provider: number
    eventId: number
    eventType: number
    paymentId: number
    payload: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type WebhookEventMinAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    paymentId?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookEventMaxAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    paymentId?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookEventCountAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    paymentId?: true
    payload?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvent to aggregate.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventMaxAggregateInputType
  }

  export type GetWebhookEventAggregateType<T extends WebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvent[P]>
      : GetScalarType<T[P], AggregateWebhookEvent[P]>
  }




  export type WebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithAggregationInput | WebhookEventOrderByWithAggregationInput[]
    by: WebhookEventScalarFieldEnum[] | WebhookEventScalarFieldEnum
    having?: WebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventCountAggregateInputType | true
    _min?: WebhookEventMinAggregateInputType
    _max?: WebhookEventMaxAggregateInputType
  }

  export type WebhookEventGroupByOutputType = {
    id: string
    provider: string
    eventId: string
    eventType: string | null
    paymentId: string | null
    payload: JsonValue
    processedAt: Date | null
    createdAt: Date
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  type GetWebhookEventGroupByPayload<T extends WebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    paymentId?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
    payment?: boolean | WebhookEvent$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    paymentId?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
    payment?: boolean | WebhookEvent$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    paymentId?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
    payment?: boolean | WebhookEvent$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectScalar = {
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    paymentId?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }

  export type WebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "eventId" | "eventType" | "paymentId" | "payload" | "processedAt" | "createdAt", ExtArgs["result"]["webhookEvent"]>
  export type WebhookEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | WebhookEvent$paymentArgs<ExtArgs>
  }
  export type WebhookEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | WebhookEvent$paymentArgs<ExtArgs>
  }
  export type WebhookEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | WebhookEvent$paymentArgs<ExtArgs>
  }

  export type $WebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvent"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      eventId: string
      eventType: string | null
      paymentId: string | null
      payload: Prisma.JsonValue
      processedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["webhookEvent"]>
    composites: {}
  }

  type WebhookEventGetPayload<S extends boolean | null | undefined | WebhookEventDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventPayload, S>

  type WebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookEventCountAggregateInputType | true
    }

  export interface WebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvent'], meta: { name: 'WebhookEvent' } }
    /**
     * Find zero or one WebhookEvent that matches the filter.
     * @param {WebhookEventFindUniqueArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventFindUniqueArgs>(args: SelectSubset<T, WebhookEventFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookEventFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventFindFirstArgs>(args?: SelectSubset<T, WebhookEventFindFirstArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventFindManyArgs>(args?: SelectSubset<T, WebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookEvent.
     * @param {WebhookEventCreateArgs} args - Arguments to create a WebhookEvent.
     * @example
     * // Create one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.create({
     *   data: {
     *     // ... data to create a WebhookEvent
     *   }
     * })
     * 
     */
    create<T extends WebhookEventCreateArgs>(args: SelectSubset<T, WebhookEventCreateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventCreateManyArgs>(args?: SelectSubset<T, WebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookEvent.
     * @param {WebhookEventDeleteArgs} args - Arguments to delete one WebhookEvent.
     * @example
     * // Delete one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventDeleteArgs>(args: SelectSubset<T, WebhookEventDeleteArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookEvent.
     * @param {WebhookEventUpdateArgs} args - Arguments to update one WebhookEvent.
     * @example
     * // Update one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventUpdateArgs>(args: SelectSubset<T, WebhookEventUpdateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventDeleteManyArgs>(args?: SelectSubset<T, WebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventUpdateManyArgs>(args: SelectSubset<T, WebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents and returns the data updated in the database.
     * @param {WebhookEventUpdateManyAndReturnArgs} args - Arguments to update many WebhookEvents.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookEvent.
     * @param {WebhookEventUpsertArgs} args - Arguments to update or create a WebhookEvent.
     * @example
     * // Update or create a WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.upsert({
     *   create: {
     *     // ... data to create a WebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventUpsertArgs>(args: SelectSubset<T, WebhookEventUpsertArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvent.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventCountArgs>(
      args?: Subset<T, WebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookEventAggregateArgs>(args: Subset<T, WebhookEventAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventAggregateType<T>>

    /**
     * Group by WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvent model
   */
  readonly fields: WebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends WebhookEvent$paymentArgs<ExtArgs> = {}>(args?: Subset<T, WebhookEvent$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookEvent model
   */
  interface WebhookEventFieldRefs {
    readonly id: FieldRef<"WebhookEvent", 'String'>
    readonly provider: FieldRef<"WebhookEvent", 'String'>
    readonly eventId: FieldRef<"WebhookEvent", 'String'>
    readonly eventType: FieldRef<"WebhookEvent", 'String'>
    readonly paymentId: FieldRef<"WebhookEvent", 'String'>
    readonly payload: FieldRef<"WebhookEvent", 'Json'>
    readonly processedAt: FieldRef<"WebhookEvent", 'DateTime'>
    readonly createdAt: FieldRef<"WebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvent findUnique
   */
  export type WebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findUniqueOrThrow
   */
  export type WebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findFirst
   */
  export type WebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findFirstOrThrow
   */
  export type WebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findMany
   */
  export type WebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent create
   */
  export type WebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvent.
     */
    data: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
  }

  /**
   * WebhookEvent createMany
   */
  export type WebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent createManyAndReturn
   */
  export type WebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookEvent update
   */
  export type WebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvent.
     */
    data: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvent to update.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent updateMany
   */
  export type WebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent updateManyAndReturn
   */
  export type WebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookEvent upsert
   */
  export type WebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvent to update in case it exists.
     */
    where: WebhookEventWhereUniqueInput
    /**
     * In case the WebhookEvent found by the `where` argument doesn't exist, create a new WebhookEvent with this data.
     */
    create: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
    /**
     * In case the WebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
  }

  /**
   * WebhookEvent delete
   */
  export type WebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
    /**
     * Filter which WebhookEvent to delete.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent deleteMany
   */
  export type WebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * WebhookEvent.payment
   */
  export type WebhookEvent$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * WebhookEvent without action
   */
  export type WebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEventInclude<ExtArgs> | null
  }


  /**
   * Model Signatory
   */

  export type AggregateSignatory = {
    _count: SignatoryCountAggregateOutputType | null
    _min: SignatoryMinAggregateOutputType | null
    _max: SignatoryMaxAggregateOutputType | null
  }

  export type SignatoryMinAggregateOutputType = {
    id: string | null
    causeId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type SignatoryMaxAggregateOutputType = {
    id: string | null
    causeId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type SignatoryCountAggregateOutputType = {
    id: number
    causeId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type SignatoryMinAggregateInputType = {
    id?: true
    causeId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type SignatoryMaxAggregateInputType = {
    id?: true
    causeId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type SignatoryCountAggregateInputType = {
    id?: true
    causeId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type SignatoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signatory to aggregate.
     */
    where?: SignatoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signatories to fetch.
     */
    orderBy?: SignatoryOrderByWithRelationInput | SignatoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignatoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signatories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signatories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signatories
    **/
    _count?: true | SignatoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignatoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignatoryMaxAggregateInputType
  }

  export type GetSignatoryAggregateType<T extends SignatoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSignatory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignatory[P]>
      : GetScalarType<T[P], AggregateSignatory[P]>
  }




  export type SignatoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignatoryWhereInput
    orderBy?: SignatoryOrderByWithAggregationInput | SignatoryOrderByWithAggregationInput[]
    by: SignatoryScalarFieldEnum[] | SignatoryScalarFieldEnum
    having?: SignatoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignatoryCountAggregateInputType | true
    _min?: SignatoryMinAggregateInputType
    _max?: SignatoryMaxAggregateInputType
  }

  export type SignatoryGroupByOutputType = {
    id: string
    causeId: string
    userId: string
    role: string
    createdAt: Date
    _count: SignatoryCountAggregateOutputType | null
    _min: SignatoryMinAggregateOutputType | null
    _max: SignatoryMaxAggregateOutputType | null
  }

  type GetSignatoryGroupByPayload<T extends SignatoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignatoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignatoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignatoryGroupByOutputType[P]>
            : GetScalarType<T[P], SignatoryGroupByOutputType[P]>
        }
      >
    >


  export type SignatorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    approvals?: boolean | Signatory$approvalsArgs<ExtArgs>
    _count?: boolean | SignatoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatory"]>

  export type SignatorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatory"]>

  export type SignatorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatory"]>

  export type SignatorySelectScalar = {
    id?: boolean
    causeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type SignatoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "causeId" | "userId" | "role" | "createdAt", ExtArgs["result"]["signatory"]>
  export type SignatoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    approvals?: boolean | Signatory$approvalsArgs<ExtArgs>
    _count?: boolean | SignatoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignatoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }
  export type SignatoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }

  export type $SignatoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signatory"
    objects: {
      cause: Prisma.$CausePayload<ExtArgs>
      approvals: Prisma.$PayoutApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      causeId: string
      userId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["signatory"]>
    composites: {}
  }

  type SignatoryGetPayload<S extends boolean | null | undefined | SignatoryDefaultArgs> = $Result.GetResult<Prisma.$SignatoryPayload, S>

  type SignatoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignatoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignatoryCountAggregateInputType | true
    }

  export interface SignatoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signatory'], meta: { name: 'Signatory' } }
    /**
     * Find zero or one Signatory that matches the filter.
     * @param {SignatoryFindUniqueArgs} args - Arguments to find a Signatory
     * @example
     * // Get one Signatory
     * const signatory = await prisma.signatory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignatoryFindUniqueArgs>(args: SelectSubset<T, SignatoryFindUniqueArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signatory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignatoryFindUniqueOrThrowArgs} args - Arguments to find a Signatory
     * @example
     * // Get one Signatory
     * const signatory = await prisma.signatory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignatoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SignatoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signatory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryFindFirstArgs} args - Arguments to find a Signatory
     * @example
     * // Get one Signatory
     * const signatory = await prisma.signatory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignatoryFindFirstArgs>(args?: SelectSubset<T, SignatoryFindFirstArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signatory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryFindFirstOrThrowArgs} args - Arguments to find a Signatory
     * @example
     * // Get one Signatory
     * const signatory = await prisma.signatory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignatoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SignatoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signatories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signatories
     * const signatories = await prisma.signatory.findMany()
     * 
     * // Get first 10 Signatories
     * const signatories = await prisma.signatory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signatoryWithIdOnly = await prisma.signatory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignatoryFindManyArgs>(args?: SelectSubset<T, SignatoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signatory.
     * @param {SignatoryCreateArgs} args - Arguments to create a Signatory.
     * @example
     * // Create one Signatory
     * const Signatory = await prisma.signatory.create({
     *   data: {
     *     // ... data to create a Signatory
     *   }
     * })
     * 
     */
    create<T extends SignatoryCreateArgs>(args: SelectSubset<T, SignatoryCreateArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signatories.
     * @param {SignatoryCreateManyArgs} args - Arguments to create many Signatories.
     * @example
     * // Create many Signatories
     * const signatory = await prisma.signatory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignatoryCreateManyArgs>(args?: SelectSubset<T, SignatoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signatories and returns the data saved in the database.
     * @param {SignatoryCreateManyAndReturnArgs} args - Arguments to create many Signatories.
     * @example
     * // Create many Signatories
     * const signatory = await prisma.signatory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signatories and only return the `id`
     * const signatoryWithIdOnly = await prisma.signatory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignatoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SignatoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signatory.
     * @param {SignatoryDeleteArgs} args - Arguments to delete one Signatory.
     * @example
     * // Delete one Signatory
     * const Signatory = await prisma.signatory.delete({
     *   where: {
     *     // ... filter to delete one Signatory
     *   }
     * })
     * 
     */
    delete<T extends SignatoryDeleteArgs>(args: SelectSubset<T, SignatoryDeleteArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signatory.
     * @param {SignatoryUpdateArgs} args - Arguments to update one Signatory.
     * @example
     * // Update one Signatory
     * const signatory = await prisma.signatory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignatoryUpdateArgs>(args: SelectSubset<T, SignatoryUpdateArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signatories.
     * @param {SignatoryDeleteManyArgs} args - Arguments to filter Signatories to delete.
     * @example
     * // Delete a few Signatories
     * const { count } = await prisma.signatory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignatoryDeleteManyArgs>(args?: SelectSubset<T, SignatoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signatories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signatories
     * const signatory = await prisma.signatory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignatoryUpdateManyArgs>(args: SelectSubset<T, SignatoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signatories and returns the data updated in the database.
     * @param {SignatoryUpdateManyAndReturnArgs} args - Arguments to update many Signatories.
     * @example
     * // Update many Signatories
     * const signatory = await prisma.signatory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signatories and only return the `id`
     * const signatoryWithIdOnly = await prisma.signatory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignatoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SignatoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signatory.
     * @param {SignatoryUpsertArgs} args - Arguments to update or create a Signatory.
     * @example
     * // Update or create a Signatory
     * const signatory = await prisma.signatory.upsert({
     *   create: {
     *     // ... data to create a Signatory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signatory we want to update
     *   }
     * })
     */
    upsert<T extends SignatoryUpsertArgs>(args: SelectSubset<T, SignatoryUpsertArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signatories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryCountArgs} args - Arguments to filter Signatories to count.
     * @example
     * // Count the number of Signatories
     * const count = await prisma.signatory.count({
     *   where: {
     *     // ... the filter for the Signatories we want to count
     *   }
     * })
    **/
    count<T extends SignatoryCountArgs>(
      args?: Subset<T, SignatoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignatoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signatory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignatoryAggregateArgs>(args: Subset<T, SignatoryAggregateArgs>): Prisma.PrismaPromise<GetSignatoryAggregateType<T>>

    /**
     * Group by Signatory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignatoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignatoryGroupByArgs['orderBy'] }
        : { orderBy?: SignatoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignatoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignatoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signatory model
   */
  readonly fields: SignatoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signatory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignatoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cause<T extends CauseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CauseDefaultArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvals<T extends Signatory$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, Signatory$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Signatory model
   */
  interface SignatoryFieldRefs {
    readonly id: FieldRef<"Signatory", 'String'>
    readonly causeId: FieldRef<"Signatory", 'String'>
    readonly userId: FieldRef<"Signatory", 'String'>
    readonly role: FieldRef<"Signatory", 'String'>
    readonly createdAt: FieldRef<"Signatory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signatory findUnique
   */
  export type SignatoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * Filter, which Signatory to fetch.
     */
    where: SignatoryWhereUniqueInput
  }

  /**
   * Signatory findUniqueOrThrow
   */
  export type SignatoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * Filter, which Signatory to fetch.
     */
    where: SignatoryWhereUniqueInput
  }

  /**
   * Signatory findFirst
   */
  export type SignatoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * Filter, which Signatory to fetch.
     */
    where?: SignatoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signatories to fetch.
     */
    orderBy?: SignatoryOrderByWithRelationInput | SignatoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signatories.
     */
    cursor?: SignatoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signatories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signatories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signatories.
     */
    distinct?: SignatoryScalarFieldEnum | SignatoryScalarFieldEnum[]
  }

  /**
   * Signatory findFirstOrThrow
   */
  export type SignatoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * Filter, which Signatory to fetch.
     */
    where?: SignatoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signatories to fetch.
     */
    orderBy?: SignatoryOrderByWithRelationInput | SignatoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signatories.
     */
    cursor?: SignatoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signatories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signatories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signatories.
     */
    distinct?: SignatoryScalarFieldEnum | SignatoryScalarFieldEnum[]
  }

  /**
   * Signatory findMany
   */
  export type SignatoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * Filter, which Signatories to fetch.
     */
    where?: SignatoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signatories to fetch.
     */
    orderBy?: SignatoryOrderByWithRelationInput | SignatoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signatories.
     */
    cursor?: SignatoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signatories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signatories.
     */
    skip?: number
    distinct?: SignatoryScalarFieldEnum | SignatoryScalarFieldEnum[]
  }

  /**
   * Signatory create
   */
  export type SignatoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Signatory.
     */
    data: XOR<SignatoryCreateInput, SignatoryUncheckedCreateInput>
  }

  /**
   * Signatory createMany
   */
  export type SignatoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signatories.
     */
    data: SignatoryCreateManyInput | SignatoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signatory createManyAndReturn
   */
  export type SignatoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * The data used to create many Signatories.
     */
    data: SignatoryCreateManyInput | SignatoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signatory update
   */
  export type SignatoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Signatory.
     */
    data: XOR<SignatoryUpdateInput, SignatoryUncheckedUpdateInput>
    /**
     * Choose, which Signatory to update.
     */
    where: SignatoryWhereUniqueInput
  }

  /**
   * Signatory updateMany
   */
  export type SignatoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signatories.
     */
    data: XOR<SignatoryUpdateManyMutationInput, SignatoryUncheckedUpdateManyInput>
    /**
     * Filter which Signatories to update
     */
    where?: SignatoryWhereInput
    /**
     * Limit how many Signatories to update.
     */
    limit?: number
  }

  /**
   * Signatory updateManyAndReturn
   */
  export type SignatoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * The data used to update Signatories.
     */
    data: XOR<SignatoryUpdateManyMutationInput, SignatoryUncheckedUpdateManyInput>
    /**
     * Filter which Signatories to update
     */
    where?: SignatoryWhereInput
    /**
     * Limit how many Signatories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signatory upsert
   */
  export type SignatoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Signatory to update in case it exists.
     */
    where: SignatoryWhereUniqueInput
    /**
     * In case the Signatory found by the `where` argument doesn't exist, create a new Signatory with this data.
     */
    create: XOR<SignatoryCreateInput, SignatoryUncheckedCreateInput>
    /**
     * In case the Signatory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignatoryUpdateInput, SignatoryUncheckedUpdateInput>
  }

  /**
   * Signatory delete
   */
  export type SignatoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
    /**
     * Filter which Signatory to delete.
     */
    where: SignatoryWhereUniqueInput
  }

  /**
   * Signatory deleteMany
   */
  export type SignatoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signatories to delete
     */
    where?: SignatoryWhereInput
    /**
     * Limit how many Signatories to delete.
     */
    limit?: number
  }

  /**
   * Signatory.approvals
   */
  export type Signatory$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    where?: PayoutApprovalWhereInput
    orderBy?: PayoutApprovalOrderByWithRelationInput | PayoutApprovalOrderByWithRelationInput[]
    cursor?: PayoutApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutApprovalScalarFieldEnum | PayoutApprovalScalarFieldEnum[]
  }

  /**
   * Signatory without action
   */
  export type SignatoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signatory
     */
    select?: SignatorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signatory
     */
    omit?: SignatoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatoryInclude<ExtArgs> | null
  }


  /**
   * Model PayoutRequest
   */

  export type AggregatePayoutRequest = {
    _count: PayoutRequestCountAggregateOutputType | null
    _avg: PayoutRequestAvgAggregateOutputType | null
    _sum: PayoutRequestSumAggregateOutputType | null
    _min: PayoutRequestMinAggregateOutputType | null
    _max: PayoutRequestMaxAggregateOutputType | null
  }

  export type PayoutRequestAvgAggregateOutputType = {
    amount: number | null
    approvalThreshold: number | null
  }

  export type PayoutRequestSumAggregateOutputType = {
    amount: number | null
    approvalThreshold: number | null
  }

  export type PayoutRequestMinAggregateOutputType = {
    id: string | null
    causeId: string | null
    amount: number | null
    currency: string | null
    provider: string | null
    providerRef: string | null
    payoutModel: string | null
    status: string | null
    approvalThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutRequestMaxAggregateOutputType = {
    id: string | null
    causeId: string | null
    amount: number | null
    currency: string | null
    provider: string | null
    providerRef: string | null
    payoutModel: string | null
    status: string | null
    approvalThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutRequestCountAggregateOutputType = {
    id: number
    causeId: number
    amount: number
    currency: number
    provider: number
    providerRef: number
    payoutModel: number
    status: number
    approvalThreshold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayoutRequestAvgAggregateInputType = {
    amount?: true
    approvalThreshold?: true
  }

  export type PayoutRequestSumAggregateInputType = {
    amount?: true
    approvalThreshold?: true
  }

  export type PayoutRequestMinAggregateInputType = {
    id?: true
    causeId?: true
    amount?: true
    currency?: true
    provider?: true
    providerRef?: true
    payoutModel?: true
    status?: true
    approvalThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutRequestMaxAggregateInputType = {
    id?: true
    causeId?: true
    amount?: true
    currency?: true
    provider?: true
    providerRef?: true
    payoutModel?: true
    status?: true
    approvalThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutRequestCountAggregateInputType = {
    id?: true
    causeId?: true
    amount?: true
    currency?: true
    provider?: true
    providerRef?: true
    payoutModel?: true
    status?: true
    approvalThreshold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayoutRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutRequest to aggregate.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayoutRequests
    **/
    _count?: true | PayoutRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutRequestMaxAggregateInputType
  }

  export type GetPayoutRequestAggregateType<T extends PayoutRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePayoutRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayoutRequest[P]>
      : GetScalarType<T[P], AggregatePayoutRequest[P]>
  }




  export type PayoutRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutRequestWhereInput
    orderBy?: PayoutRequestOrderByWithAggregationInput | PayoutRequestOrderByWithAggregationInput[]
    by: PayoutRequestScalarFieldEnum[] | PayoutRequestScalarFieldEnum
    having?: PayoutRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutRequestCountAggregateInputType | true
    _avg?: PayoutRequestAvgAggregateInputType
    _sum?: PayoutRequestSumAggregateInputType
    _min?: PayoutRequestMinAggregateInputType
    _max?: PayoutRequestMaxAggregateInputType
  }

  export type PayoutRequestGroupByOutputType = {
    id: string
    causeId: string
    amount: number
    currency: string
    provider: string
    providerRef: string | null
    payoutModel: string
    status: string
    approvalThreshold: number
    createdAt: Date
    updatedAt: Date
    _count: PayoutRequestCountAggregateOutputType | null
    _avg: PayoutRequestAvgAggregateOutputType | null
    _sum: PayoutRequestSumAggregateOutputType | null
    _min: PayoutRequestMinAggregateOutputType | null
    _max: PayoutRequestMaxAggregateOutputType | null
  }

  type GetPayoutRequestGroupByPayload<T extends PayoutRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutRequestGroupByOutputType[P]>
        }
      >
    >


  export type PayoutRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerRef?: boolean
    payoutModel?: boolean
    status?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    approvals?: boolean | PayoutRequest$approvalsArgs<ExtArgs>
    _count?: boolean | PayoutRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutRequest"]>

  export type PayoutRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerRef?: boolean
    payoutModel?: boolean
    status?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutRequest"]>

  export type PayoutRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    causeId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerRef?: boolean
    payoutModel?: boolean
    status?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutRequest"]>

  export type PayoutRequestSelectScalar = {
    id?: boolean
    causeId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerRef?: boolean
    payoutModel?: boolean
    status?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayoutRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "causeId" | "amount" | "currency" | "provider" | "providerRef" | "payoutModel" | "status" | "approvalThreshold" | "createdAt" | "updatedAt", ExtArgs["result"]["payoutRequest"]>
  export type PayoutRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
    approvals?: boolean | PayoutRequest$approvalsArgs<ExtArgs>
    _count?: boolean | PayoutRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayoutRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }
  export type PayoutRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cause?: boolean | CauseDefaultArgs<ExtArgs>
  }

  export type $PayoutRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayoutRequest"
    objects: {
      cause: Prisma.$CausePayload<ExtArgs>
      approvals: Prisma.$PayoutApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      causeId: string
      amount: number
      currency: string
      provider: string
      providerRef: string | null
      payoutModel: string
      status: string
      approvalThreshold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payoutRequest"]>
    composites: {}
  }

  type PayoutRequestGetPayload<S extends boolean | null | undefined | PayoutRequestDefaultArgs> = $Result.GetResult<Prisma.$PayoutRequestPayload, S>

  type PayoutRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayoutRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutRequestCountAggregateInputType | true
    }

  export interface PayoutRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayoutRequest'], meta: { name: 'PayoutRequest' } }
    /**
     * Find zero or one PayoutRequest that matches the filter.
     * @param {PayoutRequestFindUniqueArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutRequestFindUniqueArgs>(args: SelectSubset<T, PayoutRequestFindUniqueArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayoutRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutRequestFindUniqueOrThrowArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestFindFirstArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutRequestFindFirstArgs>(args?: SelectSubset<T, PayoutRequestFindFirstArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestFindFirstOrThrowArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayoutRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayoutRequests
     * const payoutRequests = await prisma.payoutRequest.findMany()
     * 
     * // Get first 10 PayoutRequests
     * const payoutRequests = await prisma.payoutRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutRequestWithIdOnly = await prisma.payoutRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutRequestFindManyArgs>(args?: SelectSubset<T, PayoutRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayoutRequest.
     * @param {PayoutRequestCreateArgs} args - Arguments to create a PayoutRequest.
     * @example
     * // Create one PayoutRequest
     * const PayoutRequest = await prisma.payoutRequest.create({
     *   data: {
     *     // ... data to create a PayoutRequest
     *   }
     * })
     * 
     */
    create<T extends PayoutRequestCreateArgs>(args: SelectSubset<T, PayoutRequestCreateArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayoutRequests.
     * @param {PayoutRequestCreateManyArgs} args - Arguments to create many PayoutRequests.
     * @example
     * // Create many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutRequestCreateManyArgs>(args?: SelectSubset<T, PayoutRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayoutRequests and returns the data saved in the database.
     * @param {PayoutRequestCreateManyAndReturnArgs} args - Arguments to create many PayoutRequests.
     * @example
     * // Create many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayoutRequests and only return the `id`
     * const payoutRequestWithIdOnly = await prisma.payoutRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayoutRequest.
     * @param {PayoutRequestDeleteArgs} args - Arguments to delete one PayoutRequest.
     * @example
     * // Delete one PayoutRequest
     * const PayoutRequest = await prisma.payoutRequest.delete({
     *   where: {
     *     // ... filter to delete one PayoutRequest
     *   }
     * })
     * 
     */
    delete<T extends PayoutRequestDeleteArgs>(args: SelectSubset<T, PayoutRequestDeleteArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayoutRequest.
     * @param {PayoutRequestUpdateArgs} args - Arguments to update one PayoutRequest.
     * @example
     * // Update one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutRequestUpdateArgs>(args: SelectSubset<T, PayoutRequestUpdateArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayoutRequests.
     * @param {PayoutRequestDeleteManyArgs} args - Arguments to filter PayoutRequests to delete.
     * @example
     * // Delete a few PayoutRequests
     * const { count } = await prisma.payoutRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutRequestDeleteManyArgs>(args?: SelectSubset<T, PayoutRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutRequestUpdateManyArgs>(args: SelectSubset<T, PayoutRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutRequests and returns the data updated in the database.
     * @param {PayoutRequestUpdateManyAndReturnArgs} args - Arguments to update many PayoutRequests.
     * @example
     * // Update many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayoutRequests and only return the `id`
     * const payoutRequestWithIdOnly = await prisma.payoutRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayoutRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PayoutRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayoutRequest.
     * @param {PayoutRequestUpsertArgs} args - Arguments to update or create a PayoutRequest.
     * @example
     * // Update or create a PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.upsert({
     *   create: {
     *     // ... data to create a PayoutRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayoutRequest we want to update
     *   }
     * })
     */
    upsert<T extends PayoutRequestUpsertArgs>(args: SelectSubset<T, PayoutRequestUpsertArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayoutRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestCountArgs} args - Arguments to filter PayoutRequests to count.
     * @example
     * // Count the number of PayoutRequests
     * const count = await prisma.payoutRequest.count({
     *   where: {
     *     // ... the filter for the PayoutRequests we want to count
     *   }
     * })
    **/
    count<T extends PayoutRequestCountArgs>(
      args?: Subset<T, PayoutRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayoutRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayoutRequestAggregateArgs>(args: Subset<T, PayoutRequestAggregateArgs>): Prisma.PrismaPromise<GetPayoutRequestAggregateType<T>>

    /**
     * Group by PayoutRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayoutRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutRequestGroupByArgs['orderBy'] }
        : { orderBy?: PayoutRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayoutRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayoutRequest model
   */
  readonly fields: PayoutRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayoutRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cause<T extends CauseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CauseDefaultArgs<ExtArgs>>): Prisma__CauseClient<$Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvals<T extends PayoutRequest$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, PayoutRequest$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayoutRequest model
   */
  interface PayoutRequestFieldRefs {
    readonly id: FieldRef<"PayoutRequest", 'String'>
    readonly causeId: FieldRef<"PayoutRequest", 'String'>
    readonly amount: FieldRef<"PayoutRequest", 'Float'>
    readonly currency: FieldRef<"PayoutRequest", 'String'>
    readonly provider: FieldRef<"PayoutRequest", 'String'>
    readonly providerRef: FieldRef<"PayoutRequest", 'String'>
    readonly payoutModel: FieldRef<"PayoutRequest", 'String'>
    readonly status: FieldRef<"PayoutRequest", 'String'>
    readonly approvalThreshold: FieldRef<"PayoutRequest", 'Int'>
    readonly createdAt: FieldRef<"PayoutRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PayoutRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayoutRequest findUnique
   */
  export type PayoutRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest findUniqueOrThrow
   */
  export type PayoutRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest findFirst
   */
  export type PayoutRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutRequests.
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutRequests.
     */
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * PayoutRequest findFirstOrThrow
   */
  export type PayoutRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutRequests.
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutRequests.
     */
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * PayoutRequest findMany
   */
  export type PayoutRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequests to fetch.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayoutRequests.
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * PayoutRequest create
   */
  export type PayoutRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PayoutRequest.
     */
    data: XOR<PayoutRequestCreateInput, PayoutRequestUncheckedCreateInput>
  }

  /**
   * PayoutRequest createMany
   */
  export type PayoutRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayoutRequests.
     */
    data: PayoutRequestCreateManyInput | PayoutRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayoutRequest createManyAndReturn
   */
  export type PayoutRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PayoutRequests.
     */
    data: PayoutRequestCreateManyInput | PayoutRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutRequest update
   */
  export type PayoutRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PayoutRequest.
     */
    data: XOR<PayoutRequestUpdateInput, PayoutRequestUncheckedUpdateInput>
    /**
     * Choose, which PayoutRequest to update.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest updateMany
   */
  export type PayoutRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayoutRequests.
     */
    data: XOR<PayoutRequestUpdateManyMutationInput, PayoutRequestUncheckedUpdateManyInput>
    /**
     * Filter which PayoutRequests to update
     */
    where?: PayoutRequestWhereInput
    /**
     * Limit how many PayoutRequests to update.
     */
    limit?: number
  }

  /**
   * PayoutRequest updateManyAndReturn
   */
  export type PayoutRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * The data used to update PayoutRequests.
     */
    data: XOR<PayoutRequestUpdateManyMutationInput, PayoutRequestUncheckedUpdateManyInput>
    /**
     * Filter which PayoutRequests to update
     */
    where?: PayoutRequestWhereInput
    /**
     * Limit how many PayoutRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutRequest upsert
   */
  export type PayoutRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PayoutRequest to update in case it exists.
     */
    where: PayoutRequestWhereUniqueInput
    /**
     * In case the PayoutRequest found by the `where` argument doesn't exist, create a new PayoutRequest with this data.
     */
    create: XOR<PayoutRequestCreateInput, PayoutRequestUncheckedCreateInput>
    /**
     * In case the PayoutRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutRequestUpdateInput, PayoutRequestUncheckedUpdateInput>
  }

  /**
   * PayoutRequest delete
   */
  export type PayoutRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter which PayoutRequest to delete.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest deleteMany
   */
  export type PayoutRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutRequests to delete
     */
    where?: PayoutRequestWhereInput
    /**
     * Limit how many PayoutRequests to delete.
     */
    limit?: number
  }

  /**
   * PayoutRequest.approvals
   */
  export type PayoutRequest$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    where?: PayoutApprovalWhereInput
    orderBy?: PayoutApprovalOrderByWithRelationInput | PayoutApprovalOrderByWithRelationInput[]
    cursor?: PayoutApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutApprovalScalarFieldEnum | PayoutApprovalScalarFieldEnum[]
  }

  /**
   * PayoutRequest without action
   */
  export type PayoutRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
  }


  /**
   * Model PayoutApproval
   */

  export type AggregatePayoutApproval = {
    _count: PayoutApprovalCountAggregateOutputType | null
    _min: PayoutApprovalMinAggregateOutputType | null
    _max: PayoutApprovalMaxAggregateOutputType | null
  }

  export type PayoutApprovalMinAggregateOutputType = {
    id: string | null
    payoutRequestId: string | null
    signatoryId: string | null
    approvedAt: Date | null
  }

  export type PayoutApprovalMaxAggregateOutputType = {
    id: string | null
    payoutRequestId: string | null
    signatoryId: string | null
    approvedAt: Date | null
  }

  export type PayoutApprovalCountAggregateOutputType = {
    id: number
    payoutRequestId: number
    signatoryId: number
    approvedAt: number
    _all: number
  }


  export type PayoutApprovalMinAggregateInputType = {
    id?: true
    payoutRequestId?: true
    signatoryId?: true
    approvedAt?: true
  }

  export type PayoutApprovalMaxAggregateInputType = {
    id?: true
    payoutRequestId?: true
    signatoryId?: true
    approvedAt?: true
  }

  export type PayoutApprovalCountAggregateInputType = {
    id?: true
    payoutRequestId?: true
    signatoryId?: true
    approvedAt?: true
    _all?: true
  }

  export type PayoutApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutApproval to aggregate.
     */
    where?: PayoutApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutApprovals to fetch.
     */
    orderBy?: PayoutApprovalOrderByWithRelationInput | PayoutApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayoutApprovals
    **/
    _count?: true | PayoutApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutApprovalMaxAggregateInputType
  }

  export type GetPayoutApprovalAggregateType<T extends PayoutApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregatePayoutApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayoutApproval[P]>
      : GetScalarType<T[P], AggregatePayoutApproval[P]>
  }




  export type PayoutApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutApprovalWhereInput
    orderBy?: PayoutApprovalOrderByWithAggregationInput | PayoutApprovalOrderByWithAggregationInput[]
    by: PayoutApprovalScalarFieldEnum[] | PayoutApprovalScalarFieldEnum
    having?: PayoutApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutApprovalCountAggregateInputType | true
    _min?: PayoutApprovalMinAggregateInputType
    _max?: PayoutApprovalMaxAggregateInputType
  }

  export type PayoutApprovalGroupByOutputType = {
    id: string
    payoutRequestId: string
    signatoryId: string
    approvedAt: Date
    _count: PayoutApprovalCountAggregateOutputType | null
    _min: PayoutApprovalMinAggregateOutputType | null
    _max: PayoutApprovalMaxAggregateOutputType | null
  }

  type GetPayoutApprovalGroupByPayload<T extends PayoutApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutApprovalGroupByOutputType[P]>
        }
      >
    >


  export type PayoutApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payoutRequestId?: boolean
    signatoryId?: boolean
    approvedAt?: boolean
    payoutRequest?: boolean | PayoutRequestDefaultArgs<ExtArgs>
    signatory?: boolean | SignatoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutApproval"]>

  export type PayoutApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payoutRequestId?: boolean
    signatoryId?: boolean
    approvedAt?: boolean
    payoutRequest?: boolean | PayoutRequestDefaultArgs<ExtArgs>
    signatory?: boolean | SignatoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutApproval"]>

  export type PayoutApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payoutRequestId?: boolean
    signatoryId?: boolean
    approvedAt?: boolean
    payoutRequest?: boolean | PayoutRequestDefaultArgs<ExtArgs>
    signatory?: boolean | SignatoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutApproval"]>

  export type PayoutApprovalSelectScalar = {
    id?: boolean
    payoutRequestId?: boolean
    signatoryId?: boolean
    approvedAt?: boolean
  }

  export type PayoutApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payoutRequestId" | "signatoryId" | "approvedAt", ExtArgs["result"]["payoutApproval"]>
  export type PayoutApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payoutRequest?: boolean | PayoutRequestDefaultArgs<ExtArgs>
    signatory?: boolean | SignatoryDefaultArgs<ExtArgs>
  }
  export type PayoutApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payoutRequest?: boolean | PayoutRequestDefaultArgs<ExtArgs>
    signatory?: boolean | SignatoryDefaultArgs<ExtArgs>
  }
  export type PayoutApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payoutRequest?: boolean | PayoutRequestDefaultArgs<ExtArgs>
    signatory?: boolean | SignatoryDefaultArgs<ExtArgs>
  }

  export type $PayoutApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayoutApproval"
    objects: {
      payoutRequest: Prisma.$PayoutRequestPayload<ExtArgs>
      signatory: Prisma.$SignatoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payoutRequestId: string
      signatoryId: string
      approvedAt: Date
    }, ExtArgs["result"]["payoutApproval"]>
    composites: {}
  }

  type PayoutApprovalGetPayload<S extends boolean | null | undefined | PayoutApprovalDefaultArgs> = $Result.GetResult<Prisma.$PayoutApprovalPayload, S>

  type PayoutApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayoutApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutApprovalCountAggregateInputType | true
    }

  export interface PayoutApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayoutApproval'], meta: { name: 'PayoutApproval' } }
    /**
     * Find zero or one PayoutApproval that matches the filter.
     * @param {PayoutApprovalFindUniqueArgs} args - Arguments to find a PayoutApproval
     * @example
     * // Get one PayoutApproval
     * const payoutApproval = await prisma.payoutApproval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutApprovalFindUniqueArgs>(args: SelectSubset<T, PayoutApprovalFindUniqueArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayoutApproval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutApprovalFindUniqueOrThrowArgs} args - Arguments to find a PayoutApproval
     * @example
     * // Get one PayoutApproval
     * const payoutApproval = await prisma.payoutApproval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutApproval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalFindFirstArgs} args - Arguments to find a PayoutApproval
     * @example
     * // Get one PayoutApproval
     * const payoutApproval = await prisma.payoutApproval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutApprovalFindFirstArgs>(args?: SelectSubset<T, PayoutApprovalFindFirstArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutApproval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalFindFirstOrThrowArgs} args - Arguments to find a PayoutApproval
     * @example
     * // Get one PayoutApproval
     * const payoutApproval = await prisma.payoutApproval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayoutApprovals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayoutApprovals
     * const payoutApprovals = await prisma.payoutApproval.findMany()
     * 
     * // Get first 10 PayoutApprovals
     * const payoutApprovals = await prisma.payoutApproval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutApprovalWithIdOnly = await prisma.payoutApproval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutApprovalFindManyArgs>(args?: SelectSubset<T, PayoutApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayoutApproval.
     * @param {PayoutApprovalCreateArgs} args - Arguments to create a PayoutApproval.
     * @example
     * // Create one PayoutApproval
     * const PayoutApproval = await prisma.payoutApproval.create({
     *   data: {
     *     // ... data to create a PayoutApproval
     *   }
     * })
     * 
     */
    create<T extends PayoutApprovalCreateArgs>(args: SelectSubset<T, PayoutApprovalCreateArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayoutApprovals.
     * @param {PayoutApprovalCreateManyArgs} args - Arguments to create many PayoutApprovals.
     * @example
     * // Create many PayoutApprovals
     * const payoutApproval = await prisma.payoutApproval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutApprovalCreateManyArgs>(args?: SelectSubset<T, PayoutApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayoutApprovals and returns the data saved in the database.
     * @param {PayoutApprovalCreateManyAndReturnArgs} args - Arguments to create many PayoutApprovals.
     * @example
     * // Create many PayoutApprovals
     * const payoutApproval = await prisma.payoutApproval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayoutApprovals and only return the `id`
     * const payoutApprovalWithIdOnly = await prisma.payoutApproval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayoutApproval.
     * @param {PayoutApprovalDeleteArgs} args - Arguments to delete one PayoutApproval.
     * @example
     * // Delete one PayoutApproval
     * const PayoutApproval = await prisma.payoutApproval.delete({
     *   where: {
     *     // ... filter to delete one PayoutApproval
     *   }
     * })
     * 
     */
    delete<T extends PayoutApprovalDeleteArgs>(args: SelectSubset<T, PayoutApprovalDeleteArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayoutApproval.
     * @param {PayoutApprovalUpdateArgs} args - Arguments to update one PayoutApproval.
     * @example
     * // Update one PayoutApproval
     * const payoutApproval = await prisma.payoutApproval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutApprovalUpdateArgs>(args: SelectSubset<T, PayoutApprovalUpdateArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayoutApprovals.
     * @param {PayoutApprovalDeleteManyArgs} args - Arguments to filter PayoutApprovals to delete.
     * @example
     * // Delete a few PayoutApprovals
     * const { count } = await prisma.payoutApproval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutApprovalDeleteManyArgs>(args?: SelectSubset<T, PayoutApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayoutApprovals
     * const payoutApproval = await prisma.payoutApproval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutApprovalUpdateManyArgs>(args: SelectSubset<T, PayoutApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutApprovals and returns the data updated in the database.
     * @param {PayoutApprovalUpdateManyAndReturnArgs} args - Arguments to update many PayoutApprovals.
     * @example
     * // Update many PayoutApprovals
     * const payoutApproval = await prisma.payoutApproval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayoutApprovals and only return the `id`
     * const payoutApprovalWithIdOnly = await prisma.payoutApproval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayoutApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, PayoutApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayoutApproval.
     * @param {PayoutApprovalUpsertArgs} args - Arguments to update or create a PayoutApproval.
     * @example
     * // Update or create a PayoutApproval
     * const payoutApproval = await prisma.payoutApproval.upsert({
     *   create: {
     *     // ... data to create a PayoutApproval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayoutApproval we want to update
     *   }
     * })
     */
    upsert<T extends PayoutApprovalUpsertArgs>(args: SelectSubset<T, PayoutApprovalUpsertArgs<ExtArgs>>): Prisma__PayoutApprovalClient<$Result.GetResult<Prisma.$PayoutApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayoutApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalCountArgs} args - Arguments to filter PayoutApprovals to count.
     * @example
     * // Count the number of PayoutApprovals
     * const count = await prisma.payoutApproval.count({
     *   where: {
     *     // ... the filter for the PayoutApprovals we want to count
     *   }
     * })
    **/
    count<T extends PayoutApprovalCountArgs>(
      args?: Subset<T, PayoutApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayoutApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayoutApprovalAggregateArgs>(args: Subset<T, PayoutApprovalAggregateArgs>): Prisma.PrismaPromise<GetPayoutApprovalAggregateType<T>>

    /**
     * Group by PayoutApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutApprovalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayoutApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutApprovalGroupByArgs['orderBy'] }
        : { orderBy?: PayoutApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayoutApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayoutApproval model
   */
  readonly fields: PayoutApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayoutApproval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payoutRequest<T extends PayoutRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayoutRequestDefaultArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    signatory<T extends SignatoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignatoryDefaultArgs<ExtArgs>>): Prisma__SignatoryClient<$Result.GetResult<Prisma.$SignatoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayoutApproval model
   */
  interface PayoutApprovalFieldRefs {
    readonly id: FieldRef<"PayoutApproval", 'String'>
    readonly payoutRequestId: FieldRef<"PayoutApproval", 'String'>
    readonly signatoryId: FieldRef<"PayoutApproval", 'String'>
    readonly approvedAt: FieldRef<"PayoutApproval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayoutApproval findUnique
   */
  export type PayoutApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * Filter, which PayoutApproval to fetch.
     */
    where: PayoutApprovalWhereUniqueInput
  }

  /**
   * PayoutApproval findUniqueOrThrow
   */
  export type PayoutApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * Filter, which PayoutApproval to fetch.
     */
    where: PayoutApprovalWhereUniqueInput
  }

  /**
   * PayoutApproval findFirst
   */
  export type PayoutApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * Filter, which PayoutApproval to fetch.
     */
    where?: PayoutApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutApprovals to fetch.
     */
    orderBy?: PayoutApprovalOrderByWithRelationInput | PayoutApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutApprovals.
     */
    cursor?: PayoutApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutApprovals.
     */
    distinct?: PayoutApprovalScalarFieldEnum | PayoutApprovalScalarFieldEnum[]
  }

  /**
   * PayoutApproval findFirstOrThrow
   */
  export type PayoutApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * Filter, which PayoutApproval to fetch.
     */
    where?: PayoutApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutApprovals to fetch.
     */
    orderBy?: PayoutApprovalOrderByWithRelationInput | PayoutApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutApprovals.
     */
    cursor?: PayoutApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutApprovals.
     */
    distinct?: PayoutApprovalScalarFieldEnum | PayoutApprovalScalarFieldEnum[]
  }

  /**
   * PayoutApproval findMany
   */
  export type PayoutApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * Filter, which PayoutApprovals to fetch.
     */
    where?: PayoutApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutApprovals to fetch.
     */
    orderBy?: PayoutApprovalOrderByWithRelationInput | PayoutApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayoutApprovals.
     */
    cursor?: PayoutApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutApprovals.
     */
    skip?: number
    distinct?: PayoutApprovalScalarFieldEnum | PayoutApprovalScalarFieldEnum[]
  }

  /**
   * PayoutApproval create
   */
  export type PayoutApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a PayoutApproval.
     */
    data: XOR<PayoutApprovalCreateInput, PayoutApprovalUncheckedCreateInput>
  }

  /**
   * PayoutApproval createMany
   */
  export type PayoutApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayoutApprovals.
     */
    data: PayoutApprovalCreateManyInput | PayoutApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayoutApproval createManyAndReturn
   */
  export type PayoutApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many PayoutApprovals.
     */
    data: PayoutApprovalCreateManyInput | PayoutApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutApproval update
   */
  export type PayoutApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a PayoutApproval.
     */
    data: XOR<PayoutApprovalUpdateInput, PayoutApprovalUncheckedUpdateInput>
    /**
     * Choose, which PayoutApproval to update.
     */
    where: PayoutApprovalWhereUniqueInput
  }

  /**
   * PayoutApproval updateMany
   */
  export type PayoutApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayoutApprovals.
     */
    data: XOR<PayoutApprovalUpdateManyMutationInput, PayoutApprovalUncheckedUpdateManyInput>
    /**
     * Filter which PayoutApprovals to update
     */
    where?: PayoutApprovalWhereInput
    /**
     * Limit how many PayoutApprovals to update.
     */
    limit?: number
  }

  /**
   * PayoutApproval updateManyAndReturn
   */
  export type PayoutApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * The data used to update PayoutApprovals.
     */
    data: XOR<PayoutApprovalUpdateManyMutationInput, PayoutApprovalUncheckedUpdateManyInput>
    /**
     * Filter which PayoutApprovals to update
     */
    where?: PayoutApprovalWhereInput
    /**
     * Limit how many PayoutApprovals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutApproval upsert
   */
  export type PayoutApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the PayoutApproval to update in case it exists.
     */
    where: PayoutApprovalWhereUniqueInput
    /**
     * In case the PayoutApproval found by the `where` argument doesn't exist, create a new PayoutApproval with this data.
     */
    create: XOR<PayoutApprovalCreateInput, PayoutApprovalUncheckedCreateInput>
    /**
     * In case the PayoutApproval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutApprovalUpdateInput, PayoutApprovalUncheckedUpdateInput>
  }

  /**
   * PayoutApproval delete
   */
  export type PayoutApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
    /**
     * Filter which PayoutApproval to delete.
     */
    where: PayoutApprovalWhereUniqueInput
  }

  /**
   * PayoutApproval deleteMany
   */
  export type PayoutApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutApprovals to delete
     */
    where?: PayoutApprovalWhereInput
    /**
     * Limit how many PayoutApprovals to delete.
     */
    limit?: number
  }

  /**
   * PayoutApproval without action
   */
  export type PayoutApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutApproval
     */
    select?: PayoutApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutApproval
     */
    omit?: PayoutApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutApprovalInclude<ExtArgs> | null
  }


  /**
   * Model Ceinture
   */

  export type AggregateCeinture = {
    _count: CeintureCountAggregateOutputType | null
    _min: CeintureMinAggregateOutputType | null
    _max: CeintureMaxAggregateOutputType | null
  }

  export type CeintureMinAggregateOutputType = {
    id: string | null
    meceneId: string | null
    level: string | null
    awardedAt: Date | null
    note: string | null
    createdAt: Date | null
  }

  export type CeintureMaxAggregateOutputType = {
    id: string | null
    meceneId: string | null
    level: string | null
    awardedAt: Date | null
    note: string | null
    createdAt: Date | null
  }

  export type CeintureCountAggregateOutputType = {
    id: number
    meceneId: number
    level: number
    awardedAt: number
    note: number
    createdAt: number
    _all: number
  }


  export type CeintureMinAggregateInputType = {
    id?: true
    meceneId?: true
    level?: true
    awardedAt?: true
    note?: true
    createdAt?: true
  }

  export type CeintureMaxAggregateInputType = {
    id?: true
    meceneId?: true
    level?: true
    awardedAt?: true
    note?: true
    createdAt?: true
  }

  export type CeintureCountAggregateInputType = {
    id?: true
    meceneId?: true
    level?: true
    awardedAt?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type CeintureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ceinture to aggregate.
     */
    where?: CeintureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceintures to fetch.
     */
    orderBy?: CeintureOrderByWithRelationInput | CeintureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CeintureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceintures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceintures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ceintures
    **/
    _count?: true | CeintureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CeintureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CeintureMaxAggregateInputType
  }

  export type GetCeintureAggregateType<T extends CeintureAggregateArgs> = {
        [P in keyof T & keyof AggregateCeinture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCeinture[P]>
      : GetScalarType<T[P], AggregateCeinture[P]>
  }




  export type CeintureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CeintureWhereInput
    orderBy?: CeintureOrderByWithAggregationInput | CeintureOrderByWithAggregationInput[]
    by: CeintureScalarFieldEnum[] | CeintureScalarFieldEnum
    having?: CeintureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CeintureCountAggregateInputType | true
    _min?: CeintureMinAggregateInputType
    _max?: CeintureMaxAggregateInputType
  }

  export type CeintureGroupByOutputType = {
    id: string
    meceneId: string
    level: string
    awardedAt: Date
    note: string | null
    createdAt: Date
    _count: CeintureCountAggregateOutputType | null
    _min: CeintureMinAggregateOutputType | null
    _max: CeintureMaxAggregateOutputType | null
  }

  type GetCeintureGroupByPayload<T extends CeintureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CeintureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CeintureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CeintureGroupByOutputType[P]>
            : GetScalarType<T[P], CeintureGroupByOutputType[P]>
        }
      >
    >


  export type CeintureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meceneId?: boolean
    level?: boolean
    awardedAt?: boolean
    note?: boolean
    createdAt?: boolean
    mecene?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ceinture"]>

  export type CeintureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meceneId?: boolean
    level?: boolean
    awardedAt?: boolean
    note?: boolean
    createdAt?: boolean
    mecene?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ceinture"]>

  export type CeintureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meceneId?: boolean
    level?: boolean
    awardedAt?: boolean
    note?: boolean
    createdAt?: boolean
    mecene?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ceinture"]>

  export type CeintureSelectScalar = {
    id?: boolean
    meceneId?: boolean
    level?: boolean
    awardedAt?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type CeintureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meceneId" | "level" | "awardedAt" | "note" | "createdAt", ExtArgs["result"]["ceinture"]>
  export type CeintureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mecene?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CeintureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mecene?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CeintureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mecene?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CeinturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ceinture"
    objects: {
      mecene: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meceneId: string
      level: string
      awardedAt: Date
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["ceinture"]>
    composites: {}
  }

  type CeintureGetPayload<S extends boolean | null | undefined | CeintureDefaultArgs> = $Result.GetResult<Prisma.$CeinturePayload, S>

  type CeintureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CeintureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CeintureCountAggregateInputType | true
    }

  export interface CeintureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ceinture'], meta: { name: 'Ceinture' } }
    /**
     * Find zero or one Ceinture that matches the filter.
     * @param {CeintureFindUniqueArgs} args - Arguments to find a Ceinture
     * @example
     * // Get one Ceinture
     * const ceinture = await prisma.ceinture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CeintureFindUniqueArgs>(args: SelectSubset<T, CeintureFindUniqueArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ceinture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CeintureFindUniqueOrThrowArgs} args - Arguments to find a Ceinture
     * @example
     * // Get one Ceinture
     * const ceinture = await prisma.ceinture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CeintureFindUniqueOrThrowArgs>(args: SelectSubset<T, CeintureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ceinture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureFindFirstArgs} args - Arguments to find a Ceinture
     * @example
     * // Get one Ceinture
     * const ceinture = await prisma.ceinture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CeintureFindFirstArgs>(args?: SelectSubset<T, CeintureFindFirstArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ceinture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureFindFirstOrThrowArgs} args - Arguments to find a Ceinture
     * @example
     * // Get one Ceinture
     * const ceinture = await prisma.ceinture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CeintureFindFirstOrThrowArgs>(args?: SelectSubset<T, CeintureFindFirstOrThrowArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ceintures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ceintures
     * const ceintures = await prisma.ceinture.findMany()
     * 
     * // Get first 10 Ceintures
     * const ceintures = await prisma.ceinture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ceintureWithIdOnly = await prisma.ceinture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CeintureFindManyArgs>(args?: SelectSubset<T, CeintureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ceinture.
     * @param {CeintureCreateArgs} args - Arguments to create a Ceinture.
     * @example
     * // Create one Ceinture
     * const Ceinture = await prisma.ceinture.create({
     *   data: {
     *     // ... data to create a Ceinture
     *   }
     * })
     * 
     */
    create<T extends CeintureCreateArgs>(args: SelectSubset<T, CeintureCreateArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ceintures.
     * @param {CeintureCreateManyArgs} args - Arguments to create many Ceintures.
     * @example
     * // Create many Ceintures
     * const ceinture = await prisma.ceinture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CeintureCreateManyArgs>(args?: SelectSubset<T, CeintureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ceintures and returns the data saved in the database.
     * @param {CeintureCreateManyAndReturnArgs} args - Arguments to create many Ceintures.
     * @example
     * // Create many Ceintures
     * const ceinture = await prisma.ceinture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ceintures and only return the `id`
     * const ceintureWithIdOnly = await prisma.ceinture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CeintureCreateManyAndReturnArgs>(args?: SelectSubset<T, CeintureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ceinture.
     * @param {CeintureDeleteArgs} args - Arguments to delete one Ceinture.
     * @example
     * // Delete one Ceinture
     * const Ceinture = await prisma.ceinture.delete({
     *   where: {
     *     // ... filter to delete one Ceinture
     *   }
     * })
     * 
     */
    delete<T extends CeintureDeleteArgs>(args: SelectSubset<T, CeintureDeleteArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ceinture.
     * @param {CeintureUpdateArgs} args - Arguments to update one Ceinture.
     * @example
     * // Update one Ceinture
     * const ceinture = await prisma.ceinture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CeintureUpdateArgs>(args: SelectSubset<T, CeintureUpdateArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ceintures.
     * @param {CeintureDeleteManyArgs} args - Arguments to filter Ceintures to delete.
     * @example
     * // Delete a few Ceintures
     * const { count } = await prisma.ceinture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CeintureDeleteManyArgs>(args?: SelectSubset<T, CeintureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ceintures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ceintures
     * const ceinture = await prisma.ceinture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CeintureUpdateManyArgs>(args: SelectSubset<T, CeintureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ceintures and returns the data updated in the database.
     * @param {CeintureUpdateManyAndReturnArgs} args - Arguments to update many Ceintures.
     * @example
     * // Update many Ceintures
     * const ceinture = await prisma.ceinture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ceintures and only return the `id`
     * const ceintureWithIdOnly = await prisma.ceinture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CeintureUpdateManyAndReturnArgs>(args: SelectSubset<T, CeintureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ceinture.
     * @param {CeintureUpsertArgs} args - Arguments to update or create a Ceinture.
     * @example
     * // Update or create a Ceinture
     * const ceinture = await prisma.ceinture.upsert({
     *   create: {
     *     // ... data to create a Ceinture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ceinture we want to update
     *   }
     * })
     */
    upsert<T extends CeintureUpsertArgs>(args: SelectSubset<T, CeintureUpsertArgs<ExtArgs>>): Prisma__CeintureClient<$Result.GetResult<Prisma.$CeinturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ceintures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureCountArgs} args - Arguments to filter Ceintures to count.
     * @example
     * // Count the number of Ceintures
     * const count = await prisma.ceinture.count({
     *   where: {
     *     // ... the filter for the Ceintures we want to count
     *   }
     * })
    **/
    count<T extends CeintureCountArgs>(
      args?: Subset<T, CeintureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CeintureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ceinture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CeintureAggregateArgs>(args: Subset<T, CeintureAggregateArgs>): Prisma.PrismaPromise<GetCeintureAggregateType<T>>

    /**
     * Group by Ceinture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeintureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CeintureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CeintureGroupByArgs['orderBy'] }
        : { orderBy?: CeintureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CeintureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCeintureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ceinture model
   */
  readonly fields: CeintureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ceinture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CeintureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mecene<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ceinture model
   */
  interface CeintureFieldRefs {
    readonly id: FieldRef<"Ceinture", 'String'>
    readonly meceneId: FieldRef<"Ceinture", 'String'>
    readonly level: FieldRef<"Ceinture", 'String'>
    readonly awardedAt: FieldRef<"Ceinture", 'DateTime'>
    readonly note: FieldRef<"Ceinture", 'String'>
    readonly createdAt: FieldRef<"Ceinture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ceinture findUnique
   */
  export type CeintureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * Filter, which Ceinture to fetch.
     */
    where: CeintureWhereUniqueInput
  }

  /**
   * Ceinture findUniqueOrThrow
   */
  export type CeintureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * Filter, which Ceinture to fetch.
     */
    where: CeintureWhereUniqueInput
  }

  /**
   * Ceinture findFirst
   */
  export type CeintureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * Filter, which Ceinture to fetch.
     */
    where?: CeintureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceintures to fetch.
     */
    orderBy?: CeintureOrderByWithRelationInput | CeintureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ceintures.
     */
    cursor?: CeintureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceintures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceintures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ceintures.
     */
    distinct?: CeintureScalarFieldEnum | CeintureScalarFieldEnum[]
  }

  /**
   * Ceinture findFirstOrThrow
   */
  export type CeintureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * Filter, which Ceinture to fetch.
     */
    where?: CeintureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceintures to fetch.
     */
    orderBy?: CeintureOrderByWithRelationInput | CeintureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ceintures.
     */
    cursor?: CeintureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceintures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceintures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ceintures.
     */
    distinct?: CeintureScalarFieldEnum | CeintureScalarFieldEnum[]
  }

  /**
   * Ceinture findMany
   */
  export type CeintureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * Filter, which Ceintures to fetch.
     */
    where?: CeintureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceintures to fetch.
     */
    orderBy?: CeintureOrderByWithRelationInput | CeintureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ceintures.
     */
    cursor?: CeintureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceintures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceintures.
     */
    skip?: number
    distinct?: CeintureScalarFieldEnum | CeintureScalarFieldEnum[]
  }

  /**
   * Ceinture create
   */
  export type CeintureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * The data needed to create a Ceinture.
     */
    data: XOR<CeintureCreateInput, CeintureUncheckedCreateInput>
  }

  /**
   * Ceinture createMany
   */
  export type CeintureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ceintures.
     */
    data: CeintureCreateManyInput | CeintureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ceinture createManyAndReturn
   */
  export type CeintureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * The data used to create many Ceintures.
     */
    data: CeintureCreateManyInput | CeintureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ceinture update
   */
  export type CeintureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * The data needed to update a Ceinture.
     */
    data: XOR<CeintureUpdateInput, CeintureUncheckedUpdateInput>
    /**
     * Choose, which Ceinture to update.
     */
    where: CeintureWhereUniqueInput
  }

  /**
   * Ceinture updateMany
   */
  export type CeintureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ceintures.
     */
    data: XOR<CeintureUpdateManyMutationInput, CeintureUncheckedUpdateManyInput>
    /**
     * Filter which Ceintures to update
     */
    where?: CeintureWhereInput
    /**
     * Limit how many Ceintures to update.
     */
    limit?: number
  }

  /**
   * Ceinture updateManyAndReturn
   */
  export type CeintureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * The data used to update Ceintures.
     */
    data: XOR<CeintureUpdateManyMutationInput, CeintureUncheckedUpdateManyInput>
    /**
     * Filter which Ceintures to update
     */
    where?: CeintureWhereInput
    /**
     * Limit how many Ceintures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ceinture upsert
   */
  export type CeintureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * The filter to search for the Ceinture to update in case it exists.
     */
    where: CeintureWhereUniqueInput
    /**
     * In case the Ceinture found by the `where` argument doesn't exist, create a new Ceinture with this data.
     */
    create: XOR<CeintureCreateInput, CeintureUncheckedCreateInput>
    /**
     * In case the Ceinture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CeintureUpdateInput, CeintureUncheckedUpdateInput>
  }

  /**
   * Ceinture delete
   */
  export type CeintureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
    /**
     * Filter which Ceinture to delete.
     */
    where: CeintureWhereUniqueInput
  }

  /**
   * Ceinture deleteMany
   */
  export type CeintureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ceintures to delete
     */
    where?: CeintureWhereInput
    /**
     * Limit how many Ceintures to delete.
     */
    limit?: number
  }

  /**
   * Ceinture without action
   */
  export type CeintureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ceinture
     */
    select?: CeintureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ceinture
     */
    omit?: CeintureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeintureInclude<ExtArgs> | null
  }


  /**
   * Model Poem
   */

  export type AggregatePoem = {
    _count: PoemCountAggregateOutputType | null
    _min: PoemMinAggregateOutputType | null
    _max: PoemMaxAggregateOutputType | null
  }

  export type PoemMinAggregateOutputType = {
    id: string | null
    donId: string | null
    content: string | null
    generated: boolean | null
    validated: boolean | null
    published: boolean | null
    createdAt: Date | null
  }

  export type PoemMaxAggregateOutputType = {
    id: string | null
    donId: string | null
    content: string | null
    generated: boolean | null
    validated: boolean | null
    published: boolean | null
    createdAt: Date | null
  }

  export type PoemCountAggregateOutputType = {
    id: number
    donId: number
    content: number
    generated: number
    validated: number
    published: number
    createdAt: number
    _all: number
  }


  export type PoemMinAggregateInputType = {
    id?: true
    donId?: true
    content?: true
    generated?: true
    validated?: true
    published?: true
    createdAt?: true
  }

  export type PoemMaxAggregateInputType = {
    id?: true
    donId?: true
    content?: true
    generated?: true
    validated?: true
    published?: true
    createdAt?: true
  }

  export type PoemCountAggregateInputType = {
    id?: true
    donId?: true
    content?: true
    generated?: true
    validated?: true
    published?: true
    createdAt?: true
    _all?: true
  }

  export type PoemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poem to aggregate.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Poems
    **/
    _count?: true | PoemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoemMaxAggregateInputType
  }

  export type GetPoemAggregateType<T extends PoemAggregateArgs> = {
        [P in keyof T & keyof AggregatePoem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoem[P]>
      : GetScalarType<T[P], AggregatePoem[P]>
  }




  export type PoemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoemWhereInput
    orderBy?: PoemOrderByWithAggregationInput | PoemOrderByWithAggregationInput[]
    by: PoemScalarFieldEnum[] | PoemScalarFieldEnum
    having?: PoemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoemCountAggregateInputType | true
    _min?: PoemMinAggregateInputType
    _max?: PoemMaxAggregateInputType
  }

  export type PoemGroupByOutputType = {
    id: string
    donId: string
    content: string
    generated: boolean
    validated: boolean
    published: boolean
    createdAt: Date
    _count: PoemCountAggregateOutputType | null
    _min: PoemMinAggregateOutputType | null
    _max: PoemMaxAggregateOutputType | null
  }

  type GetPoemGroupByPayload<T extends PoemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoemGroupByOutputType[P]>
            : GetScalarType<T[P], PoemGroupByOutputType[P]>
        }
      >
    >


  export type PoemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donId?: boolean
    content?: boolean
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: boolean
    don?: boolean | DonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poem"]>

  export type PoemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donId?: boolean
    content?: boolean
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: boolean
    don?: boolean | DonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poem"]>

  export type PoemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donId?: boolean
    content?: boolean
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: boolean
    don?: boolean | DonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poem"]>

  export type PoemSelectScalar = {
    id?: boolean
    donId?: boolean
    content?: boolean
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: boolean
  }

  export type PoemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donId" | "content" | "generated" | "validated" | "published" | "createdAt", ExtArgs["result"]["poem"]>
  export type PoemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    don?: boolean | DonDefaultArgs<ExtArgs>
  }
  export type PoemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    don?: boolean | DonDefaultArgs<ExtArgs>
  }
  export type PoemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    don?: boolean | DonDefaultArgs<ExtArgs>
  }

  export type $PoemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poem"
    objects: {
      don: Prisma.$DonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donId: string
      content: string
      generated: boolean
      validated: boolean
      published: boolean
      createdAt: Date
    }, ExtArgs["result"]["poem"]>
    composites: {}
  }

  type PoemGetPayload<S extends boolean | null | undefined | PoemDefaultArgs> = $Result.GetResult<Prisma.$PoemPayload, S>

  type PoemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoemCountAggregateInputType | true
    }

  export interface PoemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poem'], meta: { name: 'Poem' } }
    /**
     * Find zero or one Poem that matches the filter.
     * @param {PoemFindUniqueArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoemFindUniqueArgs>(args: SelectSubset<T, PoemFindUniqueArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoemFindUniqueOrThrowArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoemFindUniqueOrThrowArgs>(args: SelectSubset<T, PoemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindFirstArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoemFindFirstArgs>(args?: SelectSubset<T, PoemFindFirstArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindFirstOrThrowArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoemFindFirstOrThrowArgs>(args?: SelectSubset<T, PoemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Poems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Poems
     * const poems = await prisma.poem.findMany()
     * 
     * // Get first 10 Poems
     * const poems = await prisma.poem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poemWithIdOnly = await prisma.poem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoemFindManyArgs>(args?: SelectSubset<T, PoemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poem.
     * @param {PoemCreateArgs} args - Arguments to create a Poem.
     * @example
     * // Create one Poem
     * const Poem = await prisma.poem.create({
     *   data: {
     *     // ... data to create a Poem
     *   }
     * })
     * 
     */
    create<T extends PoemCreateArgs>(args: SelectSubset<T, PoemCreateArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Poems.
     * @param {PoemCreateManyArgs} args - Arguments to create many Poems.
     * @example
     * // Create many Poems
     * const poem = await prisma.poem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoemCreateManyArgs>(args?: SelectSubset<T, PoemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Poems and returns the data saved in the database.
     * @param {PoemCreateManyAndReturnArgs} args - Arguments to create many Poems.
     * @example
     * // Create many Poems
     * const poem = await prisma.poem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Poems and only return the `id`
     * const poemWithIdOnly = await prisma.poem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoemCreateManyAndReturnArgs>(args?: SelectSubset<T, PoemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poem.
     * @param {PoemDeleteArgs} args - Arguments to delete one Poem.
     * @example
     * // Delete one Poem
     * const Poem = await prisma.poem.delete({
     *   where: {
     *     // ... filter to delete one Poem
     *   }
     * })
     * 
     */
    delete<T extends PoemDeleteArgs>(args: SelectSubset<T, PoemDeleteArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poem.
     * @param {PoemUpdateArgs} args - Arguments to update one Poem.
     * @example
     * // Update one Poem
     * const poem = await prisma.poem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoemUpdateArgs>(args: SelectSubset<T, PoemUpdateArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Poems.
     * @param {PoemDeleteManyArgs} args - Arguments to filter Poems to delete.
     * @example
     * // Delete a few Poems
     * const { count } = await prisma.poem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoemDeleteManyArgs>(args?: SelectSubset<T, PoemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Poems
     * const poem = await prisma.poem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoemUpdateManyArgs>(args: SelectSubset<T, PoemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poems and returns the data updated in the database.
     * @param {PoemUpdateManyAndReturnArgs} args - Arguments to update many Poems.
     * @example
     * // Update many Poems
     * const poem = await prisma.poem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Poems and only return the `id`
     * const poemWithIdOnly = await prisma.poem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoemUpdateManyAndReturnArgs>(args: SelectSubset<T, PoemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poem.
     * @param {PoemUpsertArgs} args - Arguments to update or create a Poem.
     * @example
     * // Update or create a Poem
     * const poem = await prisma.poem.upsert({
     *   create: {
     *     // ... data to create a Poem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poem we want to update
     *   }
     * })
     */
    upsert<T extends PoemUpsertArgs>(args: SelectSubset<T, PoemUpsertArgs<ExtArgs>>): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Poems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemCountArgs} args - Arguments to filter Poems to count.
     * @example
     * // Count the number of Poems
     * const count = await prisma.poem.count({
     *   where: {
     *     // ... the filter for the Poems we want to count
     *   }
     * })
    **/
    count<T extends PoemCountArgs>(
      args?: Subset<T, PoemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoemAggregateArgs>(args: Subset<T, PoemAggregateArgs>): Prisma.PrismaPromise<GetPoemAggregateType<T>>

    /**
     * Group by Poem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoemGroupByArgs['orderBy'] }
        : { orderBy?: PoemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poem model
   */
  readonly fields: PoemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    don<T extends DonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonDefaultArgs<ExtArgs>>): Prisma__DonClient<$Result.GetResult<Prisma.$DonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Poem model
   */
  interface PoemFieldRefs {
    readonly id: FieldRef<"Poem", 'String'>
    readonly donId: FieldRef<"Poem", 'String'>
    readonly content: FieldRef<"Poem", 'String'>
    readonly generated: FieldRef<"Poem", 'Boolean'>
    readonly validated: FieldRef<"Poem", 'Boolean'>
    readonly published: FieldRef<"Poem", 'Boolean'>
    readonly createdAt: FieldRef<"Poem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Poem findUnique
   */
  export type PoemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where: PoemWhereUniqueInput
  }

  /**
   * Poem findUniqueOrThrow
   */
  export type PoemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where: PoemWhereUniqueInput
  }

  /**
   * Poem findFirst
   */
  export type PoemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poems.
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poems.
     */
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }

  /**
   * Poem findFirstOrThrow
   */
  export type PoemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poems.
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poems.
     */
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }

  /**
   * Poem findMany
   */
  export type PoemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poems to fetch.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Poems.
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }

  /**
   * Poem create
   */
  export type PoemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * The data needed to create a Poem.
     */
    data: XOR<PoemCreateInput, PoemUncheckedCreateInput>
  }

  /**
   * Poem createMany
   */
  export type PoemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Poems.
     */
    data: PoemCreateManyInput | PoemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poem createManyAndReturn
   */
  export type PoemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * The data used to create many Poems.
     */
    data: PoemCreateManyInput | PoemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poem update
   */
  export type PoemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * The data needed to update a Poem.
     */
    data: XOR<PoemUpdateInput, PoemUncheckedUpdateInput>
    /**
     * Choose, which Poem to update.
     */
    where: PoemWhereUniqueInput
  }

  /**
   * Poem updateMany
   */
  export type PoemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Poems.
     */
    data: XOR<PoemUpdateManyMutationInput, PoemUncheckedUpdateManyInput>
    /**
     * Filter which Poems to update
     */
    where?: PoemWhereInput
    /**
     * Limit how many Poems to update.
     */
    limit?: number
  }

  /**
   * Poem updateManyAndReturn
   */
  export type PoemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * The data used to update Poems.
     */
    data: XOR<PoemUpdateManyMutationInput, PoemUncheckedUpdateManyInput>
    /**
     * Filter which Poems to update
     */
    where?: PoemWhereInput
    /**
     * Limit how many Poems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poem upsert
   */
  export type PoemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * The filter to search for the Poem to update in case it exists.
     */
    where: PoemWhereUniqueInput
    /**
     * In case the Poem found by the `where` argument doesn't exist, create a new Poem with this data.
     */
    create: XOR<PoemCreateInput, PoemUncheckedCreateInput>
    /**
     * In case the Poem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoemUpdateInput, PoemUncheckedUpdateInput>
  }

  /**
   * Poem delete
   */
  export type PoemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter which Poem to delete.
     */
    where: PoemWhereUniqueInput
  }

  /**
   * Poem deleteMany
   */
  export type PoemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poems to delete
     */
    where?: PoemWhereInput
    /**
     * Limit how many Poems to delete.
     */
    limit?: number
  }

  /**
   * Poem without action
   */
  export type PoemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poem
     */
    omit?: PoemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    email: 'email',
    name: 'name',
    phone: 'phone',
    city: 'city',
    country: 'country',
    mobileMoneyConfig: 'mobileMoneyConfig',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccessCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    issuedBy: 'issuedBy',
    usedBy: 'usedBy',
    usedAt: 'usedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessCodeScalarFieldEnum = (typeof AccessCodeScalarFieldEnum)[keyof typeof AccessCodeScalarFieldEnum]


  export const CauseScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    summary: 'summary',
    description: 'description',
    type: 'type',
    city: 'city',
    country: 'country',
    reference: 'reference',
    goalAmount: 'goalAmount',
    currency: 'currency',
    status: 'status',
    payoutModel: 'payoutModel',
    approvalThreshold: 'approvalThreshold',
    fundManagerRef: 'fundManagerRef',
    porteurId: 'porteurId',
    accessCode: 'accessCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CauseScalarFieldEnum = (typeof CauseScalarFieldEnum)[keyof typeof CauseScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    causeId: 'causeId',
    label: 'label',
    target: 'target',
    reached: 'reached',
    reachedAt: 'reachedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const DonScalarFieldEnum: {
    id: 'id',
    causeId: 'causeId',
    meceneId: 'meceneId',
    amount: 'amount',
    currency: 'currency',
    commission: 'commission',
    netPorteur: 'netPorteur',
    method: 'method',
    status: 'status',
    displayName: 'displayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonScalarFieldEnum = (typeof DonScalarFieldEnum)[keyof typeof DonScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    donId: 'donId',
    provider: 'provider',
    providerRef: 'providerRef',
    status: 'status',
    checkoutUrl: 'checkoutUrl',
    providerPayload: 'providerPayload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const WebhookEventScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    eventId: 'eventId',
    eventType: 'eventType',
    paymentId: 'paymentId',
    payload: 'payload',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type WebhookEventScalarFieldEnum = (typeof WebhookEventScalarFieldEnum)[keyof typeof WebhookEventScalarFieldEnum]


  export const SignatoryScalarFieldEnum: {
    id: 'id',
    causeId: 'causeId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type SignatoryScalarFieldEnum = (typeof SignatoryScalarFieldEnum)[keyof typeof SignatoryScalarFieldEnum]


  export const PayoutRequestScalarFieldEnum: {
    id: 'id',
    causeId: 'causeId',
    amount: 'amount',
    currency: 'currency',
    provider: 'provider',
    providerRef: 'providerRef',
    payoutModel: 'payoutModel',
    status: 'status',
    approvalThreshold: 'approvalThreshold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayoutRequestScalarFieldEnum = (typeof PayoutRequestScalarFieldEnum)[keyof typeof PayoutRequestScalarFieldEnum]


  export const PayoutApprovalScalarFieldEnum: {
    id: 'id',
    payoutRequestId: 'payoutRequestId',
    signatoryId: 'signatoryId',
    approvedAt: 'approvedAt'
  };

  export type PayoutApprovalScalarFieldEnum = (typeof PayoutApprovalScalarFieldEnum)[keyof typeof PayoutApprovalScalarFieldEnum]


  export const CeintureScalarFieldEnum: {
    id: 'id',
    meceneId: 'meceneId',
    level: 'level',
    awardedAt: 'awardedAt',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type CeintureScalarFieldEnum = (typeof CeintureScalarFieldEnum)[keyof typeof CeintureScalarFieldEnum]


  export const PoemScalarFieldEnum: {
    id: 'id',
    donId: 'donId',
    content: 'content',
    generated: 'generated',
    validated: 'validated',
    published: 'published',
    createdAt: 'createdAt'
  };

  export type PoemScalarFieldEnum = (typeof PoemScalarFieldEnum)[keyof typeof PoemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    mobileMoneyConfig?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    causesSubmitted?: CauseListRelationFilter
    donsMade?: DonListRelationFilter
    ceintures?: CeintureListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    mobileMoneyConfig?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    causesSubmitted?: CauseOrderByRelationAggregateInput
    donsMade?: DonOrderByRelationAggregateInput
    ceintures?: CeintureOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    mobileMoneyConfig?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    causesSubmitted?: CauseListRelationFilter
    donsMade?: DonListRelationFilter
    ceintures?: CeintureListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    mobileMoneyConfig?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobileMoneyConfig?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccessCodeWhereInput = {
    AND?: AccessCodeWhereInput | AccessCodeWhereInput[]
    OR?: AccessCodeWhereInput[]
    NOT?: AccessCodeWhereInput | AccessCodeWhereInput[]
    id?: StringFilter<"AccessCode"> | string
    code?: StringFilter<"AccessCode"> | string
    type?: StringFilter<"AccessCode"> | string
    issuedBy?: StringNullableFilter<"AccessCode"> | string | null
    usedBy?: StringNullableFilter<"AccessCode"> | string | null
    usedAt?: DateTimeNullableFilter<"AccessCode"> | Date | string | null
    status?: StringFilter<"AccessCode"> | string
    createdAt?: DateTimeFilter<"AccessCode"> | Date | string
    updatedAt?: DateTimeFilter<"AccessCode"> | Date | string
    cause?: XOR<CauseNullableScalarRelationFilter, CauseWhereInput> | null
  }

  export type AccessCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    issuedBy?: SortOrderInput | SortOrder
    usedBy?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cause?: CauseOrderByWithRelationInput
  }

  export type AccessCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AccessCodeWhereInput | AccessCodeWhereInput[]
    OR?: AccessCodeWhereInput[]
    NOT?: AccessCodeWhereInput | AccessCodeWhereInput[]
    type?: StringFilter<"AccessCode"> | string
    issuedBy?: StringNullableFilter<"AccessCode"> | string | null
    usedBy?: StringNullableFilter<"AccessCode"> | string | null
    usedAt?: DateTimeNullableFilter<"AccessCode"> | Date | string | null
    status?: StringFilter<"AccessCode"> | string
    createdAt?: DateTimeFilter<"AccessCode"> | Date | string
    updatedAt?: DateTimeFilter<"AccessCode"> | Date | string
    cause?: XOR<CauseNullableScalarRelationFilter, CauseWhereInput> | null
  }, "id" | "code">

  export type AccessCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    issuedBy?: SortOrderInput | SortOrder
    usedBy?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessCodeCountOrderByAggregateInput
    _max?: AccessCodeMaxOrderByAggregateInput
    _min?: AccessCodeMinOrderByAggregateInput
  }

  export type AccessCodeScalarWhereWithAggregatesInput = {
    AND?: AccessCodeScalarWhereWithAggregatesInput | AccessCodeScalarWhereWithAggregatesInput[]
    OR?: AccessCodeScalarWhereWithAggregatesInput[]
    NOT?: AccessCodeScalarWhereWithAggregatesInput | AccessCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessCode"> | string
    code?: StringWithAggregatesFilter<"AccessCode"> | string
    type?: StringWithAggregatesFilter<"AccessCode"> | string
    issuedBy?: StringNullableWithAggregatesFilter<"AccessCode"> | string | null
    usedBy?: StringNullableWithAggregatesFilter<"AccessCode"> | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"AccessCode"> | Date | string | null
    status?: StringWithAggregatesFilter<"AccessCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccessCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccessCode"> | Date | string
  }

  export type CauseWhereInput = {
    AND?: CauseWhereInput | CauseWhereInput[]
    OR?: CauseWhereInput[]
    NOT?: CauseWhereInput | CauseWhereInput[]
    id?: StringFilter<"Cause"> | string
    slug?: StringFilter<"Cause"> | string
    title?: StringFilter<"Cause"> | string
    summary?: StringNullableFilter<"Cause"> | string | null
    description?: StringFilter<"Cause"> | string
    type?: StringNullableFilter<"Cause"> | string | null
    city?: StringNullableFilter<"Cause"> | string | null
    country?: StringNullableFilter<"Cause"> | string | null
    reference?: StringNullableFilter<"Cause"> | string | null
    goalAmount?: FloatNullableFilter<"Cause"> | number | null
    currency?: StringFilter<"Cause"> | string
    status?: StringFilter<"Cause"> | string
    payoutModel?: StringFilter<"Cause"> | string
    approvalThreshold?: IntFilter<"Cause"> | number
    fundManagerRef?: StringNullableFilter<"Cause"> | string | null
    porteurId?: StringFilter<"Cause"> | string
    accessCode?: StringNullableFilter<"Cause"> | string | null
    createdAt?: DateTimeFilter<"Cause"> | Date | string
    updatedAt?: DateTimeFilter<"Cause"> | Date | string
    porteur?: XOR<UserScalarRelationFilter, UserWhereInput>
    accessCodeRel?: XOR<AccessCodeNullableScalarRelationFilter, AccessCodeWhereInput> | null
    milestones?: MilestoneListRelationFilter
    dons?: DonListRelationFilter
    signatories?: SignatoryListRelationFilter
    payoutRequests?: PayoutRequestListRelationFilter
  }

  export type CauseOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrder
    type?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    goalAmount?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    payoutModel?: SortOrder
    approvalThreshold?: SortOrder
    fundManagerRef?: SortOrderInput | SortOrder
    porteurId?: SortOrder
    accessCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    porteur?: UserOrderByWithRelationInput
    accessCodeRel?: AccessCodeOrderByWithRelationInput
    milestones?: MilestoneOrderByRelationAggregateInput
    dons?: DonOrderByRelationAggregateInput
    signatories?: SignatoryOrderByRelationAggregateInput
    payoutRequests?: PayoutRequestOrderByRelationAggregateInput
  }

  export type CauseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    accessCode?: string
    AND?: CauseWhereInput | CauseWhereInput[]
    OR?: CauseWhereInput[]
    NOT?: CauseWhereInput | CauseWhereInput[]
    title?: StringFilter<"Cause"> | string
    summary?: StringNullableFilter<"Cause"> | string | null
    description?: StringFilter<"Cause"> | string
    type?: StringNullableFilter<"Cause"> | string | null
    city?: StringNullableFilter<"Cause"> | string | null
    country?: StringNullableFilter<"Cause"> | string | null
    reference?: StringNullableFilter<"Cause"> | string | null
    goalAmount?: FloatNullableFilter<"Cause"> | number | null
    currency?: StringFilter<"Cause"> | string
    status?: StringFilter<"Cause"> | string
    payoutModel?: StringFilter<"Cause"> | string
    approvalThreshold?: IntFilter<"Cause"> | number
    fundManagerRef?: StringNullableFilter<"Cause"> | string | null
    porteurId?: StringFilter<"Cause"> | string
    createdAt?: DateTimeFilter<"Cause"> | Date | string
    updatedAt?: DateTimeFilter<"Cause"> | Date | string
    porteur?: XOR<UserScalarRelationFilter, UserWhereInput>
    accessCodeRel?: XOR<AccessCodeNullableScalarRelationFilter, AccessCodeWhereInput> | null
    milestones?: MilestoneListRelationFilter
    dons?: DonListRelationFilter
    signatories?: SignatoryListRelationFilter
    payoutRequests?: PayoutRequestListRelationFilter
  }, "id" | "slug" | "accessCode">

  export type CauseOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrder
    type?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    goalAmount?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    payoutModel?: SortOrder
    approvalThreshold?: SortOrder
    fundManagerRef?: SortOrderInput | SortOrder
    porteurId?: SortOrder
    accessCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CauseCountOrderByAggregateInput
    _avg?: CauseAvgOrderByAggregateInput
    _max?: CauseMaxOrderByAggregateInput
    _min?: CauseMinOrderByAggregateInput
    _sum?: CauseSumOrderByAggregateInput
  }

  export type CauseScalarWhereWithAggregatesInput = {
    AND?: CauseScalarWhereWithAggregatesInput | CauseScalarWhereWithAggregatesInput[]
    OR?: CauseScalarWhereWithAggregatesInput[]
    NOT?: CauseScalarWhereWithAggregatesInput | CauseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cause"> | string
    slug?: StringWithAggregatesFilter<"Cause"> | string
    title?: StringWithAggregatesFilter<"Cause"> | string
    summary?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    description?: StringWithAggregatesFilter<"Cause"> | string
    type?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    city?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    country?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    goalAmount?: FloatNullableWithAggregatesFilter<"Cause"> | number | null
    currency?: StringWithAggregatesFilter<"Cause"> | string
    status?: StringWithAggregatesFilter<"Cause"> | string
    payoutModel?: StringWithAggregatesFilter<"Cause"> | string
    approvalThreshold?: IntWithAggregatesFilter<"Cause"> | number
    fundManagerRef?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    porteurId?: StringWithAggregatesFilter<"Cause"> | string
    accessCode?: StringNullableWithAggregatesFilter<"Cause"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cause"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cause"> | Date | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    causeId?: StringFilter<"Milestone"> | string
    label?: StringFilter<"Milestone"> | string
    target?: FloatFilter<"Milestone"> | number
    reached?: BoolFilter<"Milestone"> | boolean
    reachedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    causeId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    reached?: SortOrder
    reachedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cause?: CauseOrderByWithRelationInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    causeId?: StringFilter<"Milestone"> | string
    label?: StringFilter<"Milestone"> | string
    target?: FloatFilter<"Milestone"> | number
    reached?: BoolFilter<"Milestone"> | boolean
    reachedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    causeId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    reached?: SortOrder
    reachedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    causeId?: StringWithAggregatesFilter<"Milestone"> | string
    label?: StringWithAggregatesFilter<"Milestone"> | string
    target?: FloatWithAggregatesFilter<"Milestone"> | number
    reached?: BoolWithAggregatesFilter<"Milestone"> | boolean
    reachedAt?: DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
  }

  export type DonWhereInput = {
    AND?: DonWhereInput | DonWhereInput[]
    OR?: DonWhereInput[]
    NOT?: DonWhereInput | DonWhereInput[]
    id?: StringFilter<"Don"> | string
    causeId?: StringFilter<"Don"> | string
    meceneId?: StringNullableFilter<"Don"> | string | null
    amount?: FloatFilter<"Don"> | number
    currency?: StringFilter<"Don"> | string
    commission?: FloatFilter<"Don"> | number
    netPorteur?: FloatFilter<"Don"> | number
    method?: StringFilter<"Don"> | string
    status?: StringFilter<"Don"> | string
    displayName?: StringNullableFilter<"Don"> | string | null
    createdAt?: DateTimeFilter<"Don"> | Date | string
    updatedAt?: DateTimeFilter<"Don"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
    mecene?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    poem?: XOR<PoemNullableScalarRelationFilter, PoemWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type DonOrderByWithRelationInput = {
    id?: SortOrder
    causeId?: SortOrder
    meceneId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
    method?: SortOrder
    status?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cause?: CauseOrderByWithRelationInput
    mecene?: UserOrderByWithRelationInput
    poem?: PoemOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type DonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonWhereInput | DonWhereInput[]
    OR?: DonWhereInput[]
    NOT?: DonWhereInput | DonWhereInput[]
    causeId?: StringFilter<"Don"> | string
    meceneId?: StringNullableFilter<"Don"> | string | null
    amount?: FloatFilter<"Don"> | number
    currency?: StringFilter<"Don"> | string
    commission?: FloatFilter<"Don"> | number
    netPorteur?: FloatFilter<"Don"> | number
    method?: StringFilter<"Don"> | string
    status?: StringFilter<"Don"> | string
    displayName?: StringNullableFilter<"Don"> | string | null
    createdAt?: DateTimeFilter<"Don"> | Date | string
    updatedAt?: DateTimeFilter<"Don"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
    mecene?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    poem?: XOR<PoemNullableScalarRelationFilter, PoemWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type DonOrderByWithAggregationInput = {
    id?: SortOrder
    causeId?: SortOrder
    meceneId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
    method?: SortOrder
    status?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonCountOrderByAggregateInput
    _avg?: DonAvgOrderByAggregateInput
    _max?: DonMaxOrderByAggregateInput
    _min?: DonMinOrderByAggregateInput
    _sum?: DonSumOrderByAggregateInput
  }

  export type DonScalarWhereWithAggregatesInput = {
    AND?: DonScalarWhereWithAggregatesInput | DonScalarWhereWithAggregatesInput[]
    OR?: DonScalarWhereWithAggregatesInput[]
    NOT?: DonScalarWhereWithAggregatesInput | DonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Don"> | string
    causeId?: StringWithAggregatesFilter<"Don"> | string
    meceneId?: StringNullableWithAggregatesFilter<"Don"> | string | null
    amount?: FloatWithAggregatesFilter<"Don"> | number
    currency?: StringWithAggregatesFilter<"Don"> | string
    commission?: FloatWithAggregatesFilter<"Don"> | number
    netPorteur?: FloatWithAggregatesFilter<"Don"> | number
    method?: StringWithAggregatesFilter<"Don"> | string
    status?: StringWithAggregatesFilter<"Don"> | string
    displayName?: StringNullableWithAggregatesFilter<"Don"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Don"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Don"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    donId?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    providerRef?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    checkoutUrl?: StringNullableFilter<"Payment"> | string | null
    providerPayload?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    don?: XOR<DonScalarRelationFilter, DonWhereInput>
    webhookEvents?: WebhookEventListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    donId?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    status?: SortOrder
    checkoutUrl?: SortOrderInput | SortOrder
    providerPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    don?: DonOrderByWithRelationInput
    webhookEvents?: WebhookEventOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    donId?: string
    providerRef?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    provider?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    checkoutUrl?: StringNullableFilter<"Payment"> | string | null
    providerPayload?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    don?: XOR<DonScalarRelationFilter, DonWhereInput>
    webhookEvents?: WebhookEventListRelationFilter
  }, "id" | "donId" | "providerRef">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    donId?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    status?: SortOrder
    checkoutUrl?: SortOrderInput | SortOrder
    providerPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    donId?: StringWithAggregatesFilter<"Payment"> | string
    provider?: StringWithAggregatesFilter<"Payment"> | string
    providerRef?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: StringWithAggregatesFilter<"Payment"> | string
    checkoutUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    providerPayload?: JsonNullableWithAggregatesFilter<"Payment">
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type WebhookEventWhereInput = {
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    provider?: StringFilter<"WebhookEvent"> | string
    eventId?: StringFilter<"WebhookEvent"> | string
    eventType?: StringNullableFilter<"WebhookEvent"> | string | null
    paymentId?: StringNullableFilter<"WebhookEvent"> | string | null
    payload?: JsonFilter<"WebhookEvent">
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type WebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    payload?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type WebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_eventId?: WebhookEventProviderEventIdCompoundUniqueInput
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    provider?: StringFilter<"WebhookEvent"> | string
    eventId?: StringFilter<"WebhookEvent"> | string
    eventType?: StringNullableFilter<"WebhookEvent"> | string | null
    paymentId?: StringNullableFilter<"WebhookEvent"> | string | null
    payload?: JsonFilter<"WebhookEvent">
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "provider_eventId">

  export type WebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    payload?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookEventCountOrderByAggregateInput
    _max?: WebhookEventMaxOrderByAggregateInput
    _min?: WebhookEventMinOrderByAggregateInput
  }

  export type WebhookEventScalarWhereWithAggregatesInput = {
    AND?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    OR?: WebhookEventScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvent"> | string
    provider?: StringWithAggregatesFilter<"WebhookEvent"> | string
    eventId?: StringWithAggregatesFilter<"WebhookEvent"> | string
    eventType?: StringNullableWithAggregatesFilter<"WebhookEvent"> | string | null
    paymentId?: StringNullableWithAggregatesFilter<"WebhookEvent"> | string | null
    payload?: JsonWithAggregatesFilter<"WebhookEvent">
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookEvent"> | Date | string
  }

  export type SignatoryWhereInput = {
    AND?: SignatoryWhereInput | SignatoryWhereInput[]
    OR?: SignatoryWhereInput[]
    NOT?: SignatoryWhereInput | SignatoryWhereInput[]
    id?: StringFilter<"Signatory"> | string
    causeId?: StringFilter<"Signatory"> | string
    userId?: StringFilter<"Signatory"> | string
    role?: StringFilter<"Signatory"> | string
    createdAt?: DateTimeFilter<"Signatory"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
    approvals?: PayoutApprovalListRelationFilter
  }

  export type SignatoryOrderByWithRelationInput = {
    id?: SortOrder
    causeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    cause?: CauseOrderByWithRelationInput
    approvals?: PayoutApprovalOrderByRelationAggregateInput
  }

  export type SignatoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    causeId_userId?: SignatoryCauseIdUserIdCompoundUniqueInput
    AND?: SignatoryWhereInput | SignatoryWhereInput[]
    OR?: SignatoryWhereInput[]
    NOT?: SignatoryWhereInput | SignatoryWhereInput[]
    causeId?: StringFilter<"Signatory"> | string
    userId?: StringFilter<"Signatory"> | string
    role?: StringFilter<"Signatory"> | string
    createdAt?: DateTimeFilter<"Signatory"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
    approvals?: PayoutApprovalListRelationFilter
  }, "id" | "causeId_userId">

  export type SignatoryOrderByWithAggregationInput = {
    id?: SortOrder
    causeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: SignatoryCountOrderByAggregateInput
    _max?: SignatoryMaxOrderByAggregateInput
    _min?: SignatoryMinOrderByAggregateInput
  }

  export type SignatoryScalarWhereWithAggregatesInput = {
    AND?: SignatoryScalarWhereWithAggregatesInput | SignatoryScalarWhereWithAggregatesInput[]
    OR?: SignatoryScalarWhereWithAggregatesInput[]
    NOT?: SignatoryScalarWhereWithAggregatesInput | SignatoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Signatory"> | string
    causeId?: StringWithAggregatesFilter<"Signatory"> | string
    userId?: StringWithAggregatesFilter<"Signatory"> | string
    role?: StringWithAggregatesFilter<"Signatory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Signatory"> | Date | string
  }

  export type PayoutRequestWhereInput = {
    AND?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    OR?: PayoutRequestWhereInput[]
    NOT?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    id?: StringFilter<"PayoutRequest"> | string
    causeId?: StringFilter<"PayoutRequest"> | string
    amount?: FloatFilter<"PayoutRequest"> | number
    currency?: StringFilter<"PayoutRequest"> | string
    provider?: StringFilter<"PayoutRequest"> | string
    providerRef?: StringNullableFilter<"PayoutRequest"> | string | null
    payoutModel?: StringFilter<"PayoutRequest"> | string
    status?: StringFilter<"PayoutRequest"> | string
    approvalThreshold?: IntFilter<"PayoutRequest"> | number
    createdAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
    approvals?: PayoutApprovalListRelationFilter
  }

  export type PayoutRequestOrderByWithRelationInput = {
    id?: SortOrder
    causeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    payoutModel?: SortOrder
    status?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cause?: CauseOrderByWithRelationInput
    approvals?: PayoutApprovalOrderByRelationAggregateInput
  }

  export type PayoutRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerRef?: string
    AND?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    OR?: PayoutRequestWhereInput[]
    NOT?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    causeId?: StringFilter<"PayoutRequest"> | string
    amount?: FloatFilter<"PayoutRequest"> | number
    currency?: StringFilter<"PayoutRequest"> | string
    provider?: StringFilter<"PayoutRequest"> | string
    payoutModel?: StringFilter<"PayoutRequest"> | string
    status?: StringFilter<"PayoutRequest"> | string
    approvalThreshold?: IntFilter<"PayoutRequest"> | number
    createdAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    cause?: XOR<CauseScalarRelationFilter, CauseWhereInput>
    approvals?: PayoutApprovalListRelationFilter
  }, "id" | "providerRef">

  export type PayoutRequestOrderByWithAggregationInput = {
    id?: SortOrder
    causeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    payoutModel?: SortOrder
    status?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayoutRequestCountOrderByAggregateInput
    _avg?: PayoutRequestAvgOrderByAggregateInput
    _max?: PayoutRequestMaxOrderByAggregateInput
    _min?: PayoutRequestMinOrderByAggregateInput
    _sum?: PayoutRequestSumOrderByAggregateInput
  }

  export type PayoutRequestScalarWhereWithAggregatesInput = {
    AND?: PayoutRequestScalarWhereWithAggregatesInput | PayoutRequestScalarWhereWithAggregatesInput[]
    OR?: PayoutRequestScalarWhereWithAggregatesInput[]
    NOT?: PayoutRequestScalarWhereWithAggregatesInput | PayoutRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayoutRequest"> | string
    causeId?: StringWithAggregatesFilter<"PayoutRequest"> | string
    amount?: FloatWithAggregatesFilter<"PayoutRequest"> | number
    currency?: StringWithAggregatesFilter<"PayoutRequest"> | string
    provider?: StringWithAggregatesFilter<"PayoutRequest"> | string
    providerRef?: StringNullableWithAggregatesFilter<"PayoutRequest"> | string | null
    payoutModel?: StringWithAggregatesFilter<"PayoutRequest"> | string
    status?: StringWithAggregatesFilter<"PayoutRequest"> | string
    approvalThreshold?: IntWithAggregatesFilter<"PayoutRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayoutRequest"> | Date | string
  }

  export type PayoutApprovalWhereInput = {
    AND?: PayoutApprovalWhereInput | PayoutApprovalWhereInput[]
    OR?: PayoutApprovalWhereInput[]
    NOT?: PayoutApprovalWhereInput | PayoutApprovalWhereInput[]
    id?: StringFilter<"PayoutApproval"> | string
    payoutRequestId?: StringFilter<"PayoutApproval"> | string
    signatoryId?: StringFilter<"PayoutApproval"> | string
    approvedAt?: DateTimeFilter<"PayoutApproval"> | Date | string
    payoutRequest?: XOR<PayoutRequestScalarRelationFilter, PayoutRequestWhereInput>
    signatory?: XOR<SignatoryScalarRelationFilter, SignatoryWhereInput>
  }

  export type PayoutApprovalOrderByWithRelationInput = {
    id?: SortOrder
    payoutRequestId?: SortOrder
    signatoryId?: SortOrder
    approvedAt?: SortOrder
    payoutRequest?: PayoutRequestOrderByWithRelationInput
    signatory?: SignatoryOrderByWithRelationInput
  }

  export type PayoutApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    payoutRequestId_signatoryId?: PayoutApprovalPayoutRequestIdSignatoryIdCompoundUniqueInput
    AND?: PayoutApprovalWhereInput | PayoutApprovalWhereInput[]
    OR?: PayoutApprovalWhereInput[]
    NOT?: PayoutApprovalWhereInput | PayoutApprovalWhereInput[]
    payoutRequestId?: StringFilter<"PayoutApproval"> | string
    signatoryId?: StringFilter<"PayoutApproval"> | string
    approvedAt?: DateTimeFilter<"PayoutApproval"> | Date | string
    payoutRequest?: XOR<PayoutRequestScalarRelationFilter, PayoutRequestWhereInput>
    signatory?: XOR<SignatoryScalarRelationFilter, SignatoryWhereInput>
  }, "id" | "payoutRequestId_signatoryId">

  export type PayoutApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    payoutRequestId?: SortOrder
    signatoryId?: SortOrder
    approvedAt?: SortOrder
    _count?: PayoutApprovalCountOrderByAggregateInput
    _max?: PayoutApprovalMaxOrderByAggregateInput
    _min?: PayoutApprovalMinOrderByAggregateInput
  }

  export type PayoutApprovalScalarWhereWithAggregatesInput = {
    AND?: PayoutApprovalScalarWhereWithAggregatesInput | PayoutApprovalScalarWhereWithAggregatesInput[]
    OR?: PayoutApprovalScalarWhereWithAggregatesInput[]
    NOT?: PayoutApprovalScalarWhereWithAggregatesInput | PayoutApprovalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayoutApproval"> | string
    payoutRequestId?: StringWithAggregatesFilter<"PayoutApproval"> | string
    signatoryId?: StringWithAggregatesFilter<"PayoutApproval"> | string
    approvedAt?: DateTimeWithAggregatesFilter<"PayoutApproval"> | Date | string
  }

  export type CeintureWhereInput = {
    AND?: CeintureWhereInput | CeintureWhereInput[]
    OR?: CeintureWhereInput[]
    NOT?: CeintureWhereInput | CeintureWhereInput[]
    id?: StringFilter<"Ceinture"> | string
    meceneId?: StringFilter<"Ceinture"> | string
    level?: StringFilter<"Ceinture"> | string
    awardedAt?: DateTimeFilter<"Ceinture"> | Date | string
    note?: StringNullableFilter<"Ceinture"> | string | null
    createdAt?: DateTimeFilter<"Ceinture"> | Date | string
    mecene?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CeintureOrderByWithRelationInput = {
    id?: SortOrder
    meceneId?: SortOrder
    level?: SortOrder
    awardedAt?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mecene?: UserOrderByWithRelationInput
  }

  export type CeintureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CeintureWhereInput | CeintureWhereInput[]
    OR?: CeintureWhereInput[]
    NOT?: CeintureWhereInput | CeintureWhereInput[]
    meceneId?: StringFilter<"Ceinture"> | string
    level?: StringFilter<"Ceinture"> | string
    awardedAt?: DateTimeFilter<"Ceinture"> | Date | string
    note?: StringNullableFilter<"Ceinture"> | string | null
    createdAt?: DateTimeFilter<"Ceinture"> | Date | string
    mecene?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CeintureOrderByWithAggregationInput = {
    id?: SortOrder
    meceneId?: SortOrder
    level?: SortOrder
    awardedAt?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CeintureCountOrderByAggregateInput
    _max?: CeintureMaxOrderByAggregateInput
    _min?: CeintureMinOrderByAggregateInput
  }

  export type CeintureScalarWhereWithAggregatesInput = {
    AND?: CeintureScalarWhereWithAggregatesInput | CeintureScalarWhereWithAggregatesInput[]
    OR?: CeintureScalarWhereWithAggregatesInput[]
    NOT?: CeintureScalarWhereWithAggregatesInput | CeintureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ceinture"> | string
    meceneId?: StringWithAggregatesFilter<"Ceinture"> | string
    level?: StringWithAggregatesFilter<"Ceinture"> | string
    awardedAt?: DateTimeWithAggregatesFilter<"Ceinture"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Ceinture"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ceinture"> | Date | string
  }

  export type PoemWhereInput = {
    AND?: PoemWhereInput | PoemWhereInput[]
    OR?: PoemWhereInput[]
    NOT?: PoemWhereInput | PoemWhereInput[]
    id?: StringFilter<"Poem"> | string
    donId?: StringFilter<"Poem"> | string
    content?: StringFilter<"Poem"> | string
    generated?: BoolFilter<"Poem"> | boolean
    validated?: BoolFilter<"Poem"> | boolean
    published?: BoolFilter<"Poem"> | boolean
    createdAt?: DateTimeFilter<"Poem"> | Date | string
    don?: XOR<DonScalarRelationFilter, DonWhereInput>
  }

  export type PoemOrderByWithRelationInput = {
    id?: SortOrder
    donId?: SortOrder
    content?: SortOrder
    generated?: SortOrder
    validated?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    don?: DonOrderByWithRelationInput
  }

  export type PoemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    donId?: string
    AND?: PoemWhereInput | PoemWhereInput[]
    OR?: PoemWhereInput[]
    NOT?: PoemWhereInput | PoemWhereInput[]
    content?: StringFilter<"Poem"> | string
    generated?: BoolFilter<"Poem"> | boolean
    validated?: BoolFilter<"Poem"> | boolean
    published?: BoolFilter<"Poem"> | boolean
    createdAt?: DateTimeFilter<"Poem"> | Date | string
    don?: XOR<DonScalarRelationFilter, DonWhereInput>
  }, "id" | "donId">

  export type PoemOrderByWithAggregationInput = {
    id?: SortOrder
    donId?: SortOrder
    content?: SortOrder
    generated?: SortOrder
    validated?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    _count?: PoemCountOrderByAggregateInput
    _max?: PoemMaxOrderByAggregateInput
    _min?: PoemMinOrderByAggregateInput
  }

  export type PoemScalarWhereWithAggregatesInput = {
    AND?: PoemScalarWhereWithAggregatesInput | PoemScalarWhereWithAggregatesInput[]
    OR?: PoemScalarWhereWithAggregatesInput[]
    NOT?: PoemScalarWhereWithAggregatesInput | PoemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Poem"> | string
    donId?: StringWithAggregatesFilter<"Poem"> | string
    content?: StringWithAggregatesFilter<"Poem"> | string
    generated?: BoolWithAggregatesFilter<"Poem"> | boolean
    validated?: BoolWithAggregatesFilter<"Poem"> | boolean
    published?: BoolWithAggregatesFilter<"Poem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Poem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    causesSubmitted?: CauseCreateNestedManyWithoutPorteurInput
    donsMade?: DonCreateNestedManyWithoutMeceneInput
    ceintures?: CeintureCreateNestedManyWithoutMeceneInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    causesSubmitted?: CauseUncheckedCreateNestedManyWithoutPorteurInput
    donsMade?: DonUncheckedCreateNestedManyWithoutMeceneInput
    ceintures?: CeintureUncheckedCreateNestedManyWithoutMeceneInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    causesSubmitted?: CauseUpdateManyWithoutPorteurNestedInput
    donsMade?: DonUpdateManyWithoutMeceneNestedInput
    ceintures?: CeintureUpdateManyWithoutMeceneNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    causesSubmitted?: CauseUncheckedUpdateManyWithoutPorteurNestedInput
    donsMade?: DonUncheckedUpdateManyWithoutMeceneNestedInput
    ceintures?: CeintureUncheckedUpdateManyWithoutMeceneNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessCodeCreateInput = {
    id?: string
    code?: string
    type?: string
    issuedBy?: string | null
    usedBy?: string | null
    usedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cause?: CauseCreateNestedOneWithoutAccessCodeRelInput
  }

  export type AccessCodeUncheckedCreateInput = {
    id?: string
    code?: string
    type?: string
    issuedBy?: string | null
    usedBy?: string | null
    usedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cause?: CauseUncheckedCreateNestedOneWithoutAccessCodeRelInput
  }

  export type AccessCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    issuedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneWithoutAccessCodeRelNestedInput
  }

  export type AccessCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    issuedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUncheckedUpdateOneWithoutAccessCodeRelNestedInput
  }

  export type AccessCodeCreateManyInput = {
    id?: string
    code?: string
    type?: string
    issuedBy?: string | null
    usedBy?: string | null
    usedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    issuedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    issuedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CauseCreateInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    porteur: UserCreateNestedOneWithoutCausesSubmittedInput
    accessCodeRel?: AccessCodeCreateNestedOneWithoutCauseInput
    milestones?: MilestoneCreateNestedManyWithoutCauseInput
    dons?: DonCreateNestedManyWithoutCauseInput
    signatories?: SignatoryCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCauseInput
    dons?: DonUncheckedCreateNestedManyWithoutCauseInput
    signatories?: SignatoryUncheckedCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    porteur?: UserUpdateOneRequiredWithoutCausesSubmittedNestedInput
    accessCodeRel?: AccessCodeUpdateOneWithoutCauseNestedInput
    milestones?: MilestoneUpdateManyWithoutCauseNestedInput
    dons?: DonUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutCauseNestedInput
    dons?: DonUncheckedUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUncheckedUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type CauseCreateManyInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CauseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CauseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateInput = {
    id?: string
    label: string
    target: number
    reached?: boolean
    reachedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    causeId: string
    label: string
    target: number
    reached?: boolean
    reachedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateManyInput = {
    id?: string
    causeId: string
    label: string
    target: number
    reached?: boolean
    reachedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonCreateInput = {
    id?: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutDonsInput
    mecene?: UserCreateNestedOneWithoutDonsMadeInput
    poem?: PoemCreateNestedOneWithoutDonInput
    payment?: PaymentCreateNestedOneWithoutDonInput
  }

  export type DonUncheckedCreateInput = {
    id?: string
    causeId: string
    meceneId?: string | null
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poem?: PoemUncheckedCreateNestedOneWithoutDonInput
    payment?: PaymentUncheckedCreateNestedOneWithoutDonInput
  }

  export type DonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutDonsNestedInput
    mecene?: UserUpdateOneWithoutDonsMadeNestedInput
    poem?: PoemUpdateOneWithoutDonNestedInput
    payment?: PaymentUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    meceneId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poem?: PoemUncheckedUpdateOneWithoutDonNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutDonNestedInput
  }

  export type DonCreateManyInput = {
    id?: string
    causeId: string
    meceneId?: string | null
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    meceneId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    don: DonCreateNestedOneWithoutPaymentInput
    webhookEvents?: WebhookEventCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    donId: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    webhookEvents?: WebhookEventUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    don?: DonUpdateOneRequiredWithoutPaymentNestedInput
    webhookEvents?: WebhookEventUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhookEvents?: WebhookEventUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    donId: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateInput = {
    id?: string
    provider: string
    eventId: string
    eventType?: string | null
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
    payment?: PaymentCreateNestedOneWithoutWebhookEventsInput
  }

  export type WebhookEventUncheckedCreateInput = {
    id?: string
    provider: string
    eventId: string
    eventType?: string | null
    paymentId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneWithoutWebhookEventsNestedInput
  }

  export type WebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateManyInput = {
    id?: string
    provider: string
    eventId: string
    eventType?: string | null
    paymentId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatoryCreateInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    cause: CauseCreateNestedOneWithoutSignatoriesInput
    approvals?: PayoutApprovalCreateNestedManyWithoutSignatoryInput
  }

  export type SignatoryUncheckedCreateInput = {
    id?: string
    causeId: string
    userId: string
    role: string
    createdAt?: Date | string
    approvals?: PayoutApprovalUncheckedCreateNestedManyWithoutSignatoryInput
  }

  export type SignatoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutSignatoriesNestedInput
    approvals?: PayoutApprovalUpdateManyWithoutSignatoryNestedInput
  }

  export type SignatoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: PayoutApprovalUncheckedUpdateManyWithoutSignatoryNestedInput
  }

  export type SignatoryCreateManyInput = {
    id?: string
    causeId: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type SignatoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestCreateInput = {
    id?: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutPayoutRequestsInput
    approvals?: PayoutApprovalCreateNestedManyWithoutPayoutRequestInput
  }

  export type PayoutRequestUncheckedCreateInput = {
    id?: string
    causeId: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: PayoutApprovalUncheckedCreateNestedManyWithoutPayoutRequestInput
  }

  export type PayoutRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutPayoutRequestsNestedInput
    approvals?: PayoutApprovalUpdateManyWithoutPayoutRequestNestedInput
  }

  export type PayoutRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: PayoutApprovalUncheckedUpdateManyWithoutPayoutRequestNestedInput
  }

  export type PayoutRequestCreateManyInput = {
    id?: string
    causeId: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalCreateInput = {
    id?: string
    approvedAt?: Date | string
    payoutRequest: PayoutRequestCreateNestedOneWithoutApprovalsInput
    signatory: SignatoryCreateNestedOneWithoutApprovalsInput
  }

  export type PayoutApprovalUncheckedCreateInput = {
    id?: string
    payoutRequestId: string
    signatoryId: string
    approvedAt?: Date | string
  }

  export type PayoutApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutRequest?: PayoutRequestUpdateOneRequiredWithoutApprovalsNestedInput
    signatory?: SignatoryUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type PayoutApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payoutRequestId?: StringFieldUpdateOperationsInput | string
    signatoryId?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalCreateManyInput = {
    id?: string
    payoutRequestId: string
    signatoryId: string
    approvedAt?: Date | string
  }

  export type PayoutApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payoutRequestId?: StringFieldUpdateOperationsInput | string
    signatoryId?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeintureCreateInput = {
    id?: string
    level: string
    awardedAt?: Date | string
    note?: string | null
    createdAt?: Date | string
    mecene: UserCreateNestedOneWithoutCeinturesInput
  }

  export type CeintureUncheckedCreateInput = {
    id?: string
    meceneId: string
    level: string
    awardedAt?: Date | string
    note?: string | null
    createdAt?: Date | string
  }

  export type CeintureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mecene?: UserUpdateOneRequiredWithoutCeinturesNestedInput
  }

  export type CeintureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meceneId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeintureCreateManyInput = {
    id?: string
    meceneId: string
    level: string
    awardedAt?: Date | string
    note?: string | null
    createdAt?: Date | string
  }

  export type CeintureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeintureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meceneId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoemCreateInput = {
    id?: string
    content: string
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: Date | string
    don: DonCreateNestedOneWithoutPoemInput
  }

  export type PoemUncheckedCreateInput = {
    id?: string
    donId: string
    content: string
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: Date | string
  }

  export type PoemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generated?: BoolFieldUpdateOperationsInput | boolean
    validated?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    don?: DonUpdateOneRequiredWithoutPoemNestedInput
  }

  export type PoemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generated?: BoolFieldUpdateOperationsInput | boolean
    validated?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoemCreateManyInput = {
    id?: string
    donId: string
    content: string
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: Date | string
  }

  export type PoemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generated?: BoolFieldUpdateOperationsInput | boolean
    validated?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generated?: BoolFieldUpdateOperationsInput | boolean
    validated?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CauseListRelationFilter = {
    every?: CauseWhereInput
    some?: CauseWhereInput
    none?: CauseWhereInput
  }

  export type DonListRelationFilter = {
    every?: DonWhereInput
    some?: DonWhereInput
    none?: DonWhereInput
  }

  export type CeintureListRelationFilter = {
    every?: CeintureWhereInput
    some?: CeintureWhereInput
    none?: CeintureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CauseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CeintureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    mobileMoneyConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    mobileMoneyConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    mobileMoneyConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CauseNullableScalarRelationFilter = {
    is?: CauseWhereInput | null
    isNot?: CauseWhereInput | null
  }

  export type AccessCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    issuedBy?: SortOrder
    usedBy?: SortOrder
    usedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    issuedBy?: SortOrder
    usedBy?: SortOrder
    usedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    issuedBy?: SortOrder
    usedBy?: SortOrder
    usedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccessCodeNullableScalarRelationFilter = {
    is?: AccessCodeWhereInput | null
    isNot?: AccessCodeWhereInput | null
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type SignatoryListRelationFilter = {
    every?: SignatoryWhereInput
    some?: SignatoryWhereInput
    none?: SignatoryWhereInput
  }

  export type PayoutRequestListRelationFilter = {
    every?: PayoutRequestWhereInput
    some?: PayoutRequestWhereInput
    none?: PayoutRequestWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignatoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayoutRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CauseCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    type?: SortOrder
    city?: SortOrder
    country?: SortOrder
    reference?: SortOrder
    goalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payoutModel?: SortOrder
    approvalThreshold?: SortOrder
    fundManagerRef?: SortOrder
    porteurId?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CauseAvgOrderByAggregateInput = {
    goalAmount?: SortOrder
    approvalThreshold?: SortOrder
  }

  export type CauseMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    type?: SortOrder
    city?: SortOrder
    country?: SortOrder
    reference?: SortOrder
    goalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payoutModel?: SortOrder
    approvalThreshold?: SortOrder
    fundManagerRef?: SortOrder
    porteurId?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CauseMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    type?: SortOrder
    city?: SortOrder
    country?: SortOrder
    reference?: SortOrder
    goalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payoutModel?: SortOrder
    approvalThreshold?: SortOrder
    fundManagerRef?: SortOrder
    porteurId?: SortOrder
    accessCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CauseSumOrderByAggregateInput = {
    goalAmount?: SortOrder
    approvalThreshold?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CauseScalarRelationFilter = {
    is?: CauseWhereInput
    isNot?: CauseWhereInput
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    reached?: SortOrder
    reachedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    target?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    reached?: SortOrder
    reachedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    reached?: SortOrder
    reachedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    target?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PoemNullableScalarRelationFilter = {
    is?: PoemWhereInput | null
    isNot?: PoemWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type DonCountOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    meceneId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
    method?: SortOrder
    status?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonAvgOrderByAggregateInput = {
    amount?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
  }

  export type DonMaxOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    meceneId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
    method?: SortOrder
    status?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonMinOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    meceneId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
    method?: SortOrder
    status?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonSumOrderByAggregateInput = {
    amount?: SortOrder
    commission?: SortOrder
    netPorteur?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DonScalarRelationFilter = {
    is?: DonWhereInput
    isNot?: DonWhereInput
  }

  export type WebhookEventListRelationFilter = {
    every?: WebhookEventWhereInput
    some?: WebhookEventWhereInput
    none?: WebhookEventWhereInput
  }

  export type WebhookEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    donId?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrder
    status?: SortOrder
    checkoutUrl?: SortOrder
    providerPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    donId?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrder
    status?: SortOrder
    checkoutUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    donId?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrder
    status?: SortOrder
    checkoutUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WebhookEventProviderEventIdCompoundUniqueInput = {
    provider: string
    eventId: string
  }

  export type WebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    paymentId?: SortOrder
    payload?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    paymentId?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    paymentId?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PayoutApprovalListRelationFilter = {
    every?: PayoutApprovalWhereInput
    some?: PayoutApprovalWhereInput
    none?: PayoutApprovalWhereInput
  }

  export type PayoutApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignatoryCauseIdUserIdCompoundUniqueInput = {
    causeId: string
    userId: string
  }

  export type SignatoryCountOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SignatoryMaxOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SignatoryMinOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type PayoutRequestCountOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrder
    payoutModel?: SortOrder
    status?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
    approvalThreshold?: SortOrder
  }

  export type PayoutRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrder
    payoutModel?: SortOrder
    status?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutRequestMinOrderByAggregateInput = {
    id?: SortOrder
    causeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerRef?: SortOrder
    payoutModel?: SortOrder
    status?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutRequestSumOrderByAggregateInput = {
    amount?: SortOrder
    approvalThreshold?: SortOrder
  }

  export type PayoutRequestScalarRelationFilter = {
    is?: PayoutRequestWhereInput
    isNot?: PayoutRequestWhereInput
  }

  export type SignatoryScalarRelationFilter = {
    is?: SignatoryWhereInput
    isNot?: SignatoryWhereInput
  }

  export type PayoutApprovalPayoutRequestIdSignatoryIdCompoundUniqueInput = {
    payoutRequestId: string
    signatoryId: string
  }

  export type PayoutApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    payoutRequestId?: SortOrder
    signatoryId?: SortOrder
    approvedAt?: SortOrder
  }

  export type PayoutApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    payoutRequestId?: SortOrder
    signatoryId?: SortOrder
    approvedAt?: SortOrder
  }

  export type PayoutApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    payoutRequestId?: SortOrder
    signatoryId?: SortOrder
    approvedAt?: SortOrder
  }

  export type CeintureCountOrderByAggregateInput = {
    id?: SortOrder
    meceneId?: SortOrder
    level?: SortOrder
    awardedAt?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CeintureMaxOrderByAggregateInput = {
    id?: SortOrder
    meceneId?: SortOrder
    level?: SortOrder
    awardedAt?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CeintureMinOrderByAggregateInput = {
    id?: SortOrder
    meceneId?: SortOrder
    level?: SortOrder
    awardedAt?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PoemCountOrderByAggregateInput = {
    id?: SortOrder
    donId?: SortOrder
    content?: SortOrder
    generated?: SortOrder
    validated?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type PoemMaxOrderByAggregateInput = {
    id?: SortOrder
    donId?: SortOrder
    content?: SortOrder
    generated?: SortOrder
    validated?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type PoemMinOrderByAggregateInput = {
    id?: SortOrder
    donId?: SortOrder
    content?: SortOrder
    generated?: SortOrder
    validated?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type CauseCreateNestedManyWithoutPorteurInput = {
    create?: XOR<CauseCreateWithoutPorteurInput, CauseUncheckedCreateWithoutPorteurInput> | CauseCreateWithoutPorteurInput[] | CauseUncheckedCreateWithoutPorteurInput[]
    connectOrCreate?: CauseCreateOrConnectWithoutPorteurInput | CauseCreateOrConnectWithoutPorteurInput[]
    createMany?: CauseCreateManyPorteurInputEnvelope
    connect?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
  }

  export type DonCreateNestedManyWithoutMeceneInput = {
    create?: XOR<DonCreateWithoutMeceneInput, DonUncheckedCreateWithoutMeceneInput> | DonCreateWithoutMeceneInput[] | DonUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: DonCreateOrConnectWithoutMeceneInput | DonCreateOrConnectWithoutMeceneInput[]
    createMany?: DonCreateManyMeceneInputEnvelope
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
  }

  export type CeintureCreateNestedManyWithoutMeceneInput = {
    create?: XOR<CeintureCreateWithoutMeceneInput, CeintureUncheckedCreateWithoutMeceneInput> | CeintureCreateWithoutMeceneInput[] | CeintureUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: CeintureCreateOrConnectWithoutMeceneInput | CeintureCreateOrConnectWithoutMeceneInput[]
    createMany?: CeintureCreateManyMeceneInputEnvelope
    connect?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
  }

  export type CauseUncheckedCreateNestedManyWithoutPorteurInput = {
    create?: XOR<CauseCreateWithoutPorteurInput, CauseUncheckedCreateWithoutPorteurInput> | CauseCreateWithoutPorteurInput[] | CauseUncheckedCreateWithoutPorteurInput[]
    connectOrCreate?: CauseCreateOrConnectWithoutPorteurInput | CauseCreateOrConnectWithoutPorteurInput[]
    createMany?: CauseCreateManyPorteurInputEnvelope
    connect?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
  }

  export type DonUncheckedCreateNestedManyWithoutMeceneInput = {
    create?: XOR<DonCreateWithoutMeceneInput, DonUncheckedCreateWithoutMeceneInput> | DonCreateWithoutMeceneInput[] | DonUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: DonCreateOrConnectWithoutMeceneInput | DonCreateOrConnectWithoutMeceneInput[]
    createMany?: DonCreateManyMeceneInputEnvelope
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
  }

  export type CeintureUncheckedCreateNestedManyWithoutMeceneInput = {
    create?: XOR<CeintureCreateWithoutMeceneInput, CeintureUncheckedCreateWithoutMeceneInput> | CeintureCreateWithoutMeceneInput[] | CeintureUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: CeintureCreateOrConnectWithoutMeceneInput | CeintureCreateOrConnectWithoutMeceneInput[]
    createMany?: CeintureCreateManyMeceneInputEnvelope
    connect?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CauseUpdateManyWithoutPorteurNestedInput = {
    create?: XOR<CauseCreateWithoutPorteurInput, CauseUncheckedCreateWithoutPorteurInput> | CauseCreateWithoutPorteurInput[] | CauseUncheckedCreateWithoutPorteurInput[]
    connectOrCreate?: CauseCreateOrConnectWithoutPorteurInput | CauseCreateOrConnectWithoutPorteurInput[]
    upsert?: CauseUpsertWithWhereUniqueWithoutPorteurInput | CauseUpsertWithWhereUniqueWithoutPorteurInput[]
    createMany?: CauseCreateManyPorteurInputEnvelope
    set?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    disconnect?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    delete?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    connect?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    update?: CauseUpdateWithWhereUniqueWithoutPorteurInput | CauseUpdateWithWhereUniqueWithoutPorteurInput[]
    updateMany?: CauseUpdateManyWithWhereWithoutPorteurInput | CauseUpdateManyWithWhereWithoutPorteurInput[]
    deleteMany?: CauseScalarWhereInput | CauseScalarWhereInput[]
  }

  export type DonUpdateManyWithoutMeceneNestedInput = {
    create?: XOR<DonCreateWithoutMeceneInput, DonUncheckedCreateWithoutMeceneInput> | DonCreateWithoutMeceneInput[] | DonUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: DonCreateOrConnectWithoutMeceneInput | DonCreateOrConnectWithoutMeceneInput[]
    upsert?: DonUpsertWithWhereUniqueWithoutMeceneInput | DonUpsertWithWhereUniqueWithoutMeceneInput[]
    createMany?: DonCreateManyMeceneInputEnvelope
    set?: DonWhereUniqueInput | DonWhereUniqueInput[]
    disconnect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    delete?: DonWhereUniqueInput | DonWhereUniqueInput[]
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    update?: DonUpdateWithWhereUniqueWithoutMeceneInput | DonUpdateWithWhereUniqueWithoutMeceneInput[]
    updateMany?: DonUpdateManyWithWhereWithoutMeceneInput | DonUpdateManyWithWhereWithoutMeceneInput[]
    deleteMany?: DonScalarWhereInput | DonScalarWhereInput[]
  }

  export type CeintureUpdateManyWithoutMeceneNestedInput = {
    create?: XOR<CeintureCreateWithoutMeceneInput, CeintureUncheckedCreateWithoutMeceneInput> | CeintureCreateWithoutMeceneInput[] | CeintureUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: CeintureCreateOrConnectWithoutMeceneInput | CeintureCreateOrConnectWithoutMeceneInput[]
    upsert?: CeintureUpsertWithWhereUniqueWithoutMeceneInput | CeintureUpsertWithWhereUniqueWithoutMeceneInput[]
    createMany?: CeintureCreateManyMeceneInputEnvelope
    set?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    disconnect?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    delete?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    connect?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    update?: CeintureUpdateWithWhereUniqueWithoutMeceneInput | CeintureUpdateWithWhereUniqueWithoutMeceneInput[]
    updateMany?: CeintureUpdateManyWithWhereWithoutMeceneInput | CeintureUpdateManyWithWhereWithoutMeceneInput[]
    deleteMany?: CeintureScalarWhereInput | CeintureScalarWhereInput[]
  }

  export type CauseUncheckedUpdateManyWithoutPorteurNestedInput = {
    create?: XOR<CauseCreateWithoutPorteurInput, CauseUncheckedCreateWithoutPorteurInput> | CauseCreateWithoutPorteurInput[] | CauseUncheckedCreateWithoutPorteurInput[]
    connectOrCreate?: CauseCreateOrConnectWithoutPorteurInput | CauseCreateOrConnectWithoutPorteurInput[]
    upsert?: CauseUpsertWithWhereUniqueWithoutPorteurInput | CauseUpsertWithWhereUniqueWithoutPorteurInput[]
    createMany?: CauseCreateManyPorteurInputEnvelope
    set?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    disconnect?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    delete?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    connect?: CauseWhereUniqueInput | CauseWhereUniqueInput[]
    update?: CauseUpdateWithWhereUniqueWithoutPorteurInput | CauseUpdateWithWhereUniqueWithoutPorteurInput[]
    updateMany?: CauseUpdateManyWithWhereWithoutPorteurInput | CauseUpdateManyWithWhereWithoutPorteurInput[]
    deleteMany?: CauseScalarWhereInput | CauseScalarWhereInput[]
  }

  export type DonUncheckedUpdateManyWithoutMeceneNestedInput = {
    create?: XOR<DonCreateWithoutMeceneInput, DonUncheckedCreateWithoutMeceneInput> | DonCreateWithoutMeceneInput[] | DonUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: DonCreateOrConnectWithoutMeceneInput | DonCreateOrConnectWithoutMeceneInput[]
    upsert?: DonUpsertWithWhereUniqueWithoutMeceneInput | DonUpsertWithWhereUniqueWithoutMeceneInput[]
    createMany?: DonCreateManyMeceneInputEnvelope
    set?: DonWhereUniqueInput | DonWhereUniqueInput[]
    disconnect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    delete?: DonWhereUniqueInput | DonWhereUniqueInput[]
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    update?: DonUpdateWithWhereUniqueWithoutMeceneInput | DonUpdateWithWhereUniqueWithoutMeceneInput[]
    updateMany?: DonUpdateManyWithWhereWithoutMeceneInput | DonUpdateManyWithWhereWithoutMeceneInput[]
    deleteMany?: DonScalarWhereInput | DonScalarWhereInput[]
  }

  export type CeintureUncheckedUpdateManyWithoutMeceneNestedInput = {
    create?: XOR<CeintureCreateWithoutMeceneInput, CeintureUncheckedCreateWithoutMeceneInput> | CeintureCreateWithoutMeceneInput[] | CeintureUncheckedCreateWithoutMeceneInput[]
    connectOrCreate?: CeintureCreateOrConnectWithoutMeceneInput | CeintureCreateOrConnectWithoutMeceneInput[]
    upsert?: CeintureUpsertWithWhereUniqueWithoutMeceneInput | CeintureUpsertWithWhereUniqueWithoutMeceneInput[]
    createMany?: CeintureCreateManyMeceneInputEnvelope
    set?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    disconnect?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    delete?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    connect?: CeintureWhereUniqueInput | CeintureWhereUniqueInput[]
    update?: CeintureUpdateWithWhereUniqueWithoutMeceneInput | CeintureUpdateWithWhereUniqueWithoutMeceneInput[]
    updateMany?: CeintureUpdateManyWithWhereWithoutMeceneInput | CeintureUpdateManyWithWhereWithoutMeceneInput[]
    deleteMany?: CeintureScalarWhereInput | CeintureScalarWhereInput[]
  }

  export type CauseCreateNestedOneWithoutAccessCodeRelInput = {
    create?: XOR<CauseCreateWithoutAccessCodeRelInput, CauseUncheckedCreateWithoutAccessCodeRelInput>
    connectOrCreate?: CauseCreateOrConnectWithoutAccessCodeRelInput
    connect?: CauseWhereUniqueInput
  }

  export type CauseUncheckedCreateNestedOneWithoutAccessCodeRelInput = {
    create?: XOR<CauseCreateWithoutAccessCodeRelInput, CauseUncheckedCreateWithoutAccessCodeRelInput>
    connectOrCreate?: CauseCreateOrConnectWithoutAccessCodeRelInput
    connect?: CauseWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CauseUpdateOneWithoutAccessCodeRelNestedInput = {
    create?: XOR<CauseCreateWithoutAccessCodeRelInput, CauseUncheckedCreateWithoutAccessCodeRelInput>
    connectOrCreate?: CauseCreateOrConnectWithoutAccessCodeRelInput
    upsert?: CauseUpsertWithoutAccessCodeRelInput
    disconnect?: CauseWhereInput | boolean
    delete?: CauseWhereInput | boolean
    connect?: CauseWhereUniqueInput
    update?: XOR<XOR<CauseUpdateToOneWithWhereWithoutAccessCodeRelInput, CauseUpdateWithoutAccessCodeRelInput>, CauseUncheckedUpdateWithoutAccessCodeRelInput>
  }

  export type CauseUncheckedUpdateOneWithoutAccessCodeRelNestedInput = {
    create?: XOR<CauseCreateWithoutAccessCodeRelInput, CauseUncheckedCreateWithoutAccessCodeRelInput>
    connectOrCreate?: CauseCreateOrConnectWithoutAccessCodeRelInput
    upsert?: CauseUpsertWithoutAccessCodeRelInput
    disconnect?: CauseWhereInput | boolean
    delete?: CauseWhereInput | boolean
    connect?: CauseWhereUniqueInput
    update?: XOR<XOR<CauseUpdateToOneWithWhereWithoutAccessCodeRelInput, CauseUpdateWithoutAccessCodeRelInput>, CauseUncheckedUpdateWithoutAccessCodeRelInput>
  }

  export type UserCreateNestedOneWithoutCausesSubmittedInput = {
    create?: XOR<UserCreateWithoutCausesSubmittedInput, UserUncheckedCreateWithoutCausesSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCausesSubmittedInput
    connect?: UserWhereUniqueInput
  }

  export type AccessCodeCreateNestedOneWithoutCauseInput = {
    create?: XOR<AccessCodeCreateWithoutCauseInput, AccessCodeUncheckedCreateWithoutCauseInput>
    connectOrCreate?: AccessCodeCreateOrConnectWithoutCauseInput
    connect?: AccessCodeWhereUniqueInput
  }

  export type MilestoneCreateNestedManyWithoutCauseInput = {
    create?: XOR<MilestoneCreateWithoutCauseInput, MilestoneUncheckedCreateWithoutCauseInput> | MilestoneCreateWithoutCauseInput[] | MilestoneUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCauseInput | MilestoneCreateOrConnectWithoutCauseInput[]
    createMany?: MilestoneCreateManyCauseInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type DonCreateNestedManyWithoutCauseInput = {
    create?: XOR<DonCreateWithoutCauseInput, DonUncheckedCreateWithoutCauseInput> | DonCreateWithoutCauseInput[] | DonUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: DonCreateOrConnectWithoutCauseInput | DonCreateOrConnectWithoutCauseInput[]
    createMany?: DonCreateManyCauseInputEnvelope
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
  }

  export type SignatoryCreateNestedManyWithoutCauseInput = {
    create?: XOR<SignatoryCreateWithoutCauseInput, SignatoryUncheckedCreateWithoutCauseInput> | SignatoryCreateWithoutCauseInput[] | SignatoryUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: SignatoryCreateOrConnectWithoutCauseInput | SignatoryCreateOrConnectWithoutCauseInput[]
    createMany?: SignatoryCreateManyCauseInputEnvelope
    connect?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
  }

  export type PayoutRequestCreateNestedManyWithoutCauseInput = {
    create?: XOR<PayoutRequestCreateWithoutCauseInput, PayoutRequestUncheckedCreateWithoutCauseInput> | PayoutRequestCreateWithoutCauseInput[] | PayoutRequestUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutCauseInput | PayoutRequestCreateOrConnectWithoutCauseInput[]
    createMany?: PayoutRequestCreateManyCauseInputEnvelope
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutCauseInput = {
    create?: XOR<MilestoneCreateWithoutCauseInput, MilestoneUncheckedCreateWithoutCauseInput> | MilestoneCreateWithoutCauseInput[] | MilestoneUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCauseInput | MilestoneCreateOrConnectWithoutCauseInput[]
    createMany?: MilestoneCreateManyCauseInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type DonUncheckedCreateNestedManyWithoutCauseInput = {
    create?: XOR<DonCreateWithoutCauseInput, DonUncheckedCreateWithoutCauseInput> | DonCreateWithoutCauseInput[] | DonUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: DonCreateOrConnectWithoutCauseInput | DonCreateOrConnectWithoutCauseInput[]
    createMany?: DonCreateManyCauseInputEnvelope
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
  }

  export type SignatoryUncheckedCreateNestedManyWithoutCauseInput = {
    create?: XOR<SignatoryCreateWithoutCauseInput, SignatoryUncheckedCreateWithoutCauseInput> | SignatoryCreateWithoutCauseInput[] | SignatoryUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: SignatoryCreateOrConnectWithoutCauseInput | SignatoryCreateOrConnectWithoutCauseInput[]
    createMany?: SignatoryCreateManyCauseInputEnvelope
    connect?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
  }

  export type PayoutRequestUncheckedCreateNestedManyWithoutCauseInput = {
    create?: XOR<PayoutRequestCreateWithoutCauseInput, PayoutRequestUncheckedCreateWithoutCauseInput> | PayoutRequestCreateWithoutCauseInput[] | PayoutRequestUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutCauseInput | PayoutRequestCreateOrConnectWithoutCauseInput[]
    createMany?: PayoutRequestCreateManyCauseInputEnvelope
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCausesSubmittedNestedInput = {
    create?: XOR<UserCreateWithoutCausesSubmittedInput, UserUncheckedCreateWithoutCausesSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCausesSubmittedInput
    upsert?: UserUpsertWithoutCausesSubmittedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCausesSubmittedInput, UserUpdateWithoutCausesSubmittedInput>, UserUncheckedUpdateWithoutCausesSubmittedInput>
  }

  export type AccessCodeUpdateOneWithoutCauseNestedInput = {
    create?: XOR<AccessCodeCreateWithoutCauseInput, AccessCodeUncheckedCreateWithoutCauseInput>
    connectOrCreate?: AccessCodeCreateOrConnectWithoutCauseInput
    upsert?: AccessCodeUpsertWithoutCauseInput
    disconnect?: AccessCodeWhereInput | boolean
    delete?: AccessCodeWhereInput | boolean
    connect?: AccessCodeWhereUniqueInput
    update?: XOR<XOR<AccessCodeUpdateToOneWithWhereWithoutCauseInput, AccessCodeUpdateWithoutCauseInput>, AccessCodeUncheckedUpdateWithoutCauseInput>
  }

  export type MilestoneUpdateManyWithoutCauseNestedInput = {
    create?: XOR<MilestoneCreateWithoutCauseInput, MilestoneUncheckedCreateWithoutCauseInput> | MilestoneCreateWithoutCauseInput[] | MilestoneUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCauseInput | MilestoneCreateOrConnectWithoutCauseInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutCauseInput | MilestoneUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: MilestoneCreateManyCauseInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutCauseInput | MilestoneUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutCauseInput | MilestoneUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type DonUpdateManyWithoutCauseNestedInput = {
    create?: XOR<DonCreateWithoutCauseInput, DonUncheckedCreateWithoutCauseInput> | DonCreateWithoutCauseInput[] | DonUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: DonCreateOrConnectWithoutCauseInput | DonCreateOrConnectWithoutCauseInput[]
    upsert?: DonUpsertWithWhereUniqueWithoutCauseInput | DonUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: DonCreateManyCauseInputEnvelope
    set?: DonWhereUniqueInput | DonWhereUniqueInput[]
    disconnect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    delete?: DonWhereUniqueInput | DonWhereUniqueInput[]
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    update?: DonUpdateWithWhereUniqueWithoutCauseInput | DonUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: DonUpdateManyWithWhereWithoutCauseInput | DonUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: DonScalarWhereInput | DonScalarWhereInput[]
  }

  export type SignatoryUpdateManyWithoutCauseNestedInput = {
    create?: XOR<SignatoryCreateWithoutCauseInput, SignatoryUncheckedCreateWithoutCauseInput> | SignatoryCreateWithoutCauseInput[] | SignatoryUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: SignatoryCreateOrConnectWithoutCauseInput | SignatoryCreateOrConnectWithoutCauseInput[]
    upsert?: SignatoryUpsertWithWhereUniqueWithoutCauseInput | SignatoryUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: SignatoryCreateManyCauseInputEnvelope
    set?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    disconnect?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    delete?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    connect?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    update?: SignatoryUpdateWithWhereUniqueWithoutCauseInput | SignatoryUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: SignatoryUpdateManyWithWhereWithoutCauseInput | SignatoryUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: SignatoryScalarWhereInput | SignatoryScalarWhereInput[]
  }

  export type PayoutRequestUpdateManyWithoutCauseNestedInput = {
    create?: XOR<PayoutRequestCreateWithoutCauseInput, PayoutRequestUncheckedCreateWithoutCauseInput> | PayoutRequestCreateWithoutCauseInput[] | PayoutRequestUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutCauseInput | PayoutRequestCreateOrConnectWithoutCauseInput[]
    upsert?: PayoutRequestUpsertWithWhereUniqueWithoutCauseInput | PayoutRequestUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: PayoutRequestCreateManyCauseInputEnvelope
    set?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    disconnect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    delete?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    update?: PayoutRequestUpdateWithWhereUniqueWithoutCauseInput | PayoutRequestUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: PayoutRequestUpdateManyWithWhereWithoutCauseInput | PayoutRequestUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutCauseNestedInput = {
    create?: XOR<MilestoneCreateWithoutCauseInput, MilestoneUncheckedCreateWithoutCauseInput> | MilestoneCreateWithoutCauseInput[] | MilestoneUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCauseInput | MilestoneCreateOrConnectWithoutCauseInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutCauseInput | MilestoneUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: MilestoneCreateManyCauseInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutCauseInput | MilestoneUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutCauseInput | MilestoneUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type DonUncheckedUpdateManyWithoutCauseNestedInput = {
    create?: XOR<DonCreateWithoutCauseInput, DonUncheckedCreateWithoutCauseInput> | DonCreateWithoutCauseInput[] | DonUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: DonCreateOrConnectWithoutCauseInput | DonCreateOrConnectWithoutCauseInput[]
    upsert?: DonUpsertWithWhereUniqueWithoutCauseInput | DonUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: DonCreateManyCauseInputEnvelope
    set?: DonWhereUniqueInput | DonWhereUniqueInput[]
    disconnect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    delete?: DonWhereUniqueInput | DonWhereUniqueInput[]
    connect?: DonWhereUniqueInput | DonWhereUniqueInput[]
    update?: DonUpdateWithWhereUniqueWithoutCauseInput | DonUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: DonUpdateManyWithWhereWithoutCauseInput | DonUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: DonScalarWhereInput | DonScalarWhereInput[]
  }

  export type SignatoryUncheckedUpdateManyWithoutCauseNestedInput = {
    create?: XOR<SignatoryCreateWithoutCauseInput, SignatoryUncheckedCreateWithoutCauseInput> | SignatoryCreateWithoutCauseInput[] | SignatoryUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: SignatoryCreateOrConnectWithoutCauseInput | SignatoryCreateOrConnectWithoutCauseInput[]
    upsert?: SignatoryUpsertWithWhereUniqueWithoutCauseInput | SignatoryUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: SignatoryCreateManyCauseInputEnvelope
    set?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    disconnect?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    delete?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    connect?: SignatoryWhereUniqueInput | SignatoryWhereUniqueInput[]
    update?: SignatoryUpdateWithWhereUniqueWithoutCauseInput | SignatoryUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: SignatoryUpdateManyWithWhereWithoutCauseInput | SignatoryUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: SignatoryScalarWhereInput | SignatoryScalarWhereInput[]
  }

  export type PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput = {
    create?: XOR<PayoutRequestCreateWithoutCauseInput, PayoutRequestUncheckedCreateWithoutCauseInput> | PayoutRequestCreateWithoutCauseInput[] | PayoutRequestUncheckedCreateWithoutCauseInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutCauseInput | PayoutRequestCreateOrConnectWithoutCauseInput[]
    upsert?: PayoutRequestUpsertWithWhereUniqueWithoutCauseInput | PayoutRequestUpsertWithWhereUniqueWithoutCauseInput[]
    createMany?: PayoutRequestCreateManyCauseInputEnvelope
    set?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    disconnect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    delete?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    update?: PayoutRequestUpdateWithWhereUniqueWithoutCauseInput | PayoutRequestUpdateWithWhereUniqueWithoutCauseInput[]
    updateMany?: PayoutRequestUpdateManyWithWhereWithoutCauseInput | PayoutRequestUpdateManyWithWhereWithoutCauseInput[]
    deleteMany?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
  }

  export type CauseCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<CauseCreateWithoutMilestonesInput, CauseUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: CauseCreateOrConnectWithoutMilestonesInput
    connect?: CauseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CauseUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<CauseCreateWithoutMilestonesInput, CauseUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: CauseCreateOrConnectWithoutMilestonesInput
    upsert?: CauseUpsertWithoutMilestonesInput
    connect?: CauseWhereUniqueInput
    update?: XOR<XOR<CauseUpdateToOneWithWhereWithoutMilestonesInput, CauseUpdateWithoutMilestonesInput>, CauseUncheckedUpdateWithoutMilestonesInput>
  }

  export type CauseCreateNestedOneWithoutDonsInput = {
    create?: XOR<CauseCreateWithoutDonsInput, CauseUncheckedCreateWithoutDonsInput>
    connectOrCreate?: CauseCreateOrConnectWithoutDonsInput
    connect?: CauseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonsMadeInput = {
    create?: XOR<UserCreateWithoutDonsMadeInput, UserUncheckedCreateWithoutDonsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type PoemCreateNestedOneWithoutDonInput = {
    create?: XOR<PoemCreateWithoutDonInput, PoemUncheckedCreateWithoutDonInput>
    connectOrCreate?: PoemCreateOrConnectWithoutDonInput
    connect?: PoemWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutDonInput = {
    create?: XOR<PaymentCreateWithoutDonInput, PaymentUncheckedCreateWithoutDonInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDonInput
    connect?: PaymentWhereUniqueInput
  }

  export type PoemUncheckedCreateNestedOneWithoutDonInput = {
    create?: XOR<PoemCreateWithoutDonInput, PoemUncheckedCreateWithoutDonInput>
    connectOrCreate?: PoemCreateOrConnectWithoutDonInput
    connect?: PoemWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutDonInput = {
    create?: XOR<PaymentCreateWithoutDonInput, PaymentUncheckedCreateWithoutDonInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDonInput
    connect?: PaymentWhereUniqueInput
  }

  export type CauseUpdateOneRequiredWithoutDonsNestedInput = {
    create?: XOR<CauseCreateWithoutDonsInput, CauseUncheckedCreateWithoutDonsInput>
    connectOrCreate?: CauseCreateOrConnectWithoutDonsInput
    upsert?: CauseUpsertWithoutDonsInput
    connect?: CauseWhereUniqueInput
    update?: XOR<XOR<CauseUpdateToOneWithWhereWithoutDonsInput, CauseUpdateWithoutDonsInput>, CauseUncheckedUpdateWithoutDonsInput>
  }

  export type UserUpdateOneWithoutDonsMadeNestedInput = {
    create?: XOR<UserCreateWithoutDonsMadeInput, UserUncheckedCreateWithoutDonsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonsMadeInput
    upsert?: UserUpsertWithoutDonsMadeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonsMadeInput, UserUpdateWithoutDonsMadeInput>, UserUncheckedUpdateWithoutDonsMadeInput>
  }

  export type PoemUpdateOneWithoutDonNestedInput = {
    create?: XOR<PoemCreateWithoutDonInput, PoemUncheckedCreateWithoutDonInput>
    connectOrCreate?: PoemCreateOrConnectWithoutDonInput
    upsert?: PoemUpsertWithoutDonInput
    disconnect?: PoemWhereInput | boolean
    delete?: PoemWhereInput | boolean
    connect?: PoemWhereUniqueInput
    update?: XOR<XOR<PoemUpdateToOneWithWhereWithoutDonInput, PoemUpdateWithoutDonInput>, PoemUncheckedUpdateWithoutDonInput>
  }

  export type PaymentUpdateOneWithoutDonNestedInput = {
    create?: XOR<PaymentCreateWithoutDonInput, PaymentUncheckedCreateWithoutDonInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDonInput
    upsert?: PaymentUpsertWithoutDonInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutDonInput, PaymentUpdateWithoutDonInput>, PaymentUncheckedUpdateWithoutDonInput>
  }

  export type PoemUncheckedUpdateOneWithoutDonNestedInput = {
    create?: XOR<PoemCreateWithoutDonInput, PoemUncheckedCreateWithoutDonInput>
    connectOrCreate?: PoemCreateOrConnectWithoutDonInput
    upsert?: PoemUpsertWithoutDonInput
    disconnect?: PoemWhereInput | boolean
    delete?: PoemWhereInput | boolean
    connect?: PoemWhereUniqueInput
    update?: XOR<XOR<PoemUpdateToOneWithWhereWithoutDonInput, PoemUpdateWithoutDonInput>, PoemUncheckedUpdateWithoutDonInput>
  }

  export type PaymentUncheckedUpdateOneWithoutDonNestedInput = {
    create?: XOR<PaymentCreateWithoutDonInput, PaymentUncheckedCreateWithoutDonInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDonInput
    upsert?: PaymentUpsertWithoutDonInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutDonInput, PaymentUpdateWithoutDonInput>, PaymentUncheckedUpdateWithoutDonInput>
  }

  export type DonCreateNestedOneWithoutPaymentInput = {
    create?: XOR<DonCreateWithoutPaymentInput, DonUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DonCreateOrConnectWithoutPaymentInput
    connect?: DonWhereUniqueInput
  }

  export type WebhookEventCreateNestedManyWithoutPaymentInput = {
    create?: XOR<WebhookEventCreateWithoutPaymentInput, WebhookEventUncheckedCreateWithoutPaymentInput> | WebhookEventCreateWithoutPaymentInput[] | WebhookEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: WebhookEventCreateOrConnectWithoutPaymentInput | WebhookEventCreateOrConnectWithoutPaymentInput[]
    createMany?: WebhookEventCreateManyPaymentInputEnvelope
    connect?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
  }

  export type WebhookEventUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<WebhookEventCreateWithoutPaymentInput, WebhookEventUncheckedCreateWithoutPaymentInput> | WebhookEventCreateWithoutPaymentInput[] | WebhookEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: WebhookEventCreateOrConnectWithoutPaymentInput | WebhookEventCreateOrConnectWithoutPaymentInput[]
    createMany?: WebhookEventCreateManyPaymentInputEnvelope
    connect?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
  }

  export type DonUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<DonCreateWithoutPaymentInput, DonUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DonCreateOrConnectWithoutPaymentInput
    upsert?: DonUpsertWithoutPaymentInput
    connect?: DonWhereUniqueInput
    update?: XOR<XOR<DonUpdateToOneWithWhereWithoutPaymentInput, DonUpdateWithoutPaymentInput>, DonUncheckedUpdateWithoutPaymentInput>
  }

  export type WebhookEventUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<WebhookEventCreateWithoutPaymentInput, WebhookEventUncheckedCreateWithoutPaymentInput> | WebhookEventCreateWithoutPaymentInput[] | WebhookEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: WebhookEventCreateOrConnectWithoutPaymentInput | WebhookEventCreateOrConnectWithoutPaymentInput[]
    upsert?: WebhookEventUpsertWithWhereUniqueWithoutPaymentInput | WebhookEventUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: WebhookEventCreateManyPaymentInputEnvelope
    set?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    disconnect?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    delete?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    connect?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    update?: WebhookEventUpdateWithWhereUniqueWithoutPaymentInput | WebhookEventUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: WebhookEventUpdateManyWithWhereWithoutPaymentInput | WebhookEventUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: WebhookEventScalarWhereInput | WebhookEventScalarWhereInput[]
  }

  export type WebhookEventUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<WebhookEventCreateWithoutPaymentInput, WebhookEventUncheckedCreateWithoutPaymentInput> | WebhookEventCreateWithoutPaymentInput[] | WebhookEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: WebhookEventCreateOrConnectWithoutPaymentInput | WebhookEventCreateOrConnectWithoutPaymentInput[]
    upsert?: WebhookEventUpsertWithWhereUniqueWithoutPaymentInput | WebhookEventUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: WebhookEventCreateManyPaymentInputEnvelope
    set?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    disconnect?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    delete?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    connect?: WebhookEventWhereUniqueInput | WebhookEventWhereUniqueInput[]
    update?: WebhookEventUpdateWithWhereUniqueWithoutPaymentInput | WebhookEventUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: WebhookEventUpdateManyWithWhereWithoutPaymentInput | WebhookEventUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: WebhookEventScalarWhereInput | WebhookEventScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutWebhookEventsInput = {
    create?: XOR<PaymentCreateWithoutWebhookEventsInput, PaymentUncheckedCreateWithoutWebhookEventsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutWebhookEventsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneWithoutWebhookEventsNestedInput = {
    create?: XOR<PaymentCreateWithoutWebhookEventsInput, PaymentUncheckedCreateWithoutWebhookEventsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutWebhookEventsInput
    upsert?: PaymentUpsertWithoutWebhookEventsInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutWebhookEventsInput, PaymentUpdateWithoutWebhookEventsInput>, PaymentUncheckedUpdateWithoutWebhookEventsInput>
  }

  export type CauseCreateNestedOneWithoutSignatoriesInput = {
    create?: XOR<CauseCreateWithoutSignatoriesInput, CauseUncheckedCreateWithoutSignatoriesInput>
    connectOrCreate?: CauseCreateOrConnectWithoutSignatoriesInput
    connect?: CauseWhereUniqueInput
  }

  export type PayoutApprovalCreateNestedManyWithoutSignatoryInput = {
    create?: XOR<PayoutApprovalCreateWithoutSignatoryInput, PayoutApprovalUncheckedCreateWithoutSignatoryInput> | PayoutApprovalCreateWithoutSignatoryInput[] | PayoutApprovalUncheckedCreateWithoutSignatoryInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutSignatoryInput | PayoutApprovalCreateOrConnectWithoutSignatoryInput[]
    createMany?: PayoutApprovalCreateManySignatoryInputEnvelope
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
  }

  export type PayoutApprovalUncheckedCreateNestedManyWithoutSignatoryInput = {
    create?: XOR<PayoutApprovalCreateWithoutSignatoryInput, PayoutApprovalUncheckedCreateWithoutSignatoryInput> | PayoutApprovalCreateWithoutSignatoryInput[] | PayoutApprovalUncheckedCreateWithoutSignatoryInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutSignatoryInput | PayoutApprovalCreateOrConnectWithoutSignatoryInput[]
    createMany?: PayoutApprovalCreateManySignatoryInputEnvelope
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
  }

  export type CauseUpdateOneRequiredWithoutSignatoriesNestedInput = {
    create?: XOR<CauseCreateWithoutSignatoriesInput, CauseUncheckedCreateWithoutSignatoriesInput>
    connectOrCreate?: CauseCreateOrConnectWithoutSignatoriesInput
    upsert?: CauseUpsertWithoutSignatoriesInput
    connect?: CauseWhereUniqueInput
    update?: XOR<XOR<CauseUpdateToOneWithWhereWithoutSignatoriesInput, CauseUpdateWithoutSignatoriesInput>, CauseUncheckedUpdateWithoutSignatoriesInput>
  }

  export type PayoutApprovalUpdateManyWithoutSignatoryNestedInput = {
    create?: XOR<PayoutApprovalCreateWithoutSignatoryInput, PayoutApprovalUncheckedCreateWithoutSignatoryInput> | PayoutApprovalCreateWithoutSignatoryInput[] | PayoutApprovalUncheckedCreateWithoutSignatoryInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutSignatoryInput | PayoutApprovalCreateOrConnectWithoutSignatoryInput[]
    upsert?: PayoutApprovalUpsertWithWhereUniqueWithoutSignatoryInput | PayoutApprovalUpsertWithWhereUniqueWithoutSignatoryInput[]
    createMany?: PayoutApprovalCreateManySignatoryInputEnvelope
    set?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    disconnect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    delete?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    update?: PayoutApprovalUpdateWithWhereUniqueWithoutSignatoryInput | PayoutApprovalUpdateWithWhereUniqueWithoutSignatoryInput[]
    updateMany?: PayoutApprovalUpdateManyWithWhereWithoutSignatoryInput | PayoutApprovalUpdateManyWithWhereWithoutSignatoryInput[]
    deleteMany?: PayoutApprovalScalarWhereInput | PayoutApprovalScalarWhereInput[]
  }

  export type PayoutApprovalUncheckedUpdateManyWithoutSignatoryNestedInput = {
    create?: XOR<PayoutApprovalCreateWithoutSignatoryInput, PayoutApprovalUncheckedCreateWithoutSignatoryInput> | PayoutApprovalCreateWithoutSignatoryInput[] | PayoutApprovalUncheckedCreateWithoutSignatoryInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutSignatoryInput | PayoutApprovalCreateOrConnectWithoutSignatoryInput[]
    upsert?: PayoutApprovalUpsertWithWhereUniqueWithoutSignatoryInput | PayoutApprovalUpsertWithWhereUniqueWithoutSignatoryInput[]
    createMany?: PayoutApprovalCreateManySignatoryInputEnvelope
    set?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    disconnect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    delete?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    update?: PayoutApprovalUpdateWithWhereUniqueWithoutSignatoryInput | PayoutApprovalUpdateWithWhereUniqueWithoutSignatoryInput[]
    updateMany?: PayoutApprovalUpdateManyWithWhereWithoutSignatoryInput | PayoutApprovalUpdateManyWithWhereWithoutSignatoryInput[]
    deleteMany?: PayoutApprovalScalarWhereInput | PayoutApprovalScalarWhereInput[]
  }

  export type CauseCreateNestedOneWithoutPayoutRequestsInput = {
    create?: XOR<CauseCreateWithoutPayoutRequestsInput, CauseUncheckedCreateWithoutPayoutRequestsInput>
    connectOrCreate?: CauseCreateOrConnectWithoutPayoutRequestsInput
    connect?: CauseWhereUniqueInput
  }

  export type PayoutApprovalCreateNestedManyWithoutPayoutRequestInput = {
    create?: XOR<PayoutApprovalCreateWithoutPayoutRequestInput, PayoutApprovalUncheckedCreateWithoutPayoutRequestInput> | PayoutApprovalCreateWithoutPayoutRequestInput[] | PayoutApprovalUncheckedCreateWithoutPayoutRequestInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutPayoutRequestInput | PayoutApprovalCreateOrConnectWithoutPayoutRequestInput[]
    createMany?: PayoutApprovalCreateManyPayoutRequestInputEnvelope
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
  }

  export type PayoutApprovalUncheckedCreateNestedManyWithoutPayoutRequestInput = {
    create?: XOR<PayoutApprovalCreateWithoutPayoutRequestInput, PayoutApprovalUncheckedCreateWithoutPayoutRequestInput> | PayoutApprovalCreateWithoutPayoutRequestInput[] | PayoutApprovalUncheckedCreateWithoutPayoutRequestInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutPayoutRequestInput | PayoutApprovalCreateOrConnectWithoutPayoutRequestInput[]
    createMany?: PayoutApprovalCreateManyPayoutRequestInputEnvelope
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
  }

  export type CauseUpdateOneRequiredWithoutPayoutRequestsNestedInput = {
    create?: XOR<CauseCreateWithoutPayoutRequestsInput, CauseUncheckedCreateWithoutPayoutRequestsInput>
    connectOrCreate?: CauseCreateOrConnectWithoutPayoutRequestsInput
    upsert?: CauseUpsertWithoutPayoutRequestsInput
    connect?: CauseWhereUniqueInput
    update?: XOR<XOR<CauseUpdateToOneWithWhereWithoutPayoutRequestsInput, CauseUpdateWithoutPayoutRequestsInput>, CauseUncheckedUpdateWithoutPayoutRequestsInput>
  }

  export type PayoutApprovalUpdateManyWithoutPayoutRequestNestedInput = {
    create?: XOR<PayoutApprovalCreateWithoutPayoutRequestInput, PayoutApprovalUncheckedCreateWithoutPayoutRequestInput> | PayoutApprovalCreateWithoutPayoutRequestInput[] | PayoutApprovalUncheckedCreateWithoutPayoutRequestInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutPayoutRequestInput | PayoutApprovalCreateOrConnectWithoutPayoutRequestInput[]
    upsert?: PayoutApprovalUpsertWithWhereUniqueWithoutPayoutRequestInput | PayoutApprovalUpsertWithWhereUniqueWithoutPayoutRequestInput[]
    createMany?: PayoutApprovalCreateManyPayoutRequestInputEnvelope
    set?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    disconnect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    delete?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    update?: PayoutApprovalUpdateWithWhereUniqueWithoutPayoutRequestInput | PayoutApprovalUpdateWithWhereUniqueWithoutPayoutRequestInput[]
    updateMany?: PayoutApprovalUpdateManyWithWhereWithoutPayoutRequestInput | PayoutApprovalUpdateManyWithWhereWithoutPayoutRequestInput[]
    deleteMany?: PayoutApprovalScalarWhereInput | PayoutApprovalScalarWhereInput[]
  }

  export type PayoutApprovalUncheckedUpdateManyWithoutPayoutRequestNestedInput = {
    create?: XOR<PayoutApprovalCreateWithoutPayoutRequestInput, PayoutApprovalUncheckedCreateWithoutPayoutRequestInput> | PayoutApprovalCreateWithoutPayoutRequestInput[] | PayoutApprovalUncheckedCreateWithoutPayoutRequestInput[]
    connectOrCreate?: PayoutApprovalCreateOrConnectWithoutPayoutRequestInput | PayoutApprovalCreateOrConnectWithoutPayoutRequestInput[]
    upsert?: PayoutApprovalUpsertWithWhereUniqueWithoutPayoutRequestInput | PayoutApprovalUpsertWithWhereUniqueWithoutPayoutRequestInput[]
    createMany?: PayoutApprovalCreateManyPayoutRequestInputEnvelope
    set?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    disconnect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    delete?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    connect?: PayoutApprovalWhereUniqueInput | PayoutApprovalWhereUniqueInput[]
    update?: PayoutApprovalUpdateWithWhereUniqueWithoutPayoutRequestInput | PayoutApprovalUpdateWithWhereUniqueWithoutPayoutRequestInput[]
    updateMany?: PayoutApprovalUpdateManyWithWhereWithoutPayoutRequestInput | PayoutApprovalUpdateManyWithWhereWithoutPayoutRequestInput[]
    deleteMany?: PayoutApprovalScalarWhereInput | PayoutApprovalScalarWhereInput[]
  }

  export type PayoutRequestCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<PayoutRequestCreateWithoutApprovalsInput, PayoutRequestUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutApprovalsInput
    connect?: PayoutRequestWhereUniqueInput
  }

  export type SignatoryCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<SignatoryCreateWithoutApprovalsInput, SignatoryUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: SignatoryCreateOrConnectWithoutApprovalsInput
    connect?: SignatoryWhereUniqueInput
  }

  export type PayoutRequestUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<PayoutRequestCreateWithoutApprovalsInput, PayoutRequestUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutApprovalsInput
    upsert?: PayoutRequestUpsertWithoutApprovalsInput
    connect?: PayoutRequestWhereUniqueInput
    update?: XOR<XOR<PayoutRequestUpdateToOneWithWhereWithoutApprovalsInput, PayoutRequestUpdateWithoutApprovalsInput>, PayoutRequestUncheckedUpdateWithoutApprovalsInput>
  }

  export type SignatoryUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<SignatoryCreateWithoutApprovalsInput, SignatoryUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: SignatoryCreateOrConnectWithoutApprovalsInput
    upsert?: SignatoryUpsertWithoutApprovalsInput
    connect?: SignatoryWhereUniqueInput
    update?: XOR<XOR<SignatoryUpdateToOneWithWhereWithoutApprovalsInput, SignatoryUpdateWithoutApprovalsInput>, SignatoryUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserCreateNestedOneWithoutCeinturesInput = {
    create?: XOR<UserCreateWithoutCeinturesInput, UserUncheckedCreateWithoutCeinturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCeinturesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCeinturesNestedInput = {
    create?: XOR<UserCreateWithoutCeinturesInput, UserUncheckedCreateWithoutCeinturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCeinturesInput
    upsert?: UserUpsertWithoutCeinturesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCeinturesInput, UserUpdateWithoutCeinturesInput>, UserUncheckedUpdateWithoutCeinturesInput>
  }

  export type DonCreateNestedOneWithoutPoemInput = {
    create?: XOR<DonCreateWithoutPoemInput, DonUncheckedCreateWithoutPoemInput>
    connectOrCreate?: DonCreateOrConnectWithoutPoemInput
    connect?: DonWhereUniqueInput
  }

  export type DonUpdateOneRequiredWithoutPoemNestedInput = {
    create?: XOR<DonCreateWithoutPoemInput, DonUncheckedCreateWithoutPoemInput>
    connectOrCreate?: DonCreateOrConnectWithoutPoemInput
    upsert?: DonUpsertWithoutPoemInput
    connect?: DonWhereUniqueInput
    update?: XOR<XOR<DonUpdateToOneWithWhereWithoutPoemInput, DonUpdateWithoutPoemInput>, DonUncheckedUpdateWithoutPoemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CauseCreateWithoutPorteurInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessCodeRel?: AccessCodeCreateNestedOneWithoutCauseInput
    milestones?: MilestoneCreateNestedManyWithoutCauseInput
    dons?: DonCreateNestedManyWithoutCauseInput
    signatories?: SignatoryCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateWithoutPorteurInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCauseInput
    dons?: DonUncheckedCreateNestedManyWithoutCauseInput
    signatories?: SignatoryUncheckedCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseCreateOrConnectWithoutPorteurInput = {
    where: CauseWhereUniqueInput
    create: XOR<CauseCreateWithoutPorteurInput, CauseUncheckedCreateWithoutPorteurInput>
  }

  export type CauseCreateManyPorteurInputEnvelope = {
    data: CauseCreateManyPorteurInput | CauseCreateManyPorteurInput[]
    skipDuplicates?: boolean
  }

  export type DonCreateWithoutMeceneInput = {
    id?: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutDonsInput
    poem?: PoemCreateNestedOneWithoutDonInput
    payment?: PaymentCreateNestedOneWithoutDonInput
  }

  export type DonUncheckedCreateWithoutMeceneInput = {
    id?: string
    causeId: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poem?: PoemUncheckedCreateNestedOneWithoutDonInput
    payment?: PaymentUncheckedCreateNestedOneWithoutDonInput
  }

  export type DonCreateOrConnectWithoutMeceneInput = {
    where: DonWhereUniqueInput
    create: XOR<DonCreateWithoutMeceneInput, DonUncheckedCreateWithoutMeceneInput>
  }

  export type DonCreateManyMeceneInputEnvelope = {
    data: DonCreateManyMeceneInput | DonCreateManyMeceneInput[]
    skipDuplicates?: boolean
  }

  export type CeintureCreateWithoutMeceneInput = {
    id?: string
    level: string
    awardedAt?: Date | string
    note?: string | null
    createdAt?: Date | string
  }

  export type CeintureUncheckedCreateWithoutMeceneInput = {
    id?: string
    level: string
    awardedAt?: Date | string
    note?: string | null
    createdAt?: Date | string
  }

  export type CeintureCreateOrConnectWithoutMeceneInput = {
    where: CeintureWhereUniqueInput
    create: XOR<CeintureCreateWithoutMeceneInput, CeintureUncheckedCreateWithoutMeceneInput>
  }

  export type CeintureCreateManyMeceneInputEnvelope = {
    data: CeintureCreateManyMeceneInput | CeintureCreateManyMeceneInput[]
    skipDuplicates?: boolean
  }

  export type CauseUpsertWithWhereUniqueWithoutPorteurInput = {
    where: CauseWhereUniqueInput
    update: XOR<CauseUpdateWithoutPorteurInput, CauseUncheckedUpdateWithoutPorteurInput>
    create: XOR<CauseCreateWithoutPorteurInput, CauseUncheckedCreateWithoutPorteurInput>
  }

  export type CauseUpdateWithWhereUniqueWithoutPorteurInput = {
    where: CauseWhereUniqueInput
    data: XOR<CauseUpdateWithoutPorteurInput, CauseUncheckedUpdateWithoutPorteurInput>
  }

  export type CauseUpdateManyWithWhereWithoutPorteurInput = {
    where: CauseScalarWhereInput
    data: XOR<CauseUpdateManyMutationInput, CauseUncheckedUpdateManyWithoutPorteurInput>
  }

  export type CauseScalarWhereInput = {
    AND?: CauseScalarWhereInput | CauseScalarWhereInput[]
    OR?: CauseScalarWhereInput[]
    NOT?: CauseScalarWhereInput | CauseScalarWhereInput[]
    id?: StringFilter<"Cause"> | string
    slug?: StringFilter<"Cause"> | string
    title?: StringFilter<"Cause"> | string
    summary?: StringNullableFilter<"Cause"> | string | null
    description?: StringFilter<"Cause"> | string
    type?: StringNullableFilter<"Cause"> | string | null
    city?: StringNullableFilter<"Cause"> | string | null
    country?: StringNullableFilter<"Cause"> | string | null
    reference?: StringNullableFilter<"Cause"> | string | null
    goalAmount?: FloatNullableFilter<"Cause"> | number | null
    currency?: StringFilter<"Cause"> | string
    status?: StringFilter<"Cause"> | string
    payoutModel?: StringFilter<"Cause"> | string
    approvalThreshold?: IntFilter<"Cause"> | number
    fundManagerRef?: StringNullableFilter<"Cause"> | string | null
    porteurId?: StringFilter<"Cause"> | string
    accessCode?: StringNullableFilter<"Cause"> | string | null
    createdAt?: DateTimeFilter<"Cause"> | Date | string
    updatedAt?: DateTimeFilter<"Cause"> | Date | string
  }

  export type DonUpsertWithWhereUniqueWithoutMeceneInput = {
    where: DonWhereUniqueInput
    update: XOR<DonUpdateWithoutMeceneInput, DonUncheckedUpdateWithoutMeceneInput>
    create: XOR<DonCreateWithoutMeceneInput, DonUncheckedCreateWithoutMeceneInput>
  }

  export type DonUpdateWithWhereUniqueWithoutMeceneInput = {
    where: DonWhereUniqueInput
    data: XOR<DonUpdateWithoutMeceneInput, DonUncheckedUpdateWithoutMeceneInput>
  }

  export type DonUpdateManyWithWhereWithoutMeceneInput = {
    where: DonScalarWhereInput
    data: XOR<DonUpdateManyMutationInput, DonUncheckedUpdateManyWithoutMeceneInput>
  }

  export type DonScalarWhereInput = {
    AND?: DonScalarWhereInput | DonScalarWhereInput[]
    OR?: DonScalarWhereInput[]
    NOT?: DonScalarWhereInput | DonScalarWhereInput[]
    id?: StringFilter<"Don"> | string
    causeId?: StringFilter<"Don"> | string
    meceneId?: StringNullableFilter<"Don"> | string | null
    amount?: FloatFilter<"Don"> | number
    currency?: StringFilter<"Don"> | string
    commission?: FloatFilter<"Don"> | number
    netPorteur?: FloatFilter<"Don"> | number
    method?: StringFilter<"Don"> | string
    status?: StringFilter<"Don"> | string
    displayName?: StringNullableFilter<"Don"> | string | null
    createdAt?: DateTimeFilter<"Don"> | Date | string
    updatedAt?: DateTimeFilter<"Don"> | Date | string
  }

  export type CeintureUpsertWithWhereUniqueWithoutMeceneInput = {
    where: CeintureWhereUniqueInput
    update: XOR<CeintureUpdateWithoutMeceneInput, CeintureUncheckedUpdateWithoutMeceneInput>
    create: XOR<CeintureCreateWithoutMeceneInput, CeintureUncheckedCreateWithoutMeceneInput>
  }

  export type CeintureUpdateWithWhereUniqueWithoutMeceneInput = {
    where: CeintureWhereUniqueInput
    data: XOR<CeintureUpdateWithoutMeceneInput, CeintureUncheckedUpdateWithoutMeceneInput>
  }

  export type CeintureUpdateManyWithWhereWithoutMeceneInput = {
    where: CeintureScalarWhereInput
    data: XOR<CeintureUpdateManyMutationInput, CeintureUncheckedUpdateManyWithoutMeceneInput>
  }

  export type CeintureScalarWhereInput = {
    AND?: CeintureScalarWhereInput | CeintureScalarWhereInput[]
    OR?: CeintureScalarWhereInput[]
    NOT?: CeintureScalarWhereInput | CeintureScalarWhereInput[]
    id?: StringFilter<"Ceinture"> | string
    meceneId?: StringFilter<"Ceinture"> | string
    level?: StringFilter<"Ceinture"> | string
    awardedAt?: DateTimeFilter<"Ceinture"> | Date | string
    note?: StringNullableFilter<"Ceinture"> | string | null
    createdAt?: DateTimeFilter<"Ceinture"> | Date | string
  }

  export type CauseCreateWithoutAccessCodeRelInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    porteur: UserCreateNestedOneWithoutCausesSubmittedInput
    milestones?: MilestoneCreateNestedManyWithoutCauseInput
    dons?: DonCreateNestedManyWithoutCauseInput
    signatories?: SignatoryCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateWithoutAccessCodeRelInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCauseInput
    dons?: DonUncheckedCreateNestedManyWithoutCauseInput
    signatories?: SignatoryUncheckedCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseCreateOrConnectWithoutAccessCodeRelInput = {
    where: CauseWhereUniqueInput
    create: XOR<CauseCreateWithoutAccessCodeRelInput, CauseUncheckedCreateWithoutAccessCodeRelInput>
  }

  export type CauseUpsertWithoutAccessCodeRelInput = {
    update: XOR<CauseUpdateWithoutAccessCodeRelInput, CauseUncheckedUpdateWithoutAccessCodeRelInput>
    create: XOR<CauseCreateWithoutAccessCodeRelInput, CauseUncheckedCreateWithoutAccessCodeRelInput>
    where?: CauseWhereInput
  }

  export type CauseUpdateToOneWithWhereWithoutAccessCodeRelInput = {
    where?: CauseWhereInput
    data: XOR<CauseUpdateWithoutAccessCodeRelInput, CauseUncheckedUpdateWithoutAccessCodeRelInput>
  }

  export type CauseUpdateWithoutAccessCodeRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    porteur?: UserUpdateOneRequiredWithoutCausesSubmittedNestedInput
    milestones?: MilestoneUpdateManyWithoutCauseNestedInput
    dons?: DonUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateWithoutAccessCodeRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutCauseNestedInput
    dons?: DonUncheckedUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUncheckedUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type UserCreateWithoutCausesSubmittedInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donsMade?: DonCreateNestedManyWithoutMeceneInput
    ceintures?: CeintureCreateNestedManyWithoutMeceneInput
  }

  export type UserUncheckedCreateWithoutCausesSubmittedInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donsMade?: DonUncheckedCreateNestedManyWithoutMeceneInput
    ceintures?: CeintureUncheckedCreateNestedManyWithoutMeceneInput
  }

  export type UserCreateOrConnectWithoutCausesSubmittedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCausesSubmittedInput, UserUncheckedCreateWithoutCausesSubmittedInput>
  }

  export type AccessCodeCreateWithoutCauseInput = {
    id?: string
    code?: string
    type?: string
    issuedBy?: string | null
    usedBy?: string | null
    usedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessCodeUncheckedCreateWithoutCauseInput = {
    id?: string
    code?: string
    type?: string
    issuedBy?: string | null
    usedBy?: string | null
    usedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessCodeCreateOrConnectWithoutCauseInput = {
    where: AccessCodeWhereUniqueInput
    create: XOR<AccessCodeCreateWithoutCauseInput, AccessCodeUncheckedCreateWithoutCauseInput>
  }

  export type MilestoneCreateWithoutCauseInput = {
    id?: string
    label: string
    target: number
    reached?: boolean
    reachedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUncheckedCreateWithoutCauseInput = {
    id?: string
    label: string
    target: number
    reached?: boolean
    reachedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneCreateOrConnectWithoutCauseInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutCauseInput, MilestoneUncheckedCreateWithoutCauseInput>
  }

  export type MilestoneCreateManyCauseInputEnvelope = {
    data: MilestoneCreateManyCauseInput | MilestoneCreateManyCauseInput[]
    skipDuplicates?: boolean
  }

  export type DonCreateWithoutCauseInput = {
    id?: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mecene?: UserCreateNestedOneWithoutDonsMadeInput
    poem?: PoemCreateNestedOneWithoutDonInput
    payment?: PaymentCreateNestedOneWithoutDonInput
  }

  export type DonUncheckedCreateWithoutCauseInput = {
    id?: string
    meceneId?: string | null
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poem?: PoemUncheckedCreateNestedOneWithoutDonInput
    payment?: PaymentUncheckedCreateNestedOneWithoutDonInput
  }

  export type DonCreateOrConnectWithoutCauseInput = {
    where: DonWhereUniqueInput
    create: XOR<DonCreateWithoutCauseInput, DonUncheckedCreateWithoutCauseInput>
  }

  export type DonCreateManyCauseInputEnvelope = {
    data: DonCreateManyCauseInput | DonCreateManyCauseInput[]
    skipDuplicates?: boolean
  }

  export type SignatoryCreateWithoutCauseInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    approvals?: PayoutApprovalCreateNestedManyWithoutSignatoryInput
  }

  export type SignatoryUncheckedCreateWithoutCauseInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    approvals?: PayoutApprovalUncheckedCreateNestedManyWithoutSignatoryInput
  }

  export type SignatoryCreateOrConnectWithoutCauseInput = {
    where: SignatoryWhereUniqueInput
    create: XOR<SignatoryCreateWithoutCauseInput, SignatoryUncheckedCreateWithoutCauseInput>
  }

  export type SignatoryCreateManyCauseInputEnvelope = {
    data: SignatoryCreateManyCauseInput | SignatoryCreateManyCauseInput[]
    skipDuplicates?: boolean
  }

  export type PayoutRequestCreateWithoutCauseInput = {
    id?: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: PayoutApprovalCreateNestedManyWithoutPayoutRequestInput
  }

  export type PayoutRequestUncheckedCreateWithoutCauseInput = {
    id?: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: PayoutApprovalUncheckedCreateNestedManyWithoutPayoutRequestInput
  }

  export type PayoutRequestCreateOrConnectWithoutCauseInput = {
    where: PayoutRequestWhereUniqueInput
    create: XOR<PayoutRequestCreateWithoutCauseInput, PayoutRequestUncheckedCreateWithoutCauseInput>
  }

  export type PayoutRequestCreateManyCauseInputEnvelope = {
    data: PayoutRequestCreateManyCauseInput | PayoutRequestCreateManyCauseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCausesSubmittedInput = {
    update: XOR<UserUpdateWithoutCausesSubmittedInput, UserUncheckedUpdateWithoutCausesSubmittedInput>
    create: XOR<UserCreateWithoutCausesSubmittedInput, UserUncheckedCreateWithoutCausesSubmittedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCausesSubmittedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCausesSubmittedInput, UserUncheckedUpdateWithoutCausesSubmittedInput>
  }

  export type UserUpdateWithoutCausesSubmittedInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donsMade?: DonUpdateManyWithoutMeceneNestedInput
    ceintures?: CeintureUpdateManyWithoutMeceneNestedInput
  }

  export type UserUncheckedUpdateWithoutCausesSubmittedInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donsMade?: DonUncheckedUpdateManyWithoutMeceneNestedInput
    ceintures?: CeintureUncheckedUpdateManyWithoutMeceneNestedInput
  }

  export type AccessCodeUpsertWithoutCauseInput = {
    update: XOR<AccessCodeUpdateWithoutCauseInput, AccessCodeUncheckedUpdateWithoutCauseInput>
    create: XOR<AccessCodeCreateWithoutCauseInput, AccessCodeUncheckedCreateWithoutCauseInput>
    where?: AccessCodeWhereInput
  }

  export type AccessCodeUpdateToOneWithWhereWithoutCauseInput = {
    where?: AccessCodeWhereInput
    data: XOR<AccessCodeUpdateWithoutCauseInput, AccessCodeUncheckedUpdateWithoutCauseInput>
  }

  export type AccessCodeUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    issuedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessCodeUncheckedUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    issuedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUpsertWithWhereUniqueWithoutCauseInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutCauseInput, MilestoneUncheckedUpdateWithoutCauseInput>
    create: XOR<MilestoneCreateWithoutCauseInput, MilestoneUncheckedCreateWithoutCauseInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutCauseInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutCauseInput, MilestoneUncheckedUpdateWithoutCauseInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutCauseInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutCauseInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    causeId?: StringFilter<"Milestone"> | string
    label?: StringFilter<"Milestone"> | string
    target?: FloatFilter<"Milestone"> | number
    reached?: BoolFilter<"Milestone"> | boolean
    reachedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
  }

  export type DonUpsertWithWhereUniqueWithoutCauseInput = {
    where: DonWhereUniqueInput
    update: XOR<DonUpdateWithoutCauseInput, DonUncheckedUpdateWithoutCauseInput>
    create: XOR<DonCreateWithoutCauseInput, DonUncheckedCreateWithoutCauseInput>
  }

  export type DonUpdateWithWhereUniqueWithoutCauseInput = {
    where: DonWhereUniqueInput
    data: XOR<DonUpdateWithoutCauseInput, DonUncheckedUpdateWithoutCauseInput>
  }

  export type DonUpdateManyWithWhereWithoutCauseInput = {
    where: DonScalarWhereInput
    data: XOR<DonUpdateManyMutationInput, DonUncheckedUpdateManyWithoutCauseInput>
  }

  export type SignatoryUpsertWithWhereUniqueWithoutCauseInput = {
    where: SignatoryWhereUniqueInput
    update: XOR<SignatoryUpdateWithoutCauseInput, SignatoryUncheckedUpdateWithoutCauseInput>
    create: XOR<SignatoryCreateWithoutCauseInput, SignatoryUncheckedCreateWithoutCauseInput>
  }

  export type SignatoryUpdateWithWhereUniqueWithoutCauseInput = {
    where: SignatoryWhereUniqueInput
    data: XOR<SignatoryUpdateWithoutCauseInput, SignatoryUncheckedUpdateWithoutCauseInput>
  }

  export type SignatoryUpdateManyWithWhereWithoutCauseInput = {
    where: SignatoryScalarWhereInput
    data: XOR<SignatoryUpdateManyMutationInput, SignatoryUncheckedUpdateManyWithoutCauseInput>
  }

  export type SignatoryScalarWhereInput = {
    AND?: SignatoryScalarWhereInput | SignatoryScalarWhereInput[]
    OR?: SignatoryScalarWhereInput[]
    NOT?: SignatoryScalarWhereInput | SignatoryScalarWhereInput[]
    id?: StringFilter<"Signatory"> | string
    causeId?: StringFilter<"Signatory"> | string
    userId?: StringFilter<"Signatory"> | string
    role?: StringFilter<"Signatory"> | string
    createdAt?: DateTimeFilter<"Signatory"> | Date | string
  }

  export type PayoutRequestUpsertWithWhereUniqueWithoutCauseInput = {
    where: PayoutRequestWhereUniqueInput
    update: XOR<PayoutRequestUpdateWithoutCauseInput, PayoutRequestUncheckedUpdateWithoutCauseInput>
    create: XOR<PayoutRequestCreateWithoutCauseInput, PayoutRequestUncheckedCreateWithoutCauseInput>
  }

  export type PayoutRequestUpdateWithWhereUniqueWithoutCauseInput = {
    where: PayoutRequestWhereUniqueInput
    data: XOR<PayoutRequestUpdateWithoutCauseInput, PayoutRequestUncheckedUpdateWithoutCauseInput>
  }

  export type PayoutRequestUpdateManyWithWhereWithoutCauseInput = {
    where: PayoutRequestScalarWhereInput
    data: XOR<PayoutRequestUpdateManyMutationInput, PayoutRequestUncheckedUpdateManyWithoutCauseInput>
  }

  export type PayoutRequestScalarWhereInput = {
    AND?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
    OR?: PayoutRequestScalarWhereInput[]
    NOT?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
    id?: StringFilter<"PayoutRequest"> | string
    causeId?: StringFilter<"PayoutRequest"> | string
    amount?: FloatFilter<"PayoutRequest"> | number
    currency?: StringFilter<"PayoutRequest"> | string
    provider?: StringFilter<"PayoutRequest"> | string
    providerRef?: StringNullableFilter<"PayoutRequest"> | string | null
    payoutModel?: StringFilter<"PayoutRequest"> | string
    status?: StringFilter<"PayoutRequest"> | string
    approvalThreshold?: IntFilter<"PayoutRequest"> | number
    createdAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutRequest"> | Date | string
  }

  export type CauseCreateWithoutMilestonesInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    porteur: UserCreateNestedOneWithoutCausesSubmittedInput
    accessCodeRel?: AccessCodeCreateNestedOneWithoutCauseInput
    dons?: DonCreateNestedManyWithoutCauseInput
    signatories?: SignatoryCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateWithoutMilestonesInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dons?: DonUncheckedCreateNestedManyWithoutCauseInput
    signatories?: SignatoryUncheckedCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseCreateOrConnectWithoutMilestonesInput = {
    where: CauseWhereUniqueInput
    create: XOR<CauseCreateWithoutMilestonesInput, CauseUncheckedCreateWithoutMilestonesInput>
  }

  export type CauseUpsertWithoutMilestonesInput = {
    update: XOR<CauseUpdateWithoutMilestonesInput, CauseUncheckedUpdateWithoutMilestonesInput>
    create: XOR<CauseCreateWithoutMilestonesInput, CauseUncheckedCreateWithoutMilestonesInput>
    where?: CauseWhereInput
  }

  export type CauseUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: CauseWhereInput
    data: XOR<CauseUpdateWithoutMilestonesInput, CauseUncheckedUpdateWithoutMilestonesInput>
  }

  export type CauseUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    porteur?: UserUpdateOneRequiredWithoutCausesSubmittedNestedInput
    accessCodeRel?: AccessCodeUpdateOneWithoutCauseNestedInput
    dons?: DonUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dons?: DonUncheckedUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUncheckedUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type CauseCreateWithoutDonsInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    porteur: UserCreateNestedOneWithoutCausesSubmittedInput
    accessCodeRel?: AccessCodeCreateNestedOneWithoutCauseInput
    milestones?: MilestoneCreateNestedManyWithoutCauseInput
    signatories?: SignatoryCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateWithoutDonsInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCauseInput
    signatories?: SignatoryUncheckedCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseCreateOrConnectWithoutDonsInput = {
    where: CauseWhereUniqueInput
    create: XOR<CauseCreateWithoutDonsInput, CauseUncheckedCreateWithoutDonsInput>
  }

  export type UserCreateWithoutDonsMadeInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    causesSubmitted?: CauseCreateNestedManyWithoutPorteurInput
    ceintures?: CeintureCreateNestedManyWithoutMeceneInput
  }

  export type UserUncheckedCreateWithoutDonsMadeInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    causesSubmitted?: CauseUncheckedCreateNestedManyWithoutPorteurInput
    ceintures?: CeintureUncheckedCreateNestedManyWithoutMeceneInput
  }

  export type UserCreateOrConnectWithoutDonsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonsMadeInput, UserUncheckedCreateWithoutDonsMadeInput>
  }

  export type PoemCreateWithoutDonInput = {
    id?: string
    content: string
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: Date | string
  }

  export type PoemUncheckedCreateWithoutDonInput = {
    id?: string
    content: string
    generated?: boolean
    validated?: boolean
    published?: boolean
    createdAt?: Date | string
  }

  export type PoemCreateOrConnectWithoutDonInput = {
    where: PoemWhereUniqueInput
    create: XOR<PoemCreateWithoutDonInput, PoemUncheckedCreateWithoutDonInput>
  }

  export type PaymentCreateWithoutDonInput = {
    id?: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    webhookEvents?: WebhookEventCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutDonInput = {
    id?: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    webhookEvents?: WebhookEventUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutDonInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutDonInput, PaymentUncheckedCreateWithoutDonInput>
  }

  export type CauseUpsertWithoutDonsInput = {
    update: XOR<CauseUpdateWithoutDonsInput, CauseUncheckedUpdateWithoutDonsInput>
    create: XOR<CauseCreateWithoutDonsInput, CauseUncheckedCreateWithoutDonsInput>
    where?: CauseWhereInput
  }

  export type CauseUpdateToOneWithWhereWithoutDonsInput = {
    where?: CauseWhereInput
    data: XOR<CauseUpdateWithoutDonsInput, CauseUncheckedUpdateWithoutDonsInput>
  }

  export type CauseUpdateWithoutDonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    porteur?: UserUpdateOneRequiredWithoutCausesSubmittedNestedInput
    accessCodeRel?: AccessCodeUpdateOneWithoutCauseNestedInput
    milestones?: MilestoneUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateWithoutDonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUncheckedUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type UserUpsertWithoutDonsMadeInput = {
    update: XOR<UserUpdateWithoutDonsMadeInput, UserUncheckedUpdateWithoutDonsMadeInput>
    create: XOR<UserCreateWithoutDonsMadeInput, UserUncheckedCreateWithoutDonsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonsMadeInput, UserUncheckedUpdateWithoutDonsMadeInput>
  }

  export type UserUpdateWithoutDonsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    causesSubmitted?: CauseUpdateManyWithoutPorteurNestedInput
    ceintures?: CeintureUpdateManyWithoutMeceneNestedInput
  }

  export type UserUncheckedUpdateWithoutDonsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    causesSubmitted?: CauseUncheckedUpdateManyWithoutPorteurNestedInput
    ceintures?: CeintureUncheckedUpdateManyWithoutMeceneNestedInput
  }

  export type PoemUpsertWithoutDonInput = {
    update: XOR<PoemUpdateWithoutDonInput, PoemUncheckedUpdateWithoutDonInput>
    create: XOR<PoemCreateWithoutDonInput, PoemUncheckedCreateWithoutDonInput>
    where?: PoemWhereInput
  }

  export type PoemUpdateToOneWithWhereWithoutDonInput = {
    where?: PoemWhereInput
    data: XOR<PoemUpdateWithoutDonInput, PoemUncheckedUpdateWithoutDonInput>
  }

  export type PoemUpdateWithoutDonInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generated?: BoolFieldUpdateOperationsInput | boolean
    validated?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoemUncheckedUpdateWithoutDonInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generated?: BoolFieldUpdateOperationsInput | boolean
    validated?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutDonInput = {
    update: XOR<PaymentUpdateWithoutDonInput, PaymentUncheckedUpdateWithoutDonInput>
    create: XOR<PaymentCreateWithoutDonInput, PaymentUncheckedCreateWithoutDonInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutDonInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutDonInput, PaymentUncheckedUpdateWithoutDonInput>
  }

  export type PaymentUpdateWithoutDonInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhookEvents?: WebhookEventUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutDonInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhookEvents?: WebhookEventUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type DonCreateWithoutPaymentInput = {
    id?: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutDonsInput
    mecene?: UserCreateNestedOneWithoutDonsMadeInput
    poem?: PoemCreateNestedOneWithoutDonInput
  }

  export type DonUncheckedCreateWithoutPaymentInput = {
    id?: string
    causeId: string
    meceneId?: string | null
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poem?: PoemUncheckedCreateNestedOneWithoutDonInput
  }

  export type DonCreateOrConnectWithoutPaymentInput = {
    where: DonWhereUniqueInput
    create: XOR<DonCreateWithoutPaymentInput, DonUncheckedCreateWithoutPaymentInput>
  }

  export type WebhookEventCreateWithoutPaymentInput = {
    id?: string
    provider: string
    eventId: string
    eventType?: string | null
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUncheckedCreateWithoutPaymentInput = {
    id?: string
    provider: string
    eventId: string
    eventType?: string | null
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventCreateOrConnectWithoutPaymentInput = {
    where: WebhookEventWhereUniqueInput
    create: XOR<WebhookEventCreateWithoutPaymentInput, WebhookEventUncheckedCreateWithoutPaymentInput>
  }

  export type WebhookEventCreateManyPaymentInputEnvelope = {
    data: WebhookEventCreateManyPaymentInput | WebhookEventCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type DonUpsertWithoutPaymentInput = {
    update: XOR<DonUpdateWithoutPaymentInput, DonUncheckedUpdateWithoutPaymentInput>
    create: XOR<DonCreateWithoutPaymentInput, DonUncheckedCreateWithoutPaymentInput>
    where?: DonWhereInput
  }

  export type DonUpdateToOneWithWhereWithoutPaymentInput = {
    where?: DonWhereInput
    data: XOR<DonUpdateWithoutPaymentInput, DonUncheckedUpdateWithoutPaymentInput>
  }

  export type DonUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutDonsNestedInput
    mecene?: UserUpdateOneWithoutDonsMadeNestedInput
    poem?: PoemUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    meceneId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poem?: PoemUncheckedUpdateOneWithoutDonNestedInput
  }

  export type WebhookEventUpsertWithWhereUniqueWithoutPaymentInput = {
    where: WebhookEventWhereUniqueInput
    update: XOR<WebhookEventUpdateWithoutPaymentInput, WebhookEventUncheckedUpdateWithoutPaymentInput>
    create: XOR<WebhookEventCreateWithoutPaymentInput, WebhookEventUncheckedCreateWithoutPaymentInput>
  }

  export type WebhookEventUpdateWithWhereUniqueWithoutPaymentInput = {
    where: WebhookEventWhereUniqueInput
    data: XOR<WebhookEventUpdateWithoutPaymentInput, WebhookEventUncheckedUpdateWithoutPaymentInput>
  }

  export type WebhookEventUpdateManyWithWhereWithoutPaymentInput = {
    where: WebhookEventScalarWhereInput
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyWithoutPaymentInput>
  }

  export type WebhookEventScalarWhereInput = {
    AND?: WebhookEventScalarWhereInput | WebhookEventScalarWhereInput[]
    OR?: WebhookEventScalarWhereInput[]
    NOT?: WebhookEventScalarWhereInput | WebhookEventScalarWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    provider?: StringFilter<"WebhookEvent"> | string
    eventId?: StringFilter<"WebhookEvent"> | string
    eventType?: StringNullableFilter<"WebhookEvent"> | string | null
    paymentId?: StringNullableFilter<"WebhookEvent"> | string | null
    payload?: JsonFilter<"WebhookEvent">
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }

  export type PaymentCreateWithoutWebhookEventsInput = {
    id?: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    don: DonCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutWebhookEventsInput = {
    id?: string
    donId: string
    provider: string
    providerRef?: string | null
    status?: string
    checkoutUrl?: string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutWebhookEventsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutWebhookEventsInput, PaymentUncheckedCreateWithoutWebhookEventsInput>
  }

  export type PaymentUpsertWithoutWebhookEventsInput = {
    update: XOR<PaymentUpdateWithoutWebhookEventsInput, PaymentUncheckedUpdateWithoutWebhookEventsInput>
    create: XOR<PaymentCreateWithoutWebhookEventsInput, PaymentUncheckedCreateWithoutWebhookEventsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutWebhookEventsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutWebhookEventsInput, PaymentUncheckedUpdateWithoutWebhookEventsInput>
  }

  export type PaymentUpdateWithoutWebhookEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    don?: DonUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutWebhookEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    donId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkoutUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CauseCreateWithoutSignatoriesInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    porteur: UserCreateNestedOneWithoutCausesSubmittedInput
    accessCodeRel?: AccessCodeCreateNestedOneWithoutCauseInput
    milestones?: MilestoneCreateNestedManyWithoutCauseInput
    dons?: DonCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateWithoutSignatoriesInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCauseInput
    dons?: DonUncheckedCreateNestedManyWithoutCauseInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseCreateOrConnectWithoutSignatoriesInput = {
    where: CauseWhereUniqueInput
    create: XOR<CauseCreateWithoutSignatoriesInput, CauseUncheckedCreateWithoutSignatoriesInput>
  }

  export type PayoutApprovalCreateWithoutSignatoryInput = {
    id?: string
    approvedAt?: Date | string
    payoutRequest: PayoutRequestCreateNestedOneWithoutApprovalsInput
  }

  export type PayoutApprovalUncheckedCreateWithoutSignatoryInput = {
    id?: string
    payoutRequestId: string
    approvedAt?: Date | string
  }

  export type PayoutApprovalCreateOrConnectWithoutSignatoryInput = {
    where: PayoutApprovalWhereUniqueInput
    create: XOR<PayoutApprovalCreateWithoutSignatoryInput, PayoutApprovalUncheckedCreateWithoutSignatoryInput>
  }

  export type PayoutApprovalCreateManySignatoryInputEnvelope = {
    data: PayoutApprovalCreateManySignatoryInput | PayoutApprovalCreateManySignatoryInput[]
    skipDuplicates?: boolean
  }

  export type CauseUpsertWithoutSignatoriesInput = {
    update: XOR<CauseUpdateWithoutSignatoriesInput, CauseUncheckedUpdateWithoutSignatoriesInput>
    create: XOR<CauseCreateWithoutSignatoriesInput, CauseUncheckedCreateWithoutSignatoriesInput>
    where?: CauseWhereInput
  }

  export type CauseUpdateToOneWithWhereWithoutSignatoriesInput = {
    where?: CauseWhereInput
    data: XOR<CauseUpdateWithoutSignatoriesInput, CauseUncheckedUpdateWithoutSignatoriesInput>
  }

  export type CauseUpdateWithoutSignatoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    porteur?: UserUpdateOneRequiredWithoutCausesSubmittedNestedInput
    accessCodeRel?: AccessCodeUpdateOneWithoutCauseNestedInput
    milestones?: MilestoneUpdateManyWithoutCauseNestedInput
    dons?: DonUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateWithoutSignatoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutCauseNestedInput
    dons?: DonUncheckedUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type PayoutApprovalUpsertWithWhereUniqueWithoutSignatoryInput = {
    where: PayoutApprovalWhereUniqueInput
    update: XOR<PayoutApprovalUpdateWithoutSignatoryInput, PayoutApprovalUncheckedUpdateWithoutSignatoryInput>
    create: XOR<PayoutApprovalCreateWithoutSignatoryInput, PayoutApprovalUncheckedCreateWithoutSignatoryInput>
  }

  export type PayoutApprovalUpdateWithWhereUniqueWithoutSignatoryInput = {
    where: PayoutApprovalWhereUniqueInput
    data: XOR<PayoutApprovalUpdateWithoutSignatoryInput, PayoutApprovalUncheckedUpdateWithoutSignatoryInput>
  }

  export type PayoutApprovalUpdateManyWithWhereWithoutSignatoryInput = {
    where: PayoutApprovalScalarWhereInput
    data: XOR<PayoutApprovalUpdateManyMutationInput, PayoutApprovalUncheckedUpdateManyWithoutSignatoryInput>
  }

  export type PayoutApprovalScalarWhereInput = {
    AND?: PayoutApprovalScalarWhereInput | PayoutApprovalScalarWhereInput[]
    OR?: PayoutApprovalScalarWhereInput[]
    NOT?: PayoutApprovalScalarWhereInput | PayoutApprovalScalarWhereInput[]
    id?: StringFilter<"PayoutApproval"> | string
    payoutRequestId?: StringFilter<"PayoutApproval"> | string
    signatoryId?: StringFilter<"PayoutApproval"> | string
    approvedAt?: DateTimeFilter<"PayoutApproval"> | Date | string
  }

  export type CauseCreateWithoutPayoutRequestsInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    porteur: UserCreateNestedOneWithoutCausesSubmittedInput
    accessCodeRel?: AccessCodeCreateNestedOneWithoutCauseInput
    milestones?: MilestoneCreateNestedManyWithoutCauseInput
    dons?: DonCreateNestedManyWithoutCauseInput
    signatories?: SignatoryCreateNestedManyWithoutCauseInput
  }

  export type CauseUncheckedCreateWithoutPayoutRequestsInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    porteurId: string
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCauseInput
    dons?: DonUncheckedCreateNestedManyWithoutCauseInput
    signatories?: SignatoryUncheckedCreateNestedManyWithoutCauseInput
  }

  export type CauseCreateOrConnectWithoutPayoutRequestsInput = {
    where: CauseWhereUniqueInput
    create: XOR<CauseCreateWithoutPayoutRequestsInput, CauseUncheckedCreateWithoutPayoutRequestsInput>
  }

  export type PayoutApprovalCreateWithoutPayoutRequestInput = {
    id?: string
    approvedAt?: Date | string
    signatory: SignatoryCreateNestedOneWithoutApprovalsInput
  }

  export type PayoutApprovalUncheckedCreateWithoutPayoutRequestInput = {
    id?: string
    signatoryId: string
    approvedAt?: Date | string
  }

  export type PayoutApprovalCreateOrConnectWithoutPayoutRequestInput = {
    where: PayoutApprovalWhereUniqueInput
    create: XOR<PayoutApprovalCreateWithoutPayoutRequestInput, PayoutApprovalUncheckedCreateWithoutPayoutRequestInput>
  }

  export type PayoutApprovalCreateManyPayoutRequestInputEnvelope = {
    data: PayoutApprovalCreateManyPayoutRequestInput | PayoutApprovalCreateManyPayoutRequestInput[]
    skipDuplicates?: boolean
  }

  export type CauseUpsertWithoutPayoutRequestsInput = {
    update: XOR<CauseUpdateWithoutPayoutRequestsInput, CauseUncheckedUpdateWithoutPayoutRequestsInput>
    create: XOR<CauseCreateWithoutPayoutRequestsInput, CauseUncheckedCreateWithoutPayoutRequestsInput>
    where?: CauseWhereInput
  }

  export type CauseUpdateToOneWithWhereWithoutPayoutRequestsInput = {
    where?: CauseWhereInput
    data: XOR<CauseUpdateWithoutPayoutRequestsInput, CauseUncheckedUpdateWithoutPayoutRequestsInput>
  }

  export type CauseUpdateWithoutPayoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    porteur?: UserUpdateOneRequiredWithoutCausesSubmittedNestedInput
    accessCodeRel?: AccessCodeUpdateOneWithoutCauseNestedInput
    milestones?: MilestoneUpdateManyWithoutCauseNestedInput
    dons?: DonUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateWithoutPayoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    porteurId?: StringFieldUpdateOperationsInput | string
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutCauseNestedInput
    dons?: DonUncheckedUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type PayoutApprovalUpsertWithWhereUniqueWithoutPayoutRequestInput = {
    where: PayoutApprovalWhereUniqueInput
    update: XOR<PayoutApprovalUpdateWithoutPayoutRequestInput, PayoutApprovalUncheckedUpdateWithoutPayoutRequestInput>
    create: XOR<PayoutApprovalCreateWithoutPayoutRequestInput, PayoutApprovalUncheckedCreateWithoutPayoutRequestInput>
  }

  export type PayoutApprovalUpdateWithWhereUniqueWithoutPayoutRequestInput = {
    where: PayoutApprovalWhereUniqueInput
    data: XOR<PayoutApprovalUpdateWithoutPayoutRequestInput, PayoutApprovalUncheckedUpdateWithoutPayoutRequestInput>
  }

  export type PayoutApprovalUpdateManyWithWhereWithoutPayoutRequestInput = {
    where: PayoutApprovalScalarWhereInput
    data: XOR<PayoutApprovalUpdateManyMutationInput, PayoutApprovalUncheckedUpdateManyWithoutPayoutRequestInput>
  }

  export type PayoutRequestCreateWithoutApprovalsInput = {
    id?: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutPayoutRequestsInput
  }

  export type PayoutRequestUncheckedCreateWithoutApprovalsInput = {
    id?: string
    causeId: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutRequestCreateOrConnectWithoutApprovalsInput = {
    where: PayoutRequestWhereUniqueInput
    create: XOR<PayoutRequestCreateWithoutApprovalsInput, PayoutRequestUncheckedCreateWithoutApprovalsInput>
  }

  export type SignatoryCreateWithoutApprovalsInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    cause: CauseCreateNestedOneWithoutSignatoriesInput
  }

  export type SignatoryUncheckedCreateWithoutApprovalsInput = {
    id?: string
    causeId: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type SignatoryCreateOrConnectWithoutApprovalsInput = {
    where: SignatoryWhereUniqueInput
    create: XOR<SignatoryCreateWithoutApprovalsInput, SignatoryUncheckedCreateWithoutApprovalsInput>
  }

  export type PayoutRequestUpsertWithoutApprovalsInput = {
    update: XOR<PayoutRequestUpdateWithoutApprovalsInput, PayoutRequestUncheckedUpdateWithoutApprovalsInput>
    create: XOR<PayoutRequestCreateWithoutApprovalsInput, PayoutRequestUncheckedCreateWithoutApprovalsInput>
    where?: PayoutRequestWhereInput
  }

  export type PayoutRequestUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: PayoutRequestWhereInput
    data: XOR<PayoutRequestUpdateWithoutApprovalsInput, PayoutRequestUncheckedUpdateWithoutApprovalsInput>
  }

  export type PayoutRequestUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutPayoutRequestsNestedInput
  }

  export type PayoutRequestUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatoryUpsertWithoutApprovalsInput = {
    update: XOR<SignatoryUpdateWithoutApprovalsInput, SignatoryUncheckedUpdateWithoutApprovalsInput>
    create: XOR<SignatoryCreateWithoutApprovalsInput, SignatoryUncheckedCreateWithoutApprovalsInput>
    where?: SignatoryWhereInput
  }

  export type SignatoryUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: SignatoryWhereInput
    data: XOR<SignatoryUpdateWithoutApprovalsInput, SignatoryUncheckedUpdateWithoutApprovalsInput>
  }

  export type SignatoryUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutSignatoriesNestedInput
  }

  export type SignatoryUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCeinturesInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    causesSubmitted?: CauseCreateNestedManyWithoutPorteurInput
    donsMade?: DonCreateNestedManyWithoutMeceneInput
  }

  export type UserUncheckedCreateWithoutCeinturesInput = {
    id?: string
    role?: string
    email: string
    name?: string | null
    phone?: string | null
    city?: string | null
    country?: string | null
    mobileMoneyConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    causesSubmitted?: CauseUncheckedCreateNestedManyWithoutPorteurInput
    donsMade?: DonUncheckedCreateNestedManyWithoutMeceneInput
  }

  export type UserCreateOrConnectWithoutCeinturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCeinturesInput, UserUncheckedCreateWithoutCeinturesInput>
  }

  export type UserUpsertWithoutCeinturesInput = {
    update: XOR<UserUpdateWithoutCeinturesInput, UserUncheckedUpdateWithoutCeinturesInput>
    create: XOR<UserCreateWithoutCeinturesInput, UserUncheckedCreateWithoutCeinturesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCeinturesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCeinturesInput, UserUncheckedUpdateWithoutCeinturesInput>
  }

  export type UserUpdateWithoutCeinturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    causesSubmitted?: CauseUpdateManyWithoutPorteurNestedInput
    donsMade?: DonUpdateManyWithoutMeceneNestedInput
  }

  export type UserUncheckedUpdateWithoutCeinturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    causesSubmitted?: CauseUncheckedUpdateManyWithoutPorteurNestedInput
    donsMade?: DonUncheckedUpdateManyWithoutMeceneNestedInput
  }

  export type DonCreateWithoutPoemInput = {
    id?: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cause: CauseCreateNestedOneWithoutDonsInput
    mecene?: UserCreateNestedOneWithoutDonsMadeInput
    payment?: PaymentCreateNestedOneWithoutDonInput
  }

  export type DonUncheckedCreateWithoutPoemInput = {
    id?: string
    causeId: string
    meceneId?: string | null
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutDonInput
  }

  export type DonCreateOrConnectWithoutPoemInput = {
    where: DonWhereUniqueInput
    create: XOR<DonCreateWithoutPoemInput, DonUncheckedCreateWithoutPoemInput>
  }

  export type DonUpsertWithoutPoemInput = {
    update: XOR<DonUpdateWithoutPoemInput, DonUncheckedUpdateWithoutPoemInput>
    create: XOR<DonCreateWithoutPoemInput, DonUncheckedCreateWithoutPoemInput>
    where?: DonWhereInput
  }

  export type DonUpdateToOneWithWhereWithoutPoemInput = {
    where?: DonWhereInput
    data: XOR<DonUpdateWithoutPoemInput, DonUncheckedUpdateWithoutPoemInput>
  }

  export type DonUpdateWithoutPoemInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutDonsNestedInput
    mecene?: UserUpdateOneWithoutDonsMadeNestedInput
    payment?: PaymentUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateWithoutPoemInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    meceneId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutDonNestedInput
  }

  export type CauseCreateManyPorteurInput = {
    id?: string
    slug: string
    title: string
    summary?: string | null
    description: string
    type?: string | null
    city?: string | null
    country?: string | null
    reference?: string | null
    goalAmount?: number | null
    currency?: string
    status?: string
    payoutModel?: string
    approvalThreshold?: number
    fundManagerRef?: string | null
    accessCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonCreateManyMeceneInput = {
    id?: string
    causeId: string
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CeintureCreateManyMeceneInput = {
    id?: string
    level: string
    awardedAt?: Date | string
    note?: string | null
    createdAt?: Date | string
  }

  export type CauseUpdateWithoutPorteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessCodeRel?: AccessCodeUpdateOneWithoutCauseNestedInput
    milestones?: MilestoneUpdateManyWithoutCauseNestedInput
    dons?: DonUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateWithoutPorteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutCauseNestedInput
    dons?: DonUncheckedUpdateManyWithoutCauseNestedInput
    signatories?: SignatoryUncheckedUpdateManyWithoutCauseNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutCauseNestedInput
  }

  export type CauseUncheckedUpdateManyWithoutPorteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payoutModel?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    fundManagerRef?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonUpdateWithoutMeceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cause?: CauseUpdateOneRequiredWithoutDonsNestedInput
    poem?: PoemUpdateOneWithoutDonNestedInput
    payment?: PaymentUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateWithoutMeceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poem?: PoemUncheckedUpdateOneWithoutDonNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateManyWithoutMeceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    causeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeintureUpdateWithoutMeceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeintureUncheckedUpdateWithoutMeceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeintureUncheckedUpdateManyWithoutMeceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateManyCauseInput = {
    id?: string
    label: string
    target: number
    reached?: boolean
    reachedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonCreateManyCauseInput = {
    id?: string
    meceneId?: string | null
    amount: number
    currency?: string
    commission: number
    netPorteur: number
    method?: string
    status?: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SignatoryCreateManyCauseInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type PayoutRequestCreateManyCauseInput = {
    id?: string
    amount: number
    currency: string
    provider: string
    providerRef?: string | null
    payoutModel: string
    status?: string
    approvalThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    reached?: BoolFieldUpdateOperationsInput | boolean
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mecene?: UserUpdateOneWithoutDonsMadeNestedInput
    poem?: PoemUpdateOneWithoutDonNestedInput
    payment?: PaymentUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    meceneId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poem?: PoemUncheckedUpdateOneWithoutDonNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutDonNestedInput
  }

  export type DonUncheckedUpdateManyWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    meceneId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    commission?: FloatFieldUpdateOperationsInput | number
    netPorteur?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatoryUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: PayoutApprovalUpdateManyWithoutSignatoryNestedInput
  }

  export type SignatoryUncheckedUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: PayoutApprovalUncheckedUpdateManyWithoutSignatoryNestedInput
  }

  export type SignatoryUncheckedUpdateManyWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: PayoutApprovalUpdateManyWithoutPayoutRequestNestedInput
  }

  export type PayoutRequestUncheckedUpdateWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: PayoutApprovalUncheckedUpdateManyWithoutPayoutRequestNestedInput
  }

  export type PayoutRequestUncheckedUpdateManyWithoutCauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    payoutModel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateManyPaymentInput = {
    id?: string
    provider: string
    eventId: string
    eventType?: string | null
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalCreateManySignatoryInput = {
    id?: string
    payoutRequestId: string
    approvedAt?: Date | string
  }

  export type PayoutApprovalUpdateWithoutSignatoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutRequest?: PayoutRequestUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type PayoutApprovalUncheckedUpdateWithoutSignatoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    payoutRequestId?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalUncheckedUpdateManyWithoutSignatoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    payoutRequestId?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalCreateManyPayoutRequestInput = {
    id?: string
    signatoryId: string
    approvedAt?: Date | string
  }

  export type PayoutApprovalUpdateWithoutPayoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatory?: SignatoryUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type PayoutApprovalUncheckedUpdateWithoutPayoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    signatoryId?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutApprovalUncheckedUpdateManyWithoutPayoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    signatoryId?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}