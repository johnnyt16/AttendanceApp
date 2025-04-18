
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
 * Model attendance_records
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type attendance_records = $Result.DefaultSelection<Prisma.$attendance_recordsPayload>
/**
 * Model camera_captures
 * 
 */
export type camera_captures = $Result.DefaultSelection<Prisma.$camera_capturesPayload>
/**
 * Model cameras
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type cameras = $Result.DefaultSelection<Prisma.$camerasPayload>
/**
 * Model classes
 * 
 */
export type classes = $Result.DefaultSelection<Prisma.$classesPayload>
/**
 * Model enrollments
 * 
 */
export type enrollments = $Result.DefaultSelection<Prisma.$enrollmentsPayload>
/**
 * Model recognized_faces
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type recognized_faces = $Result.DefaultSelection<Prisma.$recognized_facesPayload>
/**
 * Model schools
 * 
 */
export type schools = $Result.DefaultSelection<Prisma.$schoolsPayload>
/**
 * Model student_images
 * 
 */
export type student_images = $Result.DefaultSelection<Prisma.$student_imagesPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendance_records
 * const attendance_records = await prisma.attendance_records.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Attendance_records
   * const attendance_records = await prisma.attendance_records.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.attendance_records`: Exposes CRUD operations for the **attendance_records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendance_records
    * const attendance_records = await prisma.attendance_records.findMany()
    * ```
    */
  get attendance_records(): Prisma.attendance_recordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.camera_captures`: Exposes CRUD operations for the **camera_captures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Camera_captures
    * const camera_captures = await prisma.camera_captures.findMany()
    * ```
    */
  get camera_captures(): Prisma.camera_capturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cameras`: Exposes CRUD operations for the **cameras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cameras
    * const cameras = await prisma.cameras.findMany()
    * ```
    */
  get cameras(): Prisma.camerasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.classesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollments`: Exposes CRUD operations for the **enrollments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollments.findMany()
    * ```
    */
  get enrollments(): Prisma.enrollmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recognized_faces`: Exposes CRUD operations for the **recognized_faces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recognized_faces
    * const recognized_faces = await prisma.recognized_faces.findMany()
    * ```
    */
  get recognized_faces(): Prisma.recognized_facesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schools`: Exposes CRUD operations for the **schools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.schools.findMany()
    * ```
    */
  get schools(): Prisma.schoolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_images`: Exposes CRUD operations for the **student_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_images
    * const student_images = await prisma.student_images.findMany()
    * ```
    */
  get student_images(): Prisma.student_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    attendance_records: 'attendance_records',
    camera_captures: 'camera_captures',
    cameras: 'cameras',
    classes: 'classes',
    enrollments: 'enrollments',
    recognized_faces: 'recognized_faces',
    schools: 'schools',
    student_images: 'student_images',
    students: 'students',
    users: 'users'
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
      modelProps: "attendance_records" | "camera_captures" | "cameras" | "classes" | "enrollments" | "recognized_faces" | "schools" | "student_images" | "students" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      attendance_records: {
        payload: Prisma.$attendance_recordsPayload<ExtArgs>
        fields: Prisma.attendance_recordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendance_recordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendance_recordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>
          }
          findFirst: {
            args: Prisma.attendance_recordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendance_recordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>
          }
          findMany: {
            args: Prisma.attendance_recordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>[]
          }
          create: {
            args: Prisma.attendance_recordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>
          }
          createMany: {
            args: Prisma.attendance_recordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attendance_recordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>[]
          }
          delete: {
            args: Prisma.attendance_recordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>
          }
          update: {
            args: Prisma.attendance_recordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>
          }
          deleteMany: {
            args: Prisma.attendance_recordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendance_recordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attendance_recordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>[]
          }
          upsert: {
            args: Prisma.attendance_recordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendance_recordsPayload>
          }
          aggregate: {
            args: Prisma.Attendance_recordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance_records>
          }
          groupBy: {
            args: Prisma.attendance_recordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Attendance_recordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendance_recordsCountArgs<ExtArgs>
            result: $Utils.Optional<Attendance_recordsCountAggregateOutputType> | number
          }
        }
      }
      camera_captures: {
        payload: Prisma.$camera_capturesPayload<ExtArgs>
        fields: Prisma.camera_capturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.camera_capturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.camera_capturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>
          }
          findFirst: {
            args: Prisma.camera_capturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.camera_capturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>
          }
          findMany: {
            args: Prisma.camera_capturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>[]
          }
          create: {
            args: Prisma.camera_capturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>
          }
          createMany: {
            args: Prisma.camera_capturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.camera_capturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>[]
          }
          delete: {
            args: Prisma.camera_capturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>
          }
          update: {
            args: Prisma.camera_capturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>
          }
          deleteMany: {
            args: Prisma.camera_capturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.camera_capturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.camera_capturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>[]
          }
          upsert: {
            args: Prisma.camera_capturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_capturesPayload>
          }
          aggregate: {
            args: Prisma.Camera_capturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCamera_captures>
          }
          groupBy: {
            args: Prisma.camera_capturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Camera_capturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.camera_capturesCountArgs<ExtArgs>
            result: $Utils.Optional<Camera_capturesCountAggregateOutputType> | number
          }
        }
      }
      cameras: {
        payload: Prisma.$camerasPayload<ExtArgs>
        fields: Prisma.camerasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.camerasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.camerasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>
          }
          findFirst: {
            args: Prisma.camerasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.camerasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>
          }
          findMany: {
            args: Prisma.camerasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>[]
          }
          create: {
            args: Prisma.camerasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>
          }
          createMany: {
            args: Prisma.camerasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.camerasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>[]
          }
          delete: {
            args: Prisma.camerasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>
          }
          update: {
            args: Prisma.camerasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>
          }
          deleteMany: {
            args: Prisma.camerasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.camerasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.camerasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>[]
          }
          upsert: {
            args: Prisma.camerasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camerasPayload>
          }
          aggregate: {
            args: Prisma.CamerasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCameras>
          }
          groupBy: {
            args: Prisma.camerasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CamerasGroupByOutputType>[]
          }
          count: {
            args: Prisma.camerasCountArgs<ExtArgs>
            result: $Utils.Optional<CamerasCountAggregateOutputType> | number
          }
        }
      }
      classes: {
        payload: Prisma.$classesPayload<ExtArgs>
        fields: Prisma.classesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findFirst: {
            args: Prisma.classesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findMany: {
            args: Prisma.classesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          create: {
            args: Prisma.classesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          createMany: {
            args: Prisma.classesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.classesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          delete: {
            args: Prisma.classesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          update: {
            args: Prisma.classesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          deleteMany: {
            args: Prisma.classesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.classesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          upsert: {
            args: Prisma.classesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          aggregate: {
            args: Prisma.ClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasses>
          }
          groupBy: {
            args: Prisma.classesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.classesCountArgs<ExtArgs>
            result: $Utils.Optional<ClassesCountAggregateOutputType> | number
          }
        }
      }
      enrollments: {
        payload: Prisma.$enrollmentsPayload<ExtArgs>
        fields: Prisma.enrollmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          findFirst: {
            args: Prisma.enrollmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          findMany: {
            args: Prisma.enrollmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          create: {
            args: Prisma.enrollmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          createMany: {
            args: Prisma.enrollmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enrollmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          delete: {
            args: Prisma.enrollmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          update: {
            args: Prisma.enrollmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          deleteMany: {
            args: Prisma.enrollmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enrollmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          upsert: {
            args: Prisma.enrollmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollments>
          }
          groupBy: {
            args: Prisma.enrollmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollmentsCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsCountAggregateOutputType> | number
          }
        }
      }
      recognized_faces: {
        payload: Prisma.$recognized_facesPayload<ExtArgs>
        fields: Prisma.recognized_facesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recognized_facesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recognized_facesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>
          }
          findFirst: {
            args: Prisma.recognized_facesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recognized_facesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>
          }
          findMany: {
            args: Prisma.recognized_facesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>[]
          }
          create: {
            args: Prisma.recognized_facesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>
          }
          createMany: {
            args: Prisma.recognized_facesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recognized_facesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>[]
          }
          delete: {
            args: Prisma.recognized_facesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>
          }
          update: {
            args: Prisma.recognized_facesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>
          }
          deleteMany: {
            args: Prisma.recognized_facesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recognized_facesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recognized_facesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>[]
          }
          upsert: {
            args: Prisma.recognized_facesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recognized_facesPayload>
          }
          aggregate: {
            args: Prisma.Recognized_facesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecognized_faces>
          }
          groupBy: {
            args: Prisma.recognized_facesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recognized_facesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recognized_facesCountArgs<ExtArgs>
            result: $Utils.Optional<Recognized_facesCountAggregateOutputType> | number
          }
        }
      }
      schools: {
        payload: Prisma.$schoolsPayload<ExtArgs>
        fields: Prisma.schoolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schoolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schoolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findFirst: {
            args: Prisma.schoolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schoolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findMany: {
            args: Prisma.schoolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          create: {
            args: Prisma.schoolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          createMany: {
            args: Prisma.schoolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.schoolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          delete: {
            args: Prisma.schoolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          update: {
            args: Prisma.schoolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          deleteMany: {
            args: Prisma.schoolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schoolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.schoolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          upsert: {
            args: Prisma.schoolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          aggregate: {
            args: Prisma.SchoolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchools>
          }
          groupBy: {
            args: Prisma.schoolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.schoolsCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolsCountAggregateOutputType> | number
          }
        }
      }
      student_images: {
        payload: Prisma.$student_imagesPayload<ExtArgs>
        fields: Prisma.student_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>
          }
          findFirst: {
            args: Prisma.student_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>
          }
          findMany: {
            args: Prisma.student_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>[]
          }
          create: {
            args: Prisma.student_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>
          }
          createMany: {
            args: Prisma.student_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.student_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>[]
          }
          delete: {
            args: Prisma.student_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>
          }
          update: {
            args: Prisma.student_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>
          }
          deleteMany: {
            args: Prisma.student_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.student_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>[]
          }
          upsert: {
            args: Prisma.student_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_imagesPayload>
          }
          aggregate: {
            args: Prisma.Student_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_images>
          }
          groupBy: {
            args: Prisma.student_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Student_imagesCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    attendance_records?: attendance_recordsOmit
    camera_captures?: camera_capturesOmit
    cameras?: camerasOmit
    classes?: classesOmit
    enrollments?: enrollmentsOmit
    recognized_faces?: recognized_facesOmit
    schools?: schoolsOmit
    student_images?: student_imagesOmit
    students?: studentsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Camera_capturesCountOutputType
   */

  export type Camera_capturesCountOutputType = {
    recognized_faces: number
  }

  export type Camera_capturesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recognized_faces?: boolean | Camera_capturesCountOutputTypeCountRecognized_facesArgs
  }

  // Custom InputTypes
  /**
   * Camera_capturesCountOutputType without action
   */
  export type Camera_capturesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camera_capturesCountOutputType
     */
    select?: Camera_capturesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Camera_capturesCountOutputType without action
   */
  export type Camera_capturesCountOutputTypeCountRecognized_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recognized_facesWhereInput
  }


  /**
   * Count Type CamerasCountOutputType
   */

  export type CamerasCountOutputType = {
    camera_captures: number
  }

  export type CamerasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_captures?: boolean | CamerasCountOutputTypeCountCamera_capturesArgs
  }

  // Custom InputTypes
  /**
   * CamerasCountOutputType without action
   */
  export type CamerasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CamerasCountOutputType
     */
    select?: CamerasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CamerasCountOutputType without action
   */
  export type CamerasCountOutputTypeCountCamera_capturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camera_capturesWhereInput
  }


  /**
   * Count Type ClassesCountOutputType
   */

  export type ClassesCountOutputType = {
    attendance_records: number
    camera_captures: number
    cameras: number
    enrollments: number
  }

  export type ClassesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_records?: boolean | ClassesCountOutputTypeCountAttendance_recordsArgs
    camera_captures?: boolean | ClassesCountOutputTypeCountCamera_capturesArgs
    cameras?: boolean | ClassesCountOutputTypeCountCamerasArgs
    enrollments?: boolean | ClassesCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassesCountOutputType
     */
    select?: ClassesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountAttendance_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendance_recordsWhereInput
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountCamera_capturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camera_capturesWhereInput
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountCamerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camerasWhereInput
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
  }


  /**
   * Count Type SchoolsCountOutputType
   */

  export type SchoolsCountOutputType = {
    cameras: number
    classes: number
    students: number
  }

  export type SchoolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cameras?: boolean | SchoolsCountOutputTypeCountCamerasArgs
    classes?: boolean | SchoolsCountOutputTypeCountClassesArgs
    students?: boolean | SchoolsCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolsCountOutputType
     */
    select?: SchoolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeCountCamerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camerasWhereInput
  }

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
  }

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
  }


  /**
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    attendance_records: number
    enrollments: number
    recognized_faces: number
    student_images: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_records?: boolean | StudentsCountOutputTypeCountAttendance_recordsArgs
    enrollments?: boolean | StudentsCountOutputTypeCountEnrollmentsArgs
    recognized_faces?: boolean | StudentsCountOutputTypeCountRecognized_facesArgs
    student_images?: boolean | StudentsCountOutputTypeCountStudent_imagesArgs
  }

  // Custom InputTypes
  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountAttendance_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendance_recordsWhereInput
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountRecognized_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recognized_facesWhereInput
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountStudent_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_imagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    attendance_records: number
    classes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_records?: boolean | UsersCountOutputTypeCountAttendance_recordsArgs
    classes?: boolean | UsersCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAttendance_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendance_recordsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model attendance_records
   */

  export type AggregateAttendance_records = {
    _count: Attendance_recordsCountAggregateOutputType | null
    _min: Attendance_recordsMinAggregateOutputType | null
    _max: Attendance_recordsMaxAggregateOutputType | null
  }

  export type Attendance_recordsMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    class_id: string | null
    date: Date | null
    status: string | null
    marked_by: string | null
    created_at: Date | null
  }

  export type Attendance_recordsMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    class_id: string | null
    date: Date | null
    status: string | null
    marked_by: string | null
    created_at: Date | null
  }

  export type Attendance_recordsCountAggregateOutputType = {
    id: number
    student_id: number
    class_id: number
    date: number
    status: number
    marked_by: number
    created_at: number
    _all: number
  }


  export type Attendance_recordsMinAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    date?: true
    status?: true
    marked_by?: true
    created_at?: true
  }

  export type Attendance_recordsMaxAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    date?: true
    status?: true
    marked_by?: true
    created_at?: true
  }

  export type Attendance_recordsCountAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    date?: true
    status?: true
    marked_by?: true
    created_at?: true
    _all?: true
  }

  export type Attendance_recordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance_records to aggregate.
     */
    where?: attendance_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendance_records to fetch.
     */
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendance_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendance_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendance_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendance_records
    **/
    _count?: true | Attendance_recordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Attendance_recordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Attendance_recordsMaxAggregateInputType
  }

  export type GetAttendance_recordsAggregateType<T extends Attendance_recordsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance_records]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance_records[P]>
      : GetScalarType<T[P], AggregateAttendance_records[P]>
  }




  export type attendance_recordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendance_recordsWhereInput
    orderBy?: attendance_recordsOrderByWithAggregationInput | attendance_recordsOrderByWithAggregationInput[]
    by: Attendance_recordsScalarFieldEnum[] | Attendance_recordsScalarFieldEnum
    having?: attendance_recordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Attendance_recordsCountAggregateInputType | true
    _min?: Attendance_recordsMinAggregateInputType
    _max?: Attendance_recordsMaxAggregateInputType
  }

  export type Attendance_recordsGroupByOutputType = {
    id: string
    student_id: string
    class_id: string
    date: Date
    status: string
    marked_by: string
    created_at: Date | null
    _count: Attendance_recordsCountAggregateOutputType | null
    _min: Attendance_recordsMinAggregateOutputType | null
    _max: Attendance_recordsMaxAggregateOutputType | null
  }

  type GetAttendance_recordsGroupByPayload<T extends attendance_recordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Attendance_recordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Attendance_recordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Attendance_recordsGroupByOutputType[P]>
            : GetScalarType<T[P], Attendance_recordsGroupByOutputType[P]>
        }
      >
    >


  export type attendance_recordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    date?: boolean
    status?: boolean
    marked_by?: boolean
    created_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance_records"]>

  export type attendance_recordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    date?: boolean
    status?: boolean
    marked_by?: boolean
    created_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance_records"]>

  export type attendance_recordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    date?: boolean
    status?: boolean
    marked_by?: boolean
    created_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance_records"]>

  export type attendance_recordsSelectScalar = {
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    date?: boolean
    status?: boolean
    marked_by?: boolean
    created_at?: boolean
  }

  export type attendance_recordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "class_id" | "date" | "status" | "marked_by" | "created_at", ExtArgs["result"]["attendance_records"]>
  export type attendance_recordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type attendance_recordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type attendance_recordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }

  export type $attendance_recordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendance_records"
    objects: {
      classes: Prisma.$classesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      students: Prisma.$studentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      class_id: string
      date: Date
      status: string
      marked_by: string
      created_at: Date | null
    }, ExtArgs["result"]["attendance_records"]>
    composites: {}
  }

  type attendance_recordsGetPayload<S extends boolean | null | undefined | attendance_recordsDefaultArgs> = $Result.GetResult<Prisma.$attendance_recordsPayload, S>

  type attendance_recordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendance_recordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Attendance_recordsCountAggregateInputType | true
    }

  export interface attendance_recordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance_records'], meta: { name: 'attendance_records' } }
    /**
     * Find zero or one Attendance_records that matches the filter.
     * @param {attendance_recordsFindUniqueArgs} args - Arguments to find a Attendance_records
     * @example
     * // Get one Attendance_records
     * const attendance_records = await prisma.attendance_records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendance_recordsFindUniqueArgs>(args: SelectSubset<T, attendance_recordsFindUniqueArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance_records that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendance_recordsFindUniqueOrThrowArgs} args - Arguments to find a Attendance_records
     * @example
     * // Get one Attendance_records
     * const attendance_records = await prisma.attendance_records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendance_recordsFindUniqueOrThrowArgs>(args: SelectSubset<T, attendance_recordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendance_recordsFindFirstArgs} args - Arguments to find a Attendance_records
     * @example
     * // Get one Attendance_records
     * const attendance_records = await prisma.attendance_records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendance_recordsFindFirstArgs>(args?: SelectSubset<T, attendance_recordsFindFirstArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance_records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendance_recordsFindFirstOrThrowArgs} args - Arguments to find a Attendance_records
     * @example
     * // Get one Attendance_records
     * const attendance_records = await prisma.attendance_records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendance_recordsFindFirstOrThrowArgs>(args?: SelectSubset<T, attendance_recordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendance_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendance_recordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendance_records
     * const attendance_records = await prisma.attendance_records.findMany()
     * 
     * // Get first 10 Attendance_records
     * const attendance_records = await prisma.attendance_records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendance_recordsWithIdOnly = await prisma.attendance_records.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendance_recordsFindManyArgs>(args?: SelectSubset<T, attendance_recordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance_records.
     * @param {attendance_recordsCreateArgs} args - Arguments to create a Attendance_records.
     * @example
     * // Create one Attendance_records
     * const Attendance_records = await prisma.attendance_records.create({
     *   data: {
     *     // ... data to create a Attendance_records
     *   }
     * })
     * 
     */
    create<T extends attendance_recordsCreateArgs>(args: SelectSubset<T, attendance_recordsCreateArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendance_records.
     * @param {attendance_recordsCreateManyArgs} args - Arguments to create many Attendance_records.
     * @example
     * // Create many Attendance_records
     * const attendance_records = await prisma.attendance_records.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendance_recordsCreateManyArgs>(args?: SelectSubset<T, attendance_recordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendance_records and returns the data saved in the database.
     * @param {attendance_recordsCreateManyAndReturnArgs} args - Arguments to create many Attendance_records.
     * @example
     * // Create many Attendance_records
     * const attendance_records = await prisma.attendance_records.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendance_records and only return the `id`
     * const attendance_recordsWithIdOnly = await prisma.attendance_records.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attendance_recordsCreateManyAndReturnArgs>(args?: SelectSubset<T, attendance_recordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance_records.
     * @param {attendance_recordsDeleteArgs} args - Arguments to delete one Attendance_records.
     * @example
     * // Delete one Attendance_records
     * const Attendance_records = await prisma.attendance_records.delete({
     *   where: {
     *     // ... filter to delete one Attendance_records
     *   }
     * })
     * 
     */
    delete<T extends attendance_recordsDeleteArgs>(args: SelectSubset<T, attendance_recordsDeleteArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance_records.
     * @param {attendance_recordsUpdateArgs} args - Arguments to update one Attendance_records.
     * @example
     * // Update one Attendance_records
     * const attendance_records = await prisma.attendance_records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendance_recordsUpdateArgs>(args: SelectSubset<T, attendance_recordsUpdateArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendance_records.
     * @param {attendance_recordsDeleteManyArgs} args - Arguments to filter Attendance_records to delete.
     * @example
     * // Delete a few Attendance_records
     * const { count } = await prisma.attendance_records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendance_recordsDeleteManyArgs>(args?: SelectSubset<T, attendance_recordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendance_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendance_recordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendance_records
     * const attendance_records = await prisma.attendance_records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendance_recordsUpdateManyArgs>(args: SelectSubset<T, attendance_recordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendance_records and returns the data updated in the database.
     * @param {attendance_recordsUpdateManyAndReturnArgs} args - Arguments to update many Attendance_records.
     * @example
     * // Update many Attendance_records
     * const attendance_records = await prisma.attendance_records.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendance_records and only return the `id`
     * const attendance_recordsWithIdOnly = await prisma.attendance_records.updateManyAndReturn({
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
    updateManyAndReturn<T extends attendance_recordsUpdateManyAndReturnArgs>(args: SelectSubset<T, attendance_recordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance_records.
     * @param {attendance_recordsUpsertArgs} args - Arguments to update or create a Attendance_records.
     * @example
     * // Update or create a Attendance_records
     * const attendance_records = await prisma.attendance_records.upsert({
     *   create: {
     *     // ... data to create a Attendance_records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance_records we want to update
     *   }
     * })
     */
    upsert<T extends attendance_recordsUpsertArgs>(args: SelectSubset<T, attendance_recordsUpsertArgs<ExtArgs>>): Prisma__attendance_recordsClient<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendance_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendance_recordsCountArgs} args - Arguments to filter Attendance_records to count.
     * @example
     * // Count the number of Attendance_records
     * const count = await prisma.attendance_records.count({
     *   where: {
     *     // ... the filter for the Attendance_records we want to count
     *   }
     * })
    **/
    count<T extends attendance_recordsCountArgs>(
      args?: Subset<T, attendance_recordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Attendance_recordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Attendance_recordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Attendance_recordsAggregateArgs>(args: Subset<T, Attendance_recordsAggregateArgs>): Prisma.PrismaPromise<GetAttendance_recordsAggregateType<T>>

    /**
     * Group by Attendance_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendance_recordsGroupByArgs} args - Group by arguments.
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
      T extends attendance_recordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendance_recordsGroupByArgs['orderBy'] }
        : { orderBy?: attendance_recordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attendance_recordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendance_recordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendance_records model
   */
  readonly fields: attendance_recordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance_records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendance_recordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends classesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classesDefaultArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the attendance_records model
   */
  interface attendance_recordsFieldRefs {
    readonly id: FieldRef<"attendance_records", 'String'>
    readonly student_id: FieldRef<"attendance_records", 'String'>
    readonly class_id: FieldRef<"attendance_records", 'String'>
    readonly date: FieldRef<"attendance_records", 'DateTime'>
    readonly status: FieldRef<"attendance_records", 'String'>
    readonly marked_by: FieldRef<"attendance_records", 'String'>
    readonly created_at: FieldRef<"attendance_records", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attendance_records findUnique
   */
  export type attendance_recordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * Filter, which attendance_records to fetch.
     */
    where: attendance_recordsWhereUniqueInput
  }

  /**
   * attendance_records findUniqueOrThrow
   */
  export type attendance_recordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * Filter, which attendance_records to fetch.
     */
    where: attendance_recordsWhereUniqueInput
  }

  /**
   * attendance_records findFirst
   */
  export type attendance_recordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * Filter, which attendance_records to fetch.
     */
    where?: attendance_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendance_records to fetch.
     */
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendance_records.
     */
    cursor?: attendance_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendance_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendance_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendance_records.
     */
    distinct?: Attendance_recordsScalarFieldEnum | Attendance_recordsScalarFieldEnum[]
  }

  /**
   * attendance_records findFirstOrThrow
   */
  export type attendance_recordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * Filter, which attendance_records to fetch.
     */
    where?: attendance_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendance_records to fetch.
     */
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendance_records.
     */
    cursor?: attendance_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendance_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendance_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendance_records.
     */
    distinct?: Attendance_recordsScalarFieldEnum | Attendance_recordsScalarFieldEnum[]
  }

  /**
   * attendance_records findMany
   */
  export type attendance_recordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * Filter, which attendance_records to fetch.
     */
    where?: attendance_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendance_records to fetch.
     */
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendance_records.
     */
    cursor?: attendance_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendance_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendance_records.
     */
    skip?: number
    distinct?: Attendance_recordsScalarFieldEnum | Attendance_recordsScalarFieldEnum[]
  }

  /**
   * attendance_records create
   */
  export type attendance_recordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * The data needed to create a attendance_records.
     */
    data: XOR<attendance_recordsCreateInput, attendance_recordsUncheckedCreateInput>
  }

  /**
   * attendance_records createMany
   */
  export type attendance_recordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendance_records.
     */
    data: attendance_recordsCreateManyInput | attendance_recordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendance_records createManyAndReturn
   */
  export type attendance_recordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * The data used to create many attendance_records.
     */
    data: attendance_recordsCreateManyInput | attendance_recordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance_records update
   */
  export type attendance_recordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * The data needed to update a attendance_records.
     */
    data: XOR<attendance_recordsUpdateInput, attendance_recordsUncheckedUpdateInput>
    /**
     * Choose, which attendance_records to update.
     */
    where: attendance_recordsWhereUniqueInput
  }

  /**
   * attendance_records updateMany
   */
  export type attendance_recordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendance_records.
     */
    data: XOR<attendance_recordsUpdateManyMutationInput, attendance_recordsUncheckedUpdateManyInput>
    /**
     * Filter which attendance_records to update
     */
    where?: attendance_recordsWhereInput
    /**
     * Limit how many attendance_records to update.
     */
    limit?: number
  }

  /**
   * attendance_records updateManyAndReturn
   */
  export type attendance_recordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * The data used to update attendance_records.
     */
    data: XOR<attendance_recordsUpdateManyMutationInput, attendance_recordsUncheckedUpdateManyInput>
    /**
     * Filter which attendance_records to update
     */
    where?: attendance_recordsWhereInput
    /**
     * Limit how many attendance_records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance_records upsert
   */
  export type attendance_recordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * The filter to search for the attendance_records to update in case it exists.
     */
    where: attendance_recordsWhereUniqueInput
    /**
     * In case the attendance_records found by the `where` argument doesn't exist, create a new attendance_records with this data.
     */
    create: XOR<attendance_recordsCreateInput, attendance_recordsUncheckedCreateInput>
    /**
     * In case the attendance_records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendance_recordsUpdateInput, attendance_recordsUncheckedUpdateInput>
  }

  /**
   * attendance_records delete
   */
  export type attendance_recordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    /**
     * Filter which attendance_records to delete.
     */
    where: attendance_recordsWhereUniqueInput
  }

  /**
   * attendance_records deleteMany
   */
  export type attendance_recordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance_records to delete
     */
    where?: attendance_recordsWhereInput
    /**
     * Limit how many attendance_records to delete.
     */
    limit?: number
  }

  /**
   * attendance_records without action
   */
  export type attendance_recordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
  }


  /**
   * Model camera_captures
   */

  export type AggregateCamera_captures = {
    _count: Camera_capturesCountAggregateOutputType | null
    _min: Camera_capturesMinAggregateOutputType | null
    _max: Camera_capturesMaxAggregateOutputType | null
  }

  export type Camera_capturesMinAggregateOutputType = {
    id: string | null
    camera_id: string | null
    image_path: string | null
    captured_at: Date | null
    class_id: string | null
    created_at: Date | null
  }

  export type Camera_capturesMaxAggregateOutputType = {
    id: string | null
    camera_id: string | null
    image_path: string | null
    captured_at: Date | null
    class_id: string | null
    created_at: Date | null
  }

  export type Camera_capturesCountAggregateOutputType = {
    id: number
    camera_id: number
    image_path: number
    captured_at: number
    class_id: number
    created_at: number
    _all: number
  }


  export type Camera_capturesMinAggregateInputType = {
    id?: true
    camera_id?: true
    image_path?: true
    captured_at?: true
    class_id?: true
    created_at?: true
  }

  export type Camera_capturesMaxAggregateInputType = {
    id?: true
    camera_id?: true
    image_path?: true
    captured_at?: true
    class_id?: true
    created_at?: true
  }

  export type Camera_capturesCountAggregateInputType = {
    id?: true
    camera_id?: true
    image_path?: true
    captured_at?: true
    class_id?: true
    created_at?: true
    _all?: true
  }

  export type Camera_capturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camera_captures to aggregate.
     */
    where?: camera_capturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_captures to fetch.
     */
    orderBy?: camera_capturesOrderByWithRelationInput | camera_capturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: camera_capturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_captures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_captures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned camera_captures
    **/
    _count?: true | Camera_capturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Camera_capturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Camera_capturesMaxAggregateInputType
  }

  export type GetCamera_capturesAggregateType<T extends Camera_capturesAggregateArgs> = {
        [P in keyof T & keyof AggregateCamera_captures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCamera_captures[P]>
      : GetScalarType<T[P], AggregateCamera_captures[P]>
  }




  export type camera_capturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camera_capturesWhereInput
    orderBy?: camera_capturesOrderByWithAggregationInput | camera_capturesOrderByWithAggregationInput[]
    by: Camera_capturesScalarFieldEnum[] | Camera_capturesScalarFieldEnum
    having?: camera_capturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Camera_capturesCountAggregateInputType | true
    _min?: Camera_capturesMinAggregateInputType
    _max?: Camera_capturesMaxAggregateInputType
  }

  export type Camera_capturesGroupByOutputType = {
    id: string
    camera_id: string
    image_path: string
    captured_at: Date
    class_id: string | null
    created_at: Date | null
    _count: Camera_capturesCountAggregateOutputType | null
    _min: Camera_capturesMinAggregateOutputType | null
    _max: Camera_capturesMaxAggregateOutputType | null
  }

  type GetCamera_capturesGroupByPayload<T extends camera_capturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Camera_capturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Camera_capturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Camera_capturesGroupByOutputType[P]>
            : GetScalarType<T[P], Camera_capturesGroupByOutputType[P]>
        }
      >
    >


  export type camera_capturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    camera_id?: boolean
    image_path?: boolean
    captured_at?: boolean
    class_id?: boolean
    created_at?: boolean
    cameras?: boolean | camerasDefaultArgs<ExtArgs>
    classes?: boolean | camera_captures$classesArgs<ExtArgs>
    recognized_faces?: boolean | camera_captures$recognized_facesArgs<ExtArgs>
    _count?: boolean | Camera_capturesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["camera_captures"]>

  export type camera_capturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    camera_id?: boolean
    image_path?: boolean
    captured_at?: boolean
    class_id?: boolean
    created_at?: boolean
    cameras?: boolean | camerasDefaultArgs<ExtArgs>
    classes?: boolean | camera_captures$classesArgs<ExtArgs>
  }, ExtArgs["result"]["camera_captures"]>

  export type camera_capturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    camera_id?: boolean
    image_path?: boolean
    captured_at?: boolean
    class_id?: boolean
    created_at?: boolean
    cameras?: boolean | camerasDefaultArgs<ExtArgs>
    classes?: boolean | camera_captures$classesArgs<ExtArgs>
  }, ExtArgs["result"]["camera_captures"]>

  export type camera_capturesSelectScalar = {
    id?: boolean
    camera_id?: boolean
    image_path?: boolean
    captured_at?: boolean
    class_id?: boolean
    created_at?: boolean
  }

  export type camera_capturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "camera_id" | "image_path" | "captured_at" | "class_id" | "created_at", ExtArgs["result"]["camera_captures"]>
  export type camera_capturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cameras?: boolean | camerasDefaultArgs<ExtArgs>
    classes?: boolean | camera_captures$classesArgs<ExtArgs>
    recognized_faces?: boolean | camera_captures$recognized_facesArgs<ExtArgs>
    _count?: boolean | Camera_capturesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type camera_capturesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cameras?: boolean | camerasDefaultArgs<ExtArgs>
    classes?: boolean | camera_captures$classesArgs<ExtArgs>
  }
  export type camera_capturesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cameras?: boolean | camerasDefaultArgs<ExtArgs>
    classes?: boolean | camera_captures$classesArgs<ExtArgs>
  }

  export type $camera_capturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "camera_captures"
    objects: {
      cameras: Prisma.$camerasPayload<ExtArgs>
      classes: Prisma.$classesPayload<ExtArgs> | null
      recognized_faces: Prisma.$recognized_facesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      camera_id: string
      image_path: string
      captured_at: Date
      class_id: string | null
      created_at: Date | null
    }, ExtArgs["result"]["camera_captures"]>
    composites: {}
  }

  type camera_capturesGetPayload<S extends boolean | null | undefined | camera_capturesDefaultArgs> = $Result.GetResult<Prisma.$camera_capturesPayload, S>

  type camera_capturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<camera_capturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Camera_capturesCountAggregateInputType | true
    }

  export interface camera_capturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['camera_captures'], meta: { name: 'camera_captures' } }
    /**
     * Find zero or one Camera_captures that matches the filter.
     * @param {camera_capturesFindUniqueArgs} args - Arguments to find a Camera_captures
     * @example
     * // Get one Camera_captures
     * const camera_captures = await prisma.camera_captures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends camera_capturesFindUniqueArgs>(args: SelectSubset<T, camera_capturesFindUniqueArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Camera_captures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {camera_capturesFindUniqueOrThrowArgs} args - Arguments to find a Camera_captures
     * @example
     * // Get one Camera_captures
     * const camera_captures = await prisma.camera_captures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends camera_capturesFindUniqueOrThrowArgs>(args: SelectSubset<T, camera_capturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Camera_captures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_capturesFindFirstArgs} args - Arguments to find a Camera_captures
     * @example
     * // Get one Camera_captures
     * const camera_captures = await prisma.camera_captures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends camera_capturesFindFirstArgs>(args?: SelectSubset<T, camera_capturesFindFirstArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Camera_captures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_capturesFindFirstOrThrowArgs} args - Arguments to find a Camera_captures
     * @example
     * // Get one Camera_captures
     * const camera_captures = await prisma.camera_captures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends camera_capturesFindFirstOrThrowArgs>(args?: SelectSubset<T, camera_capturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Camera_captures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_capturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Camera_captures
     * const camera_captures = await prisma.camera_captures.findMany()
     * 
     * // Get first 10 Camera_captures
     * const camera_captures = await prisma.camera_captures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const camera_capturesWithIdOnly = await prisma.camera_captures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends camera_capturesFindManyArgs>(args?: SelectSubset<T, camera_capturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Camera_captures.
     * @param {camera_capturesCreateArgs} args - Arguments to create a Camera_captures.
     * @example
     * // Create one Camera_captures
     * const Camera_captures = await prisma.camera_captures.create({
     *   data: {
     *     // ... data to create a Camera_captures
     *   }
     * })
     * 
     */
    create<T extends camera_capturesCreateArgs>(args: SelectSubset<T, camera_capturesCreateArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Camera_captures.
     * @param {camera_capturesCreateManyArgs} args - Arguments to create many Camera_captures.
     * @example
     * // Create many Camera_captures
     * const camera_captures = await prisma.camera_captures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends camera_capturesCreateManyArgs>(args?: SelectSubset<T, camera_capturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Camera_captures and returns the data saved in the database.
     * @param {camera_capturesCreateManyAndReturnArgs} args - Arguments to create many Camera_captures.
     * @example
     * // Create many Camera_captures
     * const camera_captures = await prisma.camera_captures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Camera_captures and only return the `id`
     * const camera_capturesWithIdOnly = await prisma.camera_captures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends camera_capturesCreateManyAndReturnArgs>(args?: SelectSubset<T, camera_capturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Camera_captures.
     * @param {camera_capturesDeleteArgs} args - Arguments to delete one Camera_captures.
     * @example
     * // Delete one Camera_captures
     * const Camera_captures = await prisma.camera_captures.delete({
     *   where: {
     *     // ... filter to delete one Camera_captures
     *   }
     * })
     * 
     */
    delete<T extends camera_capturesDeleteArgs>(args: SelectSubset<T, camera_capturesDeleteArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Camera_captures.
     * @param {camera_capturesUpdateArgs} args - Arguments to update one Camera_captures.
     * @example
     * // Update one Camera_captures
     * const camera_captures = await prisma.camera_captures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends camera_capturesUpdateArgs>(args: SelectSubset<T, camera_capturesUpdateArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Camera_captures.
     * @param {camera_capturesDeleteManyArgs} args - Arguments to filter Camera_captures to delete.
     * @example
     * // Delete a few Camera_captures
     * const { count } = await prisma.camera_captures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends camera_capturesDeleteManyArgs>(args?: SelectSubset<T, camera_capturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camera_captures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_capturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Camera_captures
     * const camera_captures = await prisma.camera_captures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends camera_capturesUpdateManyArgs>(args: SelectSubset<T, camera_capturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camera_captures and returns the data updated in the database.
     * @param {camera_capturesUpdateManyAndReturnArgs} args - Arguments to update many Camera_captures.
     * @example
     * // Update many Camera_captures
     * const camera_captures = await prisma.camera_captures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Camera_captures and only return the `id`
     * const camera_capturesWithIdOnly = await prisma.camera_captures.updateManyAndReturn({
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
    updateManyAndReturn<T extends camera_capturesUpdateManyAndReturnArgs>(args: SelectSubset<T, camera_capturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Camera_captures.
     * @param {camera_capturesUpsertArgs} args - Arguments to update or create a Camera_captures.
     * @example
     * // Update or create a Camera_captures
     * const camera_captures = await prisma.camera_captures.upsert({
     *   create: {
     *     // ... data to create a Camera_captures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Camera_captures we want to update
     *   }
     * })
     */
    upsert<T extends camera_capturesUpsertArgs>(args: SelectSubset<T, camera_capturesUpsertArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Camera_captures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_capturesCountArgs} args - Arguments to filter Camera_captures to count.
     * @example
     * // Count the number of Camera_captures
     * const count = await prisma.camera_captures.count({
     *   where: {
     *     // ... the filter for the Camera_captures we want to count
     *   }
     * })
    **/
    count<T extends camera_capturesCountArgs>(
      args?: Subset<T, camera_capturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Camera_capturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Camera_captures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Camera_capturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Camera_capturesAggregateArgs>(args: Subset<T, Camera_capturesAggregateArgs>): Prisma.PrismaPromise<GetCamera_capturesAggregateType<T>>

    /**
     * Group by Camera_captures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_capturesGroupByArgs} args - Group by arguments.
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
      T extends camera_capturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: camera_capturesGroupByArgs['orderBy'] }
        : { orderBy?: camera_capturesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, camera_capturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCamera_capturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the camera_captures model
   */
  readonly fields: camera_capturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for camera_captures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__camera_capturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cameras<T extends camerasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, camerasDefaultArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classes<T extends camera_captures$classesArgs<ExtArgs> = {}>(args?: Subset<T, camera_captures$classesArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recognized_faces<T extends camera_captures$recognized_facesArgs<ExtArgs> = {}>(args?: Subset<T, camera_captures$recognized_facesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the camera_captures model
   */
  interface camera_capturesFieldRefs {
    readonly id: FieldRef<"camera_captures", 'String'>
    readonly camera_id: FieldRef<"camera_captures", 'String'>
    readonly image_path: FieldRef<"camera_captures", 'String'>
    readonly captured_at: FieldRef<"camera_captures", 'DateTime'>
    readonly class_id: FieldRef<"camera_captures", 'String'>
    readonly created_at: FieldRef<"camera_captures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * camera_captures findUnique
   */
  export type camera_capturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * Filter, which camera_captures to fetch.
     */
    where: camera_capturesWhereUniqueInput
  }

  /**
   * camera_captures findUniqueOrThrow
   */
  export type camera_capturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * Filter, which camera_captures to fetch.
     */
    where: camera_capturesWhereUniqueInput
  }

  /**
   * camera_captures findFirst
   */
  export type camera_capturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * Filter, which camera_captures to fetch.
     */
    where?: camera_capturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_captures to fetch.
     */
    orderBy?: camera_capturesOrderByWithRelationInput | camera_capturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camera_captures.
     */
    cursor?: camera_capturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_captures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_captures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camera_captures.
     */
    distinct?: Camera_capturesScalarFieldEnum | Camera_capturesScalarFieldEnum[]
  }

  /**
   * camera_captures findFirstOrThrow
   */
  export type camera_capturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * Filter, which camera_captures to fetch.
     */
    where?: camera_capturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_captures to fetch.
     */
    orderBy?: camera_capturesOrderByWithRelationInput | camera_capturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camera_captures.
     */
    cursor?: camera_capturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_captures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_captures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camera_captures.
     */
    distinct?: Camera_capturesScalarFieldEnum | Camera_capturesScalarFieldEnum[]
  }

  /**
   * camera_captures findMany
   */
  export type camera_capturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * Filter, which camera_captures to fetch.
     */
    where?: camera_capturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_captures to fetch.
     */
    orderBy?: camera_capturesOrderByWithRelationInput | camera_capturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing camera_captures.
     */
    cursor?: camera_capturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_captures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_captures.
     */
    skip?: number
    distinct?: Camera_capturesScalarFieldEnum | Camera_capturesScalarFieldEnum[]
  }

  /**
   * camera_captures create
   */
  export type camera_capturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * The data needed to create a camera_captures.
     */
    data: XOR<camera_capturesCreateInput, camera_capturesUncheckedCreateInput>
  }

  /**
   * camera_captures createMany
   */
  export type camera_capturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many camera_captures.
     */
    data: camera_capturesCreateManyInput | camera_capturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camera_captures createManyAndReturn
   */
  export type camera_capturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * The data used to create many camera_captures.
     */
    data: camera_capturesCreateManyInput | camera_capturesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * camera_captures update
   */
  export type camera_capturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * The data needed to update a camera_captures.
     */
    data: XOR<camera_capturesUpdateInput, camera_capturesUncheckedUpdateInput>
    /**
     * Choose, which camera_captures to update.
     */
    where: camera_capturesWhereUniqueInput
  }

  /**
   * camera_captures updateMany
   */
  export type camera_capturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update camera_captures.
     */
    data: XOR<camera_capturesUpdateManyMutationInput, camera_capturesUncheckedUpdateManyInput>
    /**
     * Filter which camera_captures to update
     */
    where?: camera_capturesWhereInput
    /**
     * Limit how many camera_captures to update.
     */
    limit?: number
  }

  /**
   * camera_captures updateManyAndReturn
   */
  export type camera_capturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * The data used to update camera_captures.
     */
    data: XOR<camera_capturesUpdateManyMutationInput, camera_capturesUncheckedUpdateManyInput>
    /**
     * Filter which camera_captures to update
     */
    where?: camera_capturesWhereInput
    /**
     * Limit how many camera_captures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * camera_captures upsert
   */
  export type camera_capturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * The filter to search for the camera_captures to update in case it exists.
     */
    where: camera_capturesWhereUniqueInput
    /**
     * In case the camera_captures found by the `where` argument doesn't exist, create a new camera_captures with this data.
     */
    create: XOR<camera_capturesCreateInput, camera_capturesUncheckedCreateInput>
    /**
     * In case the camera_captures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<camera_capturesUpdateInput, camera_capturesUncheckedUpdateInput>
  }

  /**
   * camera_captures delete
   */
  export type camera_capturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    /**
     * Filter which camera_captures to delete.
     */
    where: camera_capturesWhereUniqueInput
  }

  /**
   * camera_captures deleteMany
   */
  export type camera_capturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camera_captures to delete
     */
    where?: camera_capturesWhereInput
    /**
     * Limit how many camera_captures to delete.
     */
    limit?: number
  }

  /**
   * camera_captures.classes
   */
  export type camera_captures$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    where?: classesWhereInput
  }

  /**
   * camera_captures.recognized_faces
   */
  export type camera_captures$recognized_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    where?: recognized_facesWhereInput
    orderBy?: recognized_facesOrderByWithRelationInput | recognized_facesOrderByWithRelationInput[]
    cursor?: recognized_facesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recognized_facesScalarFieldEnum | Recognized_facesScalarFieldEnum[]
  }

  /**
   * camera_captures without action
   */
  export type camera_capturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
  }


  /**
   * Model cameras
   */

  export type AggregateCameras = {
    _count: CamerasCountAggregateOutputType | null
    _min: CamerasMinAggregateOutputType | null
    _max: CamerasMaxAggregateOutputType | null
  }

  export type CamerasMinAggregateOutputType = {
    device_id: string | null
    location: string | null
    status: string | null
    school_id: string | null
    class_id: string | null
    created_at: Date | null
    id: string | null
  }

  export type CamerasMaxAggregateOutputType = {
    device_id: string | null
    location: string | null
    status: string | null
    school_id: string | null
    class_id: string | null
    created_at: Date | null
    id: string | null
  }

  export type CamerasCountAggregateOutputType = {
    device_id: number
    location: number
    status: number
    school_id: number
    class_id: number
    created_at: number
    id: number
    _all: number
  }


  export type CamerasMinAggregateInputType = {
    device_id?: true
    location?: true
    status?: true
    school_id?: true
    class_id?: true
    created_at?: true
    id?: true
  }

  export type CamerasMaxAggregateInputType = {
    device_id?: true
    location?: true
    status?: true
    school_id?: true
    class_id?: true
    created_at?: true
    id?: true
  }

  export type CamerasCountAggregateInputType = {
    device_id?: true
    location?: true
    status?: true
    school_id?: true
    class_id?: true
    created_at?: true
    id?: true
    _all?: true
  }

  export type CamerasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cameras to aggregate.
     */
    where?: camerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     */
    orderBy?: camerasOrderByWithRelationInput | camerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: camerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cameras
    **/
    _count?: true | CamerasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CamerasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CamerasMaxAggregateInputType
  }

  export type GetCamerasAggregateType<T extends CamerasAggregateArgs> = {
        [P in keyof T & keyof AggregateCameras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCameras[P]>
      : GetScalarType<T[P], AggregateCameras[P]>
  }




  export type camerasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camerasWhereInput
    orderBy?: camerasOrderByWithAggregationInput | camerasOrderByWithAggregationInput[]
    by: CamerasScalarFieldEnum[] | CamerasScalarFieldEnum
    having?: camerasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CamerasCountAggregateInputType | true
    _min?: CamerasMinAggregateInputType
    _max?: CamerasMaxAggregateInputType
  }

  export type CamerasGroupByOutputType = {
    device_id: string
    location: string
    status: string
    school_id: string | null
    class_id: string | null
    created_at: Date | null
    id: string
    _count: CamerasCountAggregateOutputType | null
    _min: CamerasMinAggregateOutputType | null
    _max: CamerasMaxAggregateOutputType | null
  }

  type GetCamerasGroupByPayload<T extends camerasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CamerasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CamerasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CamerasGroupByOutputType[P]>
            : GetScalarType<T[P], CamerasGroupByOutputType[P]>
        }
      >
    >


  export type camerasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    location?: boolean
    status?: boolean
    school_id?: boolean
    class_id?: boolean
    created_at?: boolean
    id?: boolean
    camera_captures?: boolean | cameras$camera_capturesArgs<ExtArgs>
    classes?: boolean | cameras$classesArgs<ExtArgs>
    schools?: boolean | cameras$schoolsArgs<ExtArgs>
    _count?: boolean | CamerasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cameras"]>

  export type camerasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    location?: boolean
    status?: boolean
    school_id?: boolean
    class_id?: boolean
    created_at?: boolean
    id?: boolean
    classes?: boolean | cameras$classesArgs<ExtArgs>
    schools?: boolean | cameras$schoolsArgs<ExtArgs>
  }, ExtArgs["result"]["cameras"]>

  export type camerasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    location?: boolean
    status?: boolean
    school_id?: boolean
    class_id?: boolean
    created_at?: boolean
    id?: boolean
    classes?: boolean | cameras$classesArgs<ExtArgs>
    schools?: boolean | cameras$schoolsArgs<ExtArgs>
  }, ExtArgs["result"]["cameras"]>

  export type camerasSelectScalar = {
    device_id?: boolean
    location?: boolean
    status?: boolean
    school_id?: boolean
    class_id?: boolean
    created_at?: boolean
    id?: boolean
  }

  export type camerasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"device_id" | "location" | "status" | "school_id" | "class_id" | "created_at" | "id", ExtArgs["result"]["cameras"]>
  export type camerasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_captures?: boolean | cameras$camera_capturesArgs<ExtArgs>
    classes?: boolean | cameras$classesArgs<ExtArgs>
    schools?: boolean | cameras$schoolsArgs<ExtArgs>
    _count?: boolean | CamerasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type camerasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | cameras$classesArgs<ExtArgs>
    schools?: boolean | cameras$schoolsArgs<ExtArgs>
  }
  export type camerasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | cameras$classesArgs<ExtArgs>
    schools?: boolean | cameras$schoolsArgs<ExtArgs>
  }

  export type $camerasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cameras"
    objects: {
      camera_captures: Prisma.$camera_capturesPayload<ExtArgs>[]
      classes: Prisma.$classesPayload<ExtArgs> | null
      schools: Prisma.$schoolsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      device_id: string
      location: string
      status: string
      school_id: string | null
      class_id: string | null
      created_at: Date | null
      id: string
    }, ExtArgs["result"]["cameras"]>
    composites: {}
  }

  type camerasGetPayload<S extends boolean | null | undefined | camerasDefaultArgs> = $Result.GetResult<Prisma.$camerasPayload, S>

  type camerasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<camerasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CamerasCountAggregateInputType | true
    }

  export interface camerasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cameras'], meta: { name: 'cameras' } }
    /**
     * Find zero or one Cameras that matches the filter.
     * @param {camerasFindUniqueArgs} args - Arguments to find a Cameras
     * @example
     * // Get one Cameras
     * const cameras = await prisma.cameras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends camerasFindUniqueArgs>(args: SelectSubset<T, camerasFindUniqueArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cameras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {camerasFindUniqueOrThrowArgs} args - Arguments to find a Cameras
     * @example
     * // Get one Cameras
     * const cameras = await prisma.cameras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends camerasFindUniqueOrThrowArgs>(args: SelectSubset<T, camerasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cameras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camerasFindFirstArgs} args - Arguments to find a Cameras
     * @example
     * // Get one Cameras
     * const cameras = await prisma.cameras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends camerasFindFirstArgs>(args?: SelectSubset<T, camerasFindFirstArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cameras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camerasFindFirstOrThrowArgs} args - Arguments to find a Cameras
     * @example
     * // Get one Cameras
     * const cameras = await prisma.cameras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends camerasFindFirstOrThrowArgs>(args?: SelectSubset<T, camerasFindFirstOrThrowArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cameras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camerasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cameras
     * const cameras = await prisma.cameras.findMany()
     * 
     * // Get first 10 Cameras
     * const cameras = await prisma.cameras.findMany({ take: 10 })
     * 
     * // Only select the `device_id`
     * const camerasWithDevice_idOnly = await prisma.cameras.findMany({ select: { device_id: true } })
     * 
     */
    findMany<T extends camerasFindManyArgs>(args?: SelectSubset<T, camerasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cameras.
     * @param {camerasCreateArgs} args - Arguments to create a Cameras.
     * @example
     * // Create one Cameras
     * const Cameras = await prisma.cameras.create({
     *   data: {
     *     // ... data to create a Cameras
     *   }
     * })
     * 
     */
    create<T extends camerasCreateArgs>(args: SelectSubset<T, camerasCreateArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cameras.
     * @param {camerasCreateManyArgs} args - Arguments to create many Cameras.
     * @example
     * // Create many Cameras
     * const cameras = await prisma.cameras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends camerasCreateManyArgs>(args?: SelectSubset<T, camerasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cameras and returns the data saved in the database.
     * @param {camerasCreateManyAndReturnArgs} args - Arguments to create many Cameras.
     * @example
     * // Create many Cameras
     * const cameras = await prisma.cameras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cameras and only return the `device_id`
     * const camerasWithDevice_idOnly = await prisma.cameras.createManyAndReturn({
     *   select: { device_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends camerasCreateManyAndReturnArgs>(args?: SelectSubset<T, camerasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cameras.
     * @param {camerasDeleteArgs} args - Arguments to delete one Cameras.
     * @example
     * // Delete one Cameras
     * const Cameras = await prisma.cameras.delete({
     *   where: {
     *     // ... filter to delete one Cameras
     *   }
     * })
     * 
     */
    delete<T extends camerasDeleteArgs>(args: SelectSubset<T, camerasDeleteArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cameras.
     * @param {camerasUpdateArgs} args - Arguments to update one Cameras.
     * @example
     * // Update one Cameras
     * const cameras = await prisma.cameras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends camerasUpdateArgs>(args: SelectSubset<T, camerasUpdateArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cameras.
     * @param {camerasDeleteManyArgs} args - Arguments to filter Cameras to delete.
     * @example
     * // Delete a few Cameras
     * const { count } = await prisma.cameras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends camerasDeleteManyArgs>(args?: SelectSubset<T, camerasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cameras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camerasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cameras
     * const cameras = await prisma.cameras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends camerasUpdateManyArgs>(args: SelectSubset<T, camerasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cameras and returns the data updated in the database.
     * @param {camerasUpdateManyAndReturnArgs} args - Arguments to update many Cameras.
     * @example
     * // Update many Cameras
     * const cameras = await prisma.cameras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cameras and only return the `device_id`
     * const camerasWithDevice_idOnly = await prisma.cameras.updateManyAndReturn({
     *   select: { device_id: true },
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
    updateManyAndReturn<T extends camerasUpdateManyAndReturnArgs>(args: SelectSubset<T, camerasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cameras.
     * @param {camerasUpsertArgs} args - Arguments to update or create a Cameras.
     * @example
     * // Update or create a Cameras
     * const cameras = await prisma.cameras.upsert({
     *   create: {
     *     // ... data to create a Cameras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cameras we want to update
     *   }
     * })
     */
    upsert<T extends camerasUpsertArgs>(args: SelectSubset<T, camerasUpsertArgs<ExtArgs>>): Prisma__camerasClient<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cameras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camerasCountArgs} args - Arguments to filter Cameras to count.
     * @example
     * // Count the number of Cameras
     * const count = await prisma.cameras.count({
     *   where: {
     *     // ... the filter for the Cameras we want to count
     *   }
     * })
    **/
    count<T extends camerasCountArgs>(
      args?: Subset<T, camerasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CamerasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cameras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CamerasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CamerasAggregateArgs>(args: Subset<T, CamerasAggregateArgs>): Prisma.PrismaPromise<GetCamerasAggregateType<T>>

    /**
     * Group by Cameras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camerasGroupByArgs} args - Group by arguments.
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
      T extends camerasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: camerasGroupByArgs['orderBy'] }
        : { orderBy?: camerasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, camerasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCamerasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cameras model
   */
  readonly fields: camerasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cameras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__camerasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    camera_captures<T extends cameras$camera_capturesArgs<ExtArgs> = {}>(args?: Subset<T, cameras$camera_capturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends cameras$classesArgs<ExtArgs> = {}>(args?: Subset<T, cameras$classesArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    schools<T extends cameras$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, cameras$schoolsArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cameras model
   */
  interface camerasFieldRefs {
    readonly device_id: FieldRef<"cameras", 'String'>
    readonly location: FieldRef<"cameras", 'String'>
    readonly status: FieldRef<"cameras", 'String'>
    readonly school_id: FieldRef<"cameras", 'String'>
    readonly class_id: FieldRef<"cameras", 'String'>
    readonly created_at: FieldRef<"cameras", 'DateTime'>
    readonly id: FieldRef<"cameras", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cameras findUnique
   */
  export type camerasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * Filter, which cameras to fetch.
     */
    where: camerasWhereUniqueInput
  }

  /**
   * cameras findUniqueOrThrow
   */
  export type camerasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * Filter, which cameras to fetch.
     */
    where: camerasWhereUniqueInput
  }

  /**
   * cameras findFirst
   */
  export type camerasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * Filter, which cameras to fetch.
     */
    where?: camerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     */
    orderBy?: camerasOrderByWithRelationInput | camerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cameras.
     */
    cursor?: camerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cameras.
     */
    distinct?: CamerasScalarFieldEnum | CamerasScalarFieldEnum[]
  }

  /**
   * cameras findFirstOrThrow
   */
  export type camerasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * Filter, which cameras to fetch.
     */
    where?: camerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     */
    orderBy?: camerasOrderByWithRelationInput | camerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cameras.
     */
    cursor?: camerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cameras.
     */
    distinct?: CamerasScalarFieldEnum | CamerasScalarFieldEnum[]
  }

  /**
   * cameras findMany
   */
  export type camerasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * Filter, which cameras to fetch.
     */
    where?: camerasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     */
    orderBy?: camerasOrderByWithRelationInput | camerasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cameras.
     */
    cursor?: camerasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     */
    skip?: number
    distinct?: CamerasScalarFieldEnum | CamerasScalarFieldEnum[]
  }

  /**
   * cameras create
   */
  export type camerasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * The data needed to create a cameras.
     */
    data: XOR<camerasCreateInput, camerasUncheckedCreateInput>
  }

  /**
   * cameras createMany
   */
  export type camerasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cameras.
     */
    data: camerasCreateManyInput | camerasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cameras createManyAndReturn
   */
  export type camerasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * The data used to create many cameras.
     */
    data: camerasCreateManyInput | camerasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cameras update
   */
  export type camerasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * The data needed to update a cameras.
     */
    data: XOR<camerasUpdateInput, camerasUncheckedUpdateInput>
    /**
     * Choose, which cameras to update.
     */
    where: camerasWhereUniqueInput
  }

  /**
   * cameras updateMany
   */
  export type camerasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cameras.
     */
    data: XOR<camerasUpdateManyMutationInput, camerasUncheckedUpdateManyInput>
    /**
     * Filter which cameras to update
     */
    where?: camerasWhereInput
    /**
     * Limit how many cameras to update.
     */
    limit?: number
  }

  /**
   * cameras updateManyAndReturn
   */
  export type camerasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * The data used to update cameras.
     */
    data: XOR<camerasUpdateManyMutationInput, camerasUncheckedUpdateManyInput>
    /**
     * Filter which cameras to update
     */
    where?: camerasWhereInput
    /**
     * Limit how many cameras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cameras upsert
   */
  export type camerasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * The filter to search for the cameras to update in case it exists.
     */
    where: camerasWhereUniqueInput
    /**
     * In case the cameras found by the `where` argument doesn't exist, create a new cameras with this data.
     */
    create: XOR<camerasCreateInput, camerasUncheckedCreateInput>
    /**
     * In case the cameras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<camerasUpdateInput, camerasUncheckedUpdateInput>
  }

  /**
   * cameras delete
   */
  export type camerasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    /**
     * Filter which cameras to delete.
     */
    where: camerasWhereUniqueInput
  }

  /**
   * cameras deleteMany
   */
  export type camerasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cameras to delete
     */
    where?: camerasWhereInput
    /**
     * Limit how many cameras to delete.
     */
    limit?: number
  }

  /**
   * cameras.camera_captures
   */
  export type cameras$camera_capturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    where?: camera_capturesWhereInput
    orderBy?: camera_capturesOrderByWithRelationInput | camera_capturesOrderByWithRelationInput[]
    cursor?: camera_capturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Camera_capturesScalarFieldEnum | Camera_capturesScalarFieldEnum[]
  }

  /**
   * cameras.classes
   */
  export type cameras$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    where?: classesWhereInput
  }

  /**
   * cameras.schools
   */
  export type cameras$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    where?: schoolsWhereInput
  }

  /**
   * cameras without action
   */
  export type camerasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
  }


  /**
   * Model classes
   */

  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesMinAggregateOutputType = {
    id: string | null
    name: string | null
    teacher_id: string | null
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    teacher_id: string | null
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassesCountAggregateOutputType = {
    id: number
    name: number
    teacher_id: number
    school_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassesMinAggregateInputType = {
    id?: true
    name?: true
    teacher_id?: true
    school_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassesMaxAggregateInputType = {
    id?: true
    name?: true
    teacher_id?: true
    school_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassesCountAggregateInputType = {
    id?: true
    name?: true
    teacher_id?: true
    school_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to aggregate.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type classesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
    orderBy?: classesOrderByWithAggregationInput | classesOrderByWithAggregationInput[]
    by: ClassesScalarFieldEnum[] | ClassesScalarFieldEnum
    having?: classesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }

  export type ClassesGroupByOutputType = {
    id: string
    name: string
    teacher_id: string
    school_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends classesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type classesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacher_id?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    attendance_records?: boolean | classes$attendance_recordsArgs<ExtArgs>
    camera_captures?: boolean | classes$camera_capturesArgs<ExtArgs>
    cameras?: boolean | classes$camerasArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    enrollments?: boolean | classes$enrollmentsArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type classesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacher_id?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type classesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacher_id?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type classesSelectScalar = {
    id?: boolean
    name?: boolean
    teacher_id?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type classesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "teacher_id" | "school_id" | "created_at" | "updated_at", ExtArgs["result"]["classes"]>
  export type classesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_records?: boolean | classes$attendance_recordsArgs<ExtArgs>
    camera_captures?: boolean | classes$camera_capturesArgs<ExtArgs>
    cameras?: boolean | classes$camerasArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    enrollments?: boolean | classes$enrollmentsArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type classesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type classesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $classesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classes"
    objects: {
      attendance_records: Prisma.$attendance_recordsPayload<ExtArgs>[]
      camera_captures: Prisma.$camera_capturesPayload<ExtArgs>[]
      cameras: Prisma.$camerasPayload<ExtArgs>[]
      schools: Prisma.$schoolsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      enrollments: Prisma.$enrollmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      teacher_id: string
      school_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["classes"]>
    composites: {}
  }

  type classesGetPayload<S extends boolean | null | undefined | classesDefaultArgs> = $Result.GetResult<Prisma.$classesPayload, S>

  type classesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassesCountAggregateInputType | true
    }

  export interface classesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classes'], meta: { name: 'classes' } }
    /**
     * Find zero or one Classes that matches the filter.
     * @param {classesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classesFindUniqueArgs>(args: SelectSubset<T, classesFindUniqueArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classesFindUniqueOrThrowArgs>(args: SelectSubset<T, classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classesFindFirstArgs>(args?: SelectSubset<T, classesFindFirstArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classesFindFirstOrThrowArgs>(args?: SelectSubset<T, classesFindFirstOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classesWithIdOnly = await prisma.classes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classesFindManyArgs>(args?: SelectSubset<T, classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classes.
     * @param {classesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
     */
    create<T extends classesCreateArgs>(args: SelectSubset<T, classesCreateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {classesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classesCreateManyArgs>(args?: SelectSubset<T, classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {classesCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends classesCreateManyAndReturnArgs>(args?: SelectSubset<T, classesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classes.
     * @param {classesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
     */
    delete<T extends classesDeleteArgs>(args: SelectSubset<T, classesDeleteArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classes.
     * @param {classesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classesUpdateArgs>(args: SelectSubset<T, classesUpdateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {classesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classesDeleteManyArgs>(args?: SelectSubset<T, classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classesUpdateManyArgs>(args: SelectSubset<T, classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {classesUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.updateManyAndReturn({
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
    updateManyAndReturn<T extends classesUpdateManyAndReturnArgs>(args: SelectSubset<T, classesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classes.
     * @param {classesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends classesUpsertArgs>(args: SelectSubset<T, classesUpsertArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classesCountArgs>(
      args?: Subset<T, classesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesGroupByArgs} args - Group by arguments.
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
      T extends classesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classesGroupByArgs['orderBy'] }
        : { orderBy?: classesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classes model
   */
  readonly fields: classesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance_records<T extends classes$attendance_recordsArgs<ExtArgs> = {}>(args?: Subset<T, classes$attendance_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    camera_captures<T extends classes$camera_capturesArgs<ExtArgs> = {}>(args?: Subset<T, classes$camera_capturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cameras<T extends classes$camerasArgs<ExtArgs> = {}>(args?: Subset<T, classes$camerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schools<T extends schoolsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schoolsDefaultArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends classes$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, classes$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the classes model
   */
  interface classesFieldRefs {
    readonly id: FieldRef<"classes", 'String'>
    readonly name: FieldRef<"classes", 'String'>
    readonly teacher_id: FieldRef<"classes", 'String'>
    readonly school_id: FieldRef<"classes", 'String'>
    readonly created_at: FieldRef<"classes", 'DateTime'>
    readonly updated_at: FieldRef<"classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * classes findUnique
   */
  export type classesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findUniqueOrThrow
   */
  export type classesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findFirst
   */
  export type classesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findFirstOrThrow
   */
  export type classesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findMany
   */
  export type classesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes create
   */
  export type classesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The data needed to create a classes.
     */
    data: XOR<classesCreateInput, classesUncheckedCreateInput>
  }

  /**
   * classes createMany
   */
  export type classesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: classesCreateManyInput | classesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classes createManyAndReturn
   */
  export type classesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The data used to create many classes.
     */
    data: classesCreateManyInput | classesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * classes update
   */
  export type classesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The data needed to update a classes.
     */
    data: XOR<classesUpdateInput, classesUncheckedUpdateInput>
    /**
     * Choose, which classes to update.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes updateMany
   */
  export type classesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classes updateManyAndReturn
   */
  export type classesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The data used to update classes.
     */
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * classes upsert
   */
  export type classesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The filter to search for the classes to update in case it exists.
     */
    where: classesWhereUniqueInput
    /**
     * In case the classes found by the `where` argument doesn't exist, create a new classes with this data.
     */
    create: XOR<classesCreateInput, classesUncheckedCreateInput>
    /**
     * In case the classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classesUpdateInput, classesUncheckedUpdateInput>
  }

  /**
   * classes delete
   */
  export type classesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter which classes to delete.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes deleteMany
   */
  export type classesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to delete.
     */
    limit?: number
  }

  /**
   * classes.attendance_records
   */
  export type classes$attendance_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    where?: attendance_recordsWhereInput
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    cursor?: attendance_recordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Attendance_recordsScalarFieldEnum | Attendance_recordsScalarFieldEnum[]
  }

  /**
   * classes.camera_captures
   */
  export type classes$camera_capturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_captures
     */
    select?: camera_capturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the camera_captures
     */
    omit?: camera_capturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camera_capturesInclude<ExtArgs> | null
    where?: camera_capturesWhereInput
    orderBy?: camera_capturesOrderByWithRelationInput | camera_capturesOrderByWithRelationInput[]
    cursor?: camera_capturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Camera_capturesScalarFieldEnum | Camera_capturesScalarFieldEnum[]
  }

  /**
   * classes.cameras
   */
  export type classes$camerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    where?: camerasWhereInput
    orderBy?: camerasOrderByWithRelationInput | camerasOrderByWithRelationInput[]
    cursor?: camerasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CamerasScalarFieldEnum | CamerasScalarFieldEnum[]
  }

  /**
   * classes.enrollments
   */
  export type classes$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    cursor?: enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * classes without action
   */
  export type classesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
  }


  /**
   * Model enrollments
   */

  export type AggregateEnrollments = {
    _count: EnrollmentsCountAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  export type EnrollmentsMinAggregateOutputType = {
    student_id: string | null
    class_id: string | null
    enrolled_at: Date | null
  }

  export type EnrollmentsMaxAggregateOutputType = {
    student_id: string | null
    class_id: string | null
    enrolled_at: Date | null
  }

  export type EnrollmentsCountAggregateOutputType = {
    student_id: number
    class_id: number
    enrolled_at: number
    _all: number
  }


  export type EnrollmentsMinAggregateInputType = {
    student_id?: true
    class_id?: true
    enrolled_at?: true
  }

  export type EnrollmentsMaxAggregateInputType = {
    student_id?: true
    class_id?: true
    enrolled_at?: true
  }

  export type EnrollmentsCountAggregateInputType = {
    student_id?: true
    class_id?: true
    enrolled_at?: true
    _all?: true
  }

  export type EnrollmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to aggregate.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollments
    **/
    _count?: true | EnrollmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type GetEnrollmentsAggregateType<T extends EnrollmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollments[P]>
      : GetScalarType<T[P], AggregateEnrollments[P]>
  }




  export type enrollmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithAggregationInput | enrollmentsOrderByWithAggregationInput[]
    by: EnrollmentsScalarFieldEnum[] | EnrollmentsScalarFieldEnum
    having?: enrollmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentsCountAggregateInputType | true
    _min?: EnrollmentsMinAggregateInputType
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type EnrollmentsGroupByOutputType = {
    student_id: string
    class_id: string
    enrolled_at: Date | null
    _count: EnrollmentsCountAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  type GetEnrollmentsGroupByPayload<T extends enrollmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
        }
      >
    >


  export type enrollmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    class_id?: boolean
    enrolled_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    class_id?: boolean
    enrolled_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    class_id?: boolean
    enrolled_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectScalar = {
    student_id?: boolean
    class_id?: boolean
    enrolled_at?: boolean
  }

  export type enrollmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "class_id" | "enrolled_at", ExtArgs["result"]["enrollments"]>
  export type enrollmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type enrollmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type enrollmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }

  export type $enrollmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollments"
    objects: {
      classes: Prisma.$classesPayload<ExtArgs>
      students: Prisma.$studentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: string
      class_id: string
      enrolled_at: Date | null
    }, ExtArgs["result"]["enrollments"]>
    composites: {}
  }

  type enrollmentsGetPayload<S extends boolean | null | undefined | enrollmentsDefaultArgs> = $Result.GetResult<Prisma.$enrollmentsPayload, S>

  type enrollmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentsCountAggregateInputType | true
    }

  export interface enrollmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollments'], meta: { name: 'enrollments' } }
    /**
     * Find zero or one Enrollments that matches the filter.
     * @param {enrollmentsFindUniqueArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollmentsFindUniqueArgs>(args: SelectSubset<T, enrollmentsFindUniqueArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollmentsFindUniqueOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindFirstArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollmentsFindFirstArgs>(args?: SelectSubset<T, enrollmentsFindFirstArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindFirstOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollments.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollments.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const enrollmentsWithStudent_idOnly = await prisma.enrollments.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends enrollmentsFindManyArgs>(args?: SelectSubset<T, enrollmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollments.
     * @param {enrollmentsCreateArgs} args - Arguments to create a Enrollments.
     * @example
     * // Create one Enrollments
     * const Enrollments = await prisma.enrollments.create({
     *   data: {
     *     // ... data to create a Enrollments
     *   }
     * })
     * 
     */
    create<T extends enrollmentsCreateArgs>(args: SelectSubset<T, enrollmentsCreateArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {enrollmentsCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollmentsCreateManyArgs>(args?: SelectSubset<T, enrollmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {enrollmentsCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `student_id`
     * const enrollmentsWithStudent_idOnly = await prisma.enrollments.createManyAndReturn({
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enrollmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, enrollmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollments.
     * @param {enrollmentsDeleteArgs} args - Arguments to delete one Enrollments.
     * @example
     * // Delete one Enrollments
     * const Enrollments = await prisma.enrollments.delete({
     *   where: {
     *     // ... filter to delete one Enrollments
     *   }
     * })
     * 
     */
    delete<T extends enrollmentsDeleteArgs>(args: SelectSubset<T, enrollmentsDeleteArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollments.
     * @param {enrollmentsUpdateArgs} args - Arguments to update one Enrollments.
     * @example
     * // Update one Enrollments
     * const enrollments = await prisma.enrollments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollmentsUpdateArgs>(args: SelectSubset<T, enrollmentsUpdateArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentsDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollmentsDeleteManyArgs>(args?: SelectSubset<T, enrollmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollmentsUpdateManyArgs>(args: SelectSubset<T, enrollmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {enrollmentsUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `student_id`
     * const enrollmentsWithStudent_idOnly = await prisma.enrollments.updateManyAndReturn({
     *   select: { student_id: true },
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
    updateManyAndReturn<T extends enrollmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, enrollmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollments.
     * @param {enrollmentsUpsertArgs} args - Arguments to update or create a Enrollments.
     * @example
     * // Update or create a Enrollments
     * const enrollments = await prisma.enrollments.upsert({
     *   create: {
     *     // ... data to create a Enrollments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollments we want to update
     *   }
     * })
     */
    upsert<T extends enrollmentsUpsertArgs>(args: SelectSubset<T, enrollmentsUpsertArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollments.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends enrollmentsCountArgs>(
      args?: Subset<T, enrollmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentsAggregateArgs>(args: Subset<T, EnrollmentsAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentsAggregateType<T>>

    /**
     * Group by Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsGroupByArgs} args - Group by arguments.
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
      T extends enrollmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentsGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enrollmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollments model
   */
  readonly fields: enrollmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends classesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classesDefaultArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the enrollments model
   */
  interface enrollmentsFieldRefs {
    readonly student_id: FieldRef<"enrollments", 'String'>
    readonly class_id: FieldRef<"enrollments", 'String'>
    readonly enrolled_at: FieldRef<"enrollments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * enrollments findUnique
   */
  export type enrollmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments findUniqueOrThrow
   */
  export type enrollmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments findFirst
   */
  export type enrollmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments findFirstOrThrow
   */
  export type enrollmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments findMany
   */
  export type enrollmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments create
   */
  export type enrollmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollments.
     */
    data: XOR<enrollmentsCreateInput, enrollmentsUncheckedCreateInput>
  }

  /**
   * enrollments createMany
   */
  export type enrollmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentsCreateManyInput | enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enrollments createManyAndReturn
   */
  export type enrollmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentsCreateManyInput | enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollments update
   */
  export type enrollmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollments.
     */
    data: XOR<enrollmentsUpdateInput, enrollmentsUncheckedUpdateInput>
    /**
     * Choose, which enrollments to update.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments updateMany
   */
  export type enrollmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
  }

  /**
   * enrollments updateManyAndReturn
   */
  export type enrollmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollments upsert
   */
  export type enrollmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollments to update in case it exists.
     */
    where: enrollmentsWhereUniqueInput
    /**
     * In case the enrollments found by the `where` argument doesn't exist, create a new enrollments with this data.
     */
    create: XOR<enrollmentsCreateInput, enrollmentsUncheckedCreateInput>
    /**
     * In case the enrollments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentsUpdateInput, enrollmentsUncheckedUpdateInput>
  }

  /**
   * enrollments delete
   */
  export type enrollmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter which enrollments to delete.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments deleteMany
   */
  export type enrollmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to delete.
     */
    limit?: number
  }

  /**
   * enrollments without action
   */
  export type enrollmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
  }


  /**
   * Model recognized_faces
   */

  export type AggregateRecognized_faces = {
    _count: Recognized_facesCountAggregateOutputType | null
    _avg: Recognized_facesAvgAggregateOutputType | null
    _sum: Recognized_facesSumAggregateOutputType | null
    _min: Recognized_facesMinAggregateOutputType | null
    _max: Recognized_facesMaxAggregateOutputType | null
  }

  export type Recognized_facesAvgAggregateOutputType = {
    confidence_score: Decimal | null
  }

  export type Recognized_facesSumAggregateOutputType = {
    confidence_score: Decimal | null
  }

  export type Recognized_facesMinAggregateOutputType = {
    id: string | null
    capture_id: string | null
    student_id: string | null
    confidence_score: Decimal | null
    created_at: Date | null
  }

  export type Recognized_facesMaxAggregateOutputType = {
    id: string | null
    capture_id: string | null
    student_id: string | null
    confidence_score: Decimal | null
    created_at: Date | null
  }

  export type Recognized_facesCountAggregateOutputType = {
    id: number
    capture_id: number
    student_id: number
    confidence_score: number
    created_at: number
    _all: number
  }


  export type Recognized_facesAvgAggregateInputType = {
    confidence_score?: true
  }

  export type Recognized_facesSumAggregateInputType = {
    confidence_score?: true
  }

  export type Recognized_facesMinAggregateInputType = {
    id?: true
    capture_id?: true
    student_id?: true
    confidence_score?: true
    created_at?: true
  }

  export type Recognized_facesMaxAggregateInputType = {
    id?: true
    capture_id?: true
    student_id?: true
    confidence_score?: true
    created_at?: true
  }

  export type Recognized_facesCountAggregateInputType = {
    id?: true
    capture_id?: true
    student_id?: true
    confidence_score?: true
    created_at?: true
    _all?: true
  }

  export type Recognized_facesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recognized_faces to aggregate.
     */
    where?: recognized_facesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recognized_faces to fetch.
     */
    orderBy?: recognized_facesOrderByWithRelationInput | recognized_facesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recognized_facesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recognized_faces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recognized_faces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recognized_faces
    **/
    _count?: true | Recognized_facesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recognized_facesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recognized_facesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recognized_facesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recognized_facesMaxAggregateInputType
  }

  export type GetRecognized_facesAggregateType<T extends Recognized_facesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecognized_faces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecognized_faces[P]>
      : GetScalarType<T[P], AggregateRecognized_faces[P]>
  }




  export type recognized_facesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recognized_facesWhereInput
    orderBy?: recognized_facesOrderByWithAggregationInput | recognized_facesOrderByWithAggregationInput[]
    by: Recognized_facesScalarFieldEnum[] | Recognized_facesScalarFieldEnum
    having?: recognized_facesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recognized_facesCountAggregateInputType | true
    _avg?: Recognized_facesAvgAggregateInputType
    _sum?: Recognized_facesSumAggregateInputType
    _min?: Recognized_facesMinAggregateInputType
    _max?: Recognized_facesMaxAggregateInputType
  }

  export type Recognized_facesGroupByOutputType = {
    id: string
    capture_id: string
    student_id: string
    confidence_score: Decimal
    created_at: Date | null
    _count: Recognized_facesCountAggregateOutputType | null
    _avg: Recognized_facesAvgAggregateOutputType | null
    _sum: Recognized_facesSumAggregateOutputType | null
    _min: Recognized_facesMinAggregateOutputType | null
    _max: Recognized_facesMaxAggregateOutputType | null
  }

  type GetRecognized_facesGroupByPayload<T extends recognized_facesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recognized_facesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recognized_facesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recognized_facesGroupByOutputType[P]>
            : GetScalarType<T[P], Recognized_facesGroupByOutputType[P]>
        }
      >
    >


  export type recognized_facesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capture_id?: boolean
    student_id?: boolean
    confidence_score?: boolean
    created_at?: boolean
    camera_captures?: boolean | camera_capturesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recognized_faces"]>

  export type recognized_facesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capture_id?: boolean
    student_id?: boolean
    confidence_score?: boolean
    created_at?: boolean
    camera_captures?: boolean | camera_capturesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recognized_faces"]>

  export type recognized_facesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    capture_id?: boolean
    student_id?: boolean
    confidence_score?: boolean
    created_at?: boolean
    camera_captures?: boolean | camera_capturesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recognized_faces"]>

  export type recognized_facesSelectScalar = {
    id?: boolean
    capture_id?: boolean
    student_id?: boolean
    confidence_score?: boolean
    created_at?: boolean
  }

  export type recognized_facesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "capture_id" | "student_id" | "confidence_score" | "created_at", ExtArgs["result"]["recognized_faces"]>
  export type recognized_facesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_captures?: boolean | camera_capturesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type recognized_facesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_captures?: boolean | camera_capturesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type recognized_facesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_captures?: boolean | camera_capturesDefaultArgs<ExtArgs>
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }

  export type $recognized_facesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recognized_faces"
    objects: {
      camera_captures: Prisma.$camera_capturesPayload<ExtArgs>
      students: Prisma.$studentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      capture_id: string
      student_id: string
      confidence_score: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["recognized_faces"]>
    composites: {}
  }

  type recognized_facesGetPayload<S extends boolean | null | undefined | recognized_facesDefaultArgs> = $Result.GetResult<Prisma.$recognized_facesPayload, S>

  type recognized_facesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recognized_facesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recognized_facesCountAggregateInputType | true
    }

  export interface recognized_facesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recognized_faces'], meta: { name: 'recognized_faces' } }
    /**
     * Find zero or one Recognized_faces that matches the filter.
     * @param {recognized_facesFindUniqueArgs} args - Arguments to find a Recognized_faces
     * @example
     * // Get one Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recognized_facesFindUniqueArgs>(args: SelectSubset<T, recognized_facesFindUniqueArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recognized_faces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recognized_facesFindUniqueOrThrowArgs} args - Arguments to find a Recognized_faces
     * @example
     * // Get one Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recognized_facesFindUniqueOrThrowArgs>(args: SelectSubset<T, recognized_facesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recognized_faces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recognized_facesFindFirstArgs} args - Arguments to find a Recognized_faces
     * @example
     * // Get one Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recognized_facesFindFirstArgs>(args?: SelectSubset<T, recognized_facesFindFirstArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recognized_faces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recognized_facesFindFirstOrThrowArgs} args - Arguments to find a Recognized_faces
     * @example
     * // Get one Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recognized_facesFindFirstOrThrowArgs>(args?: SelectSubset<T, recognized_facesFindFirstOrThrowArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recognized_faces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recognized_facesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.findMany()
     * 
     * // Get first 10 Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recognized_facesWithIdOnly = await prisma.recognized_faces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recognized_facesFindManyArgs>(args?: SelectSubset<T, recognized_facesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recognized_faces.
     * @param {recognized_facesCreateArgs} args - Arguments to create a Recognized_faces.
     * @example
     * // Create one Recognized_faces
     * const Recognized_faces = await prisma.recognized_faces.create({
     *   data: {
     *     // ... data to create a Recognized_faces
     *   }
     * })
     * 
     */
    create<T extends recognized_facesCreateArgs>(args: SelectSubset<T, recognized_facesCreateArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recognized_faces.
     * @param {recognized_facesCreateManyArgs} args - Arguments to create many Recognized_faces.
     * @example
     * // Create many Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recognized_facesCreateManyArgs>(args?: SelectSubset<T, recognized_facesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recognized_faces and returns the data saved in the database.
     * @param {recognized_facesCreateManyAndReturnArgs} args - Arguments to create many Recognized_faces.
     * @example
     * // Create many Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recognized_faces and only return the `id`
     * const recognized_facesWithIdOnly = await prisma.recognized_faces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recognized_facesCreateManyAndReturnArgs>(args?: SelectSubset<T, recognized_facesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recognized_faces.
     * @param {recognized_facesDeleteArgs} args - Arguments to delete one Recognized_faces.
     * @example
     * // Delete one Recognized_faces
     * const Recognized_faces = await prisma.recognized_faces.delete({
     *   where: {
     *     // ... filter to delete one Recognized_faces
     *   }
     * })
     * 
     */
    delete<T extends recognized_facesDeleteArgs>(args: SelectSubset<T, recognized_facesDeleteArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recognized_faces.
     * @param {recognized_facesUpdateArgs} args - Arguments to update one Recognized_faces.
     * @example
     * // Update one Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recognized_facesUpdateArgs>(args: SelectSubset<T, recognized_facesUpdateArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recognized_faces.
     * @param {recognized_facesDeleteManyArgs} args - Arguments to filter Recognized_faces to delete.
     * @example
     * // Delete a few Recognized_faces
     * const { count } = await prisma.recognized_faces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recognized_facesDeleteManyArgs>(args?: SelectSubset<T, recognized_facesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recognized_faces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recognized_facesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recognized_facesUpdateManyArgs>(args: SelectSubset<T, recognized_facesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recognized_faces and returns the data updated in the database.
     * @param {recognized_facesUpdateManyAndReturnArgs} args - Arguments to update many Recognized_faces.
     * @example
     * // Update many Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recognized_faces and only return the `id`
     * const recognized_facesWithIdOnly = await prisma.recognized_faces.updateManyAndReturn({
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
    updateManyAndReturn<T extends recognized_facesUpdateManyAndReturnArgs>(args: SelectSubset<T, recognized_facesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recognized_faces.
     * @param {recognized_facesUpsertArgs} args - Arguments to update or create a Recognized_faces.
     * @example
     * // Update or create a Recognized_faces
     * const recognized_faces = await prisma.recognized_faces.upsert({
     *   create: {
     *     // ... data to create a Recognized_faces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recognized_faces we want to update
     *   }
     * })
     */
    upsert<T extends recognized_facesUpsertArgs>(args: SelectSubset<T, recognized_facesUpsertArgs<ExtArgs>>): Prisma__recognized_facesClient<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recognized_faces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recognized_facesCountArgs} args - Arguments to filter Recognized_faces to count.
     * @example
     * // Count the number of Recognized_faces
     * const count = await prisma.recognized_faces.count({
     *   where: {
     *     // ... the filter for the Recognized_faces we want to count
     *   }
     * })
    **/
    count<T extends recognized_facesCountArgs>(
      args?: Subset<T, recognized_facesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recognized_facesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recognized_faces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recognized_facesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Recognized_facesAggregateArgs>(args: Subset<T, Recognized_facesAggregateArgs>): Prisma.PrismaPromise<GetRecognized_facesAggregateType<T>>

    /**
     * Group by Recognized_faces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recognized_facesGroupByArgs} args - Group by arguments.
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
      T extends recognized_facesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recognized_facesGroupByArgs['orderBy'] }
        : { orderBy?: recognized_facesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recognized_facesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecognized_facesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recognized_faces model
   */
  readonly fields: recognized_facesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recognized_faces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recognized_facesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    camera_captures<T extends camera_capturesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, camera_capturesDefaultArgs<ExtArgs>>): Prisma__camera_capturesClient<$Result.GetResult<Prisma.$camera_capturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the recognized_faces model
   */
  interface recognized_facesFieldRefs {
    readonly id: FieldRef<"recognized_faces", 'String'>
    readonly capture_id: FieldRef<"recognized_faces", 'String'>
    readonly student_id: FieldRef<"recognized_faces", 'String'>
    readonly confidence_score: FieldRef<"recognized_faces", 'Decimal'>
    readonly created_at: FieldRef<"recognized_faces", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recognized_faces findUnique
   */
  export type recognized_facesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * Filter, which recognized_faces to fetch.
     */
    where: recognized_facesWhereUniqueInput
  }

  /**
   * recognized_faces findUniqueOrThrow
   */
  export type recognized_facesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * Filter, which recognized_faces to fetch.
     */
    where: recognized_facesWhereUniqueInput
  }

  /**
   * recognized_faces findFirst
   */
  export type recognized_facesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * Filter, which recognized_faces to fetch.
     */
    where?: recognized_facesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recognized_faces to fetch.
     */
    orderBy?: recognized_facesOrderByWithRelationInput | recognized_facesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recognized_faces.
     */
    cursor?: recognized_facesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recognized_faces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recognized_faces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recognized_faces.
     */
    distinct?: Recognized_facesScalarFieldEnum | Recognized_facesScalarFieldEnum[]
  }

  /**
   * recognized_faces findFirstOrThrow
   */
  export type recognized_facesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * Filter, which recognized_faces to fetch.
     */
    where?: recognized_facesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recognized_faces to fetch.
     */
    orderBy?: recognized_facesOrderByWithRelationInput | recognized_facesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recognized_faces.
     */
    cursor?: recognized_facesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recognized_faces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recognized_faces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recognized_faces.
     */
    distinct?: Recognized_facesScalarFieldEnum | Recognized_facesScalarFieldEnum[]
  }

  /**
   * recognized_faces findMany
   */
  export type recognized_facesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * Filter, which recognized_faces to fetch.
     */
    where?: recognized_facesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recognized_faces to fetch.
     */
    orderBy?: recognized_facesOrderByWithRelationInput | recognized_facesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recognized_faces.
     */
    cursor?: recognized_facesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recognized_faces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recognized_faces.
     */
    skip?: number
    distinct?: Recognized_facesScalarFieldEnum | Recognized_facesScalarFieldEnum[]
  }

  /**
   * recognized_faces create
   */
  export type recognized_facesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * The data needed to create a recognized_faces.
     */
    data: XOR<recognized_facesCreateInput, recognized_facesUncheckedCreateInput>
  }

  /**
   * recognized_faces createMany
   */
  export type recognized_facesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recognized_faces.
     */
    data: recognized_facesCreateManyInput | recognized_facesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recognized_faces createManyAndReturn
   */
  export type recognized_facesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * The data used to create many recognized_faces.
     */
    data: recognized_facesCreateManyInput | recognized_facesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recognized_faces update
   */
  export type recognized_facesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * The data needed to update a recognized_faces.
     */
    data: XOR<recognized_facesUpdateInput, recognized_facesUncheckedUpdateInput>
    /**
     * Choose, which recognized_faces to update.
     */
    where: recognized_facesWhereUniqueInput
  }

  /**
   * recognized_faces updateMany
   */
  export type recognized_facesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recognized_faces.
     */
    data: XOR<recognized_facesUpdateManyMutationInput, recognized_facesUncheckedUpdateManyInput>
    /**
     * Filter which recognized_faces to update
     */
    where?: recognized_facesWhereInput
    /**
     * Limit how many recognized_faces to update.
     */
    limit?: number
  }

  /**
   * recognized_faces updateManyAndReturn
   */
  export type recognized_facesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * The data used to update recognized_faces.
     */
    data: XOR<recognized_facesUpdateManyMutationInput, recognized_facesUncheckedUpdateManyInput>
    /**
     * Filter which recognized_faces to update
     */
    where?: recognized_facesWhereInput
    /**
     * Limit how many recognized_faces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recognized_faces upsert
   */
  export type recognized_facesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * The filter to search for the recognized_faces to update in case it exists.
     */
    where: recognized_facesWhereUniqueInput
    /**
     * In case the recognized_faces found by the `where` argument doesn't exist, create a new recognized_faces with this data.
     */
    create: XOR<recognized_facesCreateInput, recognized_facesUncheckedCreateInput>
    /**
     * In case the recognized_faces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recognized_facesUpdateInput, recognized_facesUncheckedUpdateInput>
  }

  /**
   * recognized_faces delete
   */
  export type recognized_facesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    /**
     * Filter which recognized_faces to delete.
     */
    where: recognized_facesWhereUniqueInput
  }

  /**
   * recognized_faces deleteMany
   */
  export type recognized_facesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recognized_faces to delete
     */
    where?: recognized_facesWhereInput
    /**
     * Limit how many recognized_faces to delete.
     */
    limit?: number
  }

  /**
   * recognized_faces without action
   */
  export type recognized_facesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
  }


  /**
   * Model schools
   */

  export type AggregateSchools = {
    _count: SchoolsCountAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  export type SchoolsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SchoolsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SchoolsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SchoolsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SchoolsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SchoolsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SchoolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to aggregate.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schools
    **/
    _count?: true | SchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolsMaxAggregateInputType
  }

  export type GetSchoolsAggregateType<T extends SchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchools[P]>
      : GetScalarType<T[P], AggregateSchools[P]>
  }




  export type schoolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolsWhereInput
    orderBy?: schoolsOrderByWithAggregationInput | schoolsOrderByWithAggregationInput[]
    by: SchoolsScalarFieldEnum[] | SchoolsScalarFieldEnum
    having?: schoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolsCountAggregateInputType | true
    _min?: SchoolsMinAggregateInputType
    _max?: SchoolsMaxAggregateInputType
  }

  export type SchoolsGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: SchoolsCountAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  type GetSchoolsGroupByPayload<T extends schoolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
        }
      >
    >


  export type schoolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    cameras?: boolean | schools$camerasArgs<ExtArgs>
    classes?: boolean | schools$classesArgs<ExtArgs>
    students?: boolean | schools$studentsArgs<ExtArgs>
    _count?: boolean | SchoolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type schoolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["schools"]>
  export type schoolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cameras?: boolean | schools$camerasArgs<ExtArgs>
    classes?: boolean | schools$classesArgs<ExtArgs>
    students?: boolean | schools$studentsArgs<ExtArgs>
    _count?: boolean | SchoolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type schoolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type schoolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $schoolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schools"
    objects: {
      cameras: Prisma.$camerasPayload<ExtArgs>[]
      classes: Prisma.$classesPayload<ExtArgs>[]
      students: Prisma.$studentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["schools"]>
    composites: {}
  }

  type schoolsGetPayload<S extends boolean | null | undefined | schoolsDefaultArgs> = $Result.GetResult<Prisma.$schoolsPayload, S>

  type schoolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schoolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolsCountAggregateInputType | true
    }

  export interface schoolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schools'], meta: { name: 'schools' } }
    /**
     * Find zero or one Schools that matches the filter.
     * @param {schoolsFindUniqueArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schoolsFindUniqueArgs>(args: SelectSubset<T, schoolsFindUniqueArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schoolsFindUniqueOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schoolsFindUniqueOrThrowArgs>(args: SelectSubset<T, schoolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schoolsFindFirstArgs>(args?: SelectSubset<T, schoolsFindFirstArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schoolsFindFirstOrThrowArgs>(args?: SelectSubset<T, schoolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.schools.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.schools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolsWithIdOnly = await prisma.schools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends schoolsFindManyArgs>(args?: SelectSubset<T, schoolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schools.
     * @param {schoolsCreateArgs} args - Arguments to create a Schools.
     * @example
     * // Create one Schools
     * const Schools = await prisma.schools.create({
     *   data: {
     *     // ... data to create a Schools
     *   }
     * })
     * 
     */
    create<T extends schoolsCreateArgs>(args: SelectSubset<T, schoolsCreateArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {schoolsCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const schools = await prisma.schools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schoolsCreateManyArgs>(args?: SelectSubset<T, schoolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {schoolsCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const schools = await prisma.schools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolsWithIdOnly = await prisma.schools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends schoolsCreateManyAndReturnArgs>(args?: SelectSubset<T, schoolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schools.
     * @param {schoolsDeleteArgs} args - Arguments to delete one Schools.
     * @example
     * // Delete one Schools
     * const Schools = await prisma.schools.delete({
     *   where: {
     *     // ... filter to delete one Schools
     *   }
     * })
     * 
     */
    delete<T extends schoolsDeleteArgs>(args: SelectSubset<T, schoolsDeleteArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schools.
     * @param {schoolsUpdateArgs} args - Arguments to update one Schools.
     * @example
     * // Update one Schools
     * const schools = await prisma.schools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schoolsUpdateArgs>(args: SelectSubset<T, schoolsUpdateArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {schoolsDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.schools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schoolsDeleteManyArgs>(args?: SelectSubset<T, schoolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schoolsUpdateManyArgs>(args: SelectSubset<T, schoolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {schoolsUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolsWithIdOnly = await prisma.schools.updateManyAndReturn({
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
    updateManyAndReturn<T extends schoolsUpdateManyAndReturnArgs>(args: SelectSubset<T, schoolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schools.
     * @param {schoolsUpsertArgs} args - Arguments to update or create a Schools.
     * @example
     * // Update or create a Schools
     * const schools = await prisma.schools.upsert({
     *   create: {
     *     // ... data to create a Schools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schools we want to update
     *   }
     * })
     */
    upsert<T extends schoolsUpsertArgs>(args: SelectSubset<T, schoolsUpsertArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.schools.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends schoolsCountArgs>(
      args?: Subset<T, schoolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolsAggregateArgs>(args: Subset<T, SchoolsAggregateArgs>): Prisma.PrismaPromise<GetSchoolsAggregateType<T>>

    /**
     * Group by Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsGroupByArgs} args - Group by arguments.
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
      T extends schoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolsGroupByArgs['orderBy'] }
        : { orderBy?: schoolsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, schoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schools model
   */
  readonly fields: schoolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cameras<T extends schools$camerasArgs<ExtArgs> = {}>(args?: Subset<T, schools$camerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camerasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends schools$classesArgs<ExtArgs> = {}>(args?: Subset<T, schools$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends schools$studentsArgs<ExtArgs> = {}>(args?: Subset<T, schools$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the schools model
   */
  interface schoolsFieldRefs {
    readonly id: FieldRef<"schools", 'String'>
    readonly name: FieldRef<"schools", 'String'>
    readonly created_at: FieldRef<"schools", 'DateTime'>
    readonly updated_at: FieldRef<"schools", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schools findUnique
   */
  export type schoolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findUniqueOrThrow
   */
  export type schoolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findFirst
   */
  export type schoolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findFirstOrThrow
   */
  export type schoolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findMany
   */
  export type schoolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools create
   */
  export type schoolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The data needed to create a schools.
     */
    data: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
  }

  /**
   * schools createMany
   */
  export type schoolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schools createManyAndReturn
   */
  export type schoolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schools update
   */
  export type schoolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The data needed to update a schools.
     */
    data: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
    /**
     * Choose, which schools to update.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools updateMany
   */
  export type schoolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to update.
     */
    limit?: number
  }

  /**
   * schools updateManyAndReturn
   */
  export type schoolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to update.
     */
    limit?: number
  }

  /**
   * schools upsert
   */
  export type schoolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The filter to search for the schools to update in case it exists.
     */
    where: schoolsWhereUniqueInput
    /**
     * In case the schools found by the `where` argument doesn't exist, create a new schools with this data.
     */
    create: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
    /**
     * In case the schools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
  }

  /**
   * schools delete
   */
  export type schoolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter which schools to delete.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools deleteMany
   */
  export type schoolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to delete.
     */
    limit?: number
  }

  /**
   * schools.cameras
   */
  export type schools$camerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cameras
     */
    select?: camerasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cameras
     */
    omit?: camerasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: camerasInclude<ExtArgs> | null
    where?: camerasWhereInput
    orderBy?: camerasOrderByWithRelationInput | camerasOrderByWithRelationInput[]
    cursor?: camerasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CamerasScalarFieldEnum | CamerasScalarFieldEnum[]
  }

  /**
   * schools.classes
   */
  export type schools$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    where?: classesWhereInput
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    cursor?: classesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * schools.students
   */
  export type schools$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * schools without action
   */
  export type schoolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
  }


  /**
   * Model student_images
   */

  export type AggregateStudent_images = {
    _count: Student_imagesCountAggregateOutputType | null
    _min: Student_imagesMinAggregateOutputType | null
    _max: Student_imagesMaxAggregateOutputType | null
  }

  export type Student_imagesMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    image_path: string | null
    uploaded_at: Date | null
    is_active: boolean | null
  }

  export type Student_imagesMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    image_path: string | null
    uploaded_at: Date | null
    is_active: boolean | null
  }

  export type Student_imagesCountAggregateOutputType = {
    id: number
    student_id: number
    image_path: number
    uploaded_at: number
    is_active: number
    _all: number
  }


  export type Student_imagesMinAggregateInputType = {
    id?: true
    student_id?: true
    image_path?: true
    uploaded_at?: true
    is_active?: true
  }

  export type Student_imagesMaxAggregateInputType = {
    id?: true
    student_id?: true
    image_path?: true
    uploaded_at?: true
    is_active?: true
  }

  export type Student_imagesCountAggregateInputType = {
    id?: true
    student_id?: true
    image_path?: true
    uploaded_at?: true
    is_active?: true
    _all?: true
  }

  export type Student_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_images to aggregate.
     */
    where?: student_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_images to fetch.
     */
    orderBy?: student_imagesOrderByWithRelationInput | student_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_images
    **/
    _count?: true | Student_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_imagesMaxAggregateInputType
  }

  export type GetStudent_imagesAggregateType<T extends Student_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_images[P]>
      : GetScalarType<T[P], AggregateStudent_images[P]>
  }




  export type student_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_imagesWhereInput
    orderBy?: student_imagesOrderByWithAggregationInput | student_imagesOrderByWithAggregationInput[]
    by: Student_imagesScalarFieldEnum[] | Student_imagesScalarFieldEnum
    having?: student_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_imagesCountAggregateInputType | true
    _min?: Student_imagesMinAggregateInputType
    _max?: Student_imagesMaxAggregateInputType
  }

  export type Student_imagesGroupByOutputType = {
    id: string
    student_id: string
    image_path: string
    uploaded_at: Date | null
    is_active: boolean | null
    _count: Student_imagesCountAggregateOutputType | null
    _min: Student_imagesMinAggregateOutputType | null
    _max: Student_imagesMaxAggregateOutputType | null
  }

  type GetStudent_imagesGroupByPayload<T extends student_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Student_imagesGroupByOutputType[P]>
        }
      >
    >


  export type student_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    image_path?: boolean
    uploaded_at?: boolean
    is_active?: boolean
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_images"]>

  export type student_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    image_path?: boolean
    uploaded_at?: boolean
    is_active?: boolean
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_images"]>

  export type student_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    image_path?: boolean
    uploaded_at?: boolean
    is_active?: boolean
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_images"]>

  export type student_imagesSelectScalar = {
    id?: boolean
    student_id?: boolean
    image_path?: boolean
    uploaded_at?: boolean
    is_active?: boolean
  }

  export type student_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "image_path" | "uploaded_at" | "is_active", ExtArgs["result"]["student_images"]>
  export type student_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type student_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }
  export type student_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }

  export type $student_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_images"
    objects: {
      students: Prisma.$studentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      image_path: string
      uploaded_at: Date | null
      is_active: boolean | null
    }, ExtArgs["result"]["student_images"]>
    composites: {}
  }

  type student_imagesGetPayload<S extends boolean | null | undefined | student_imagesDefaultArgs> = $Result.GetResult<Prisma.$student_imagesPayload, S>

  type student_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_imagesCountAggregateInputType | true
    }

  export interface student_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_images'], meta: { name: 'student_images' } }
    /**
     * Find zero or one Student_images that matches the filter.
     * @param {student_imagesFindUniqueArgs} args - Arguments to find a Student_images
     * @example
     * // Get one Student_images
     * const student_images = await prisma.student_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_imagesFindUniqueArgs>(args: SelectSubset<T, student_imagesFindUniqueArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_imagesFindUniqueOrThrowArgs} args - Arguments to find a Student_images
     * @example
     * // Get one Student_images
     * const student_images = await prisma.student_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, student_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_imagesFindFirstArgs} args - Arguments to find a Student_images
     * @example
     * // Get one Student_images
     * const student_images = await prisma.student_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_imagesFindFirstArgs>(args?: SelectSubset<T, student_imagesFindFirstArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_imagesFindFirstOrThrowArgs} args - Arguments to find a Student_images
     * @example
     * // Get one Student_images
     * const student_images = await prisma.student_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, student_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_images
     * const student_images = await prisma.student_images.findMany()
     * 
     * // Get first 10 Student_images
     * const student_images = await prisma.student_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const student_imagesWithIdOnly = await prisma.student_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends student_imagesFindManyArgs>(args?: SelectSubset<T, student_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_images.
     * @param {student_imagesCreateArgs} args - Arguments to create a Student_images.
     * @example
     * // Create one Student_images
     * const Student_images = await prisma.student_images.create({
     *   data: {
     *     // ... data to create a Student_images
     *   }
     * })
     * 
     */
    create<T extends student_imagesCreateArgs>(args: SelectSubset<T, student_imagesCreateArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_images.
     * @param {student_imagesCreateManyArgs} args - Arguments to create many Student_images.
     * @example
     * // Create many Student_images
     * const student_images = await prisma.student_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_imagesCreateManyArgs>(args?: SelectSubset<T, student_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_images and returns the data saved in the database.
     * @param {student_imagesCreateManyAndReturnArgs} args - Arguments to create many Student_images.
     * @example
     * // Create many Student_images
     * const student_images = await prisma.student_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_images and only return the `id`
     * const student_imagesWithIdOnly = await prisma.student_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends student_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, student_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_images.
     * @param {student_imagesDeleteArgs} args - Arguments to delete one Student_images.
     * @example
     * // Delete one Student_images
     * const Student_images = await prisma.student_images.delete({
     *   where: {
     *     // ... filter to delete one Student_images
     *   }
     * })
     * 
     */
    delete<T extends student_imagesDeleteArgs>(args: SelectSubset<T, student_imagesDeleteArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_images.
     * @param {student_imagesUpdateArgs} args - Arguments to update one Student_images.
     * @example
     * // Update one Student_images
     * const student_images = await prisma.student_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_imagesUpdateArgs>(args: SelectSubset<T, student_imagesUpdateArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_images.
     * @param {student_imagesDeleteManyArgs} args - Arguments to filter Student_images to delete.
     * @example
     * // Delete a few Student_images
     * const { count } = await prisma.student_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_imagesDeleteManyArgs>(args?: SelectSubset<T, student_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_images
     * const student_images = await prisma.student_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_imagesUpdateManyArgs>(args: SelectSubset<T, student_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_images and returns the data updated in the database.
     * @param {student_imagesUpdateManyAndReturnArgs} args - Arguments to update many Student_images.
     * @example
     * // Update many Student_images
     * const student_images = await prisma.student_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_images and only return the `id`
     * const student_imagesWithIdOnly = await prisma.student_images.updateManyAndReturn({
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
    updateManyAndReturn<T extends student_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, student_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_images.
     * @param {student_imagesUpsertArgs} args - Arguments to update or create a Student_images.
     * @example
     * // Update or create a Student_images
     * const student_images = await prisma.student_images.upsert({
     *   create: {
     *     // ... data to create a Student_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_images we want to update
     *   }
     * })
     */
    upsert<T extends student_imagesUpsertArgs>(args: SelectSubset<T, student_imagesUpsertArgs<ExtArgs>>): Prisma__student_imagesClient<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_imagesCountArgs} args - Arguments to filter Student_images to count.
     * @example
     * // Count the number of Student_images
     * const count = await prisma.student_images.count({
     *   where: {
     *     // ... the filter for the Student_images we want to count
     *   }
     * })
    **/
    count<T extends student_imagesCountArgs>(
      args?: Subset<T, student_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Student_imagesAggregateArgs>(args: Subset<T, Student_imagesAggregateArgs>): Prisma.PrismaPromise<GetStudent_imagesAggregateType<T>>

    /**
     * Group by Student_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_imagesGroupByArgs} args - Group by arguments.
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
      T extends student_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_imagesGroupByArgs['orderBy'] }
        : { orderBy?: student_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, student_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_images model
   */
  readonly fields: student_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the student_images model
   */
  interface student_imagesFieldRefs {
    readonly id: FieldRef<"student_images", 'String'>
    readonly student_id: FieldRef<"student_images", 'String'>
    readonly image_path: FieldRef<"student_images", 'String'>
    readonly uploaded_at: FieldRef<"student_images", 'DateTime'>
    readonly is_active: FieldRef<"student_images", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * student_images findUnique
   */
  export type student_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * Filter, which student_images to fetch.
     */
    where: student_imagesWhereUniqueInput
  }

  /**
   * student_images findUniqueOrThrow
   */
  export type student_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * Filter, which student_images to fetch.
     */
    where: student_imagesWhereUniqueInput
  }

  /**
   * student_images findFirst
   */
  export type student_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * Filter, which student_images to fetch.
     */
    where?: student_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_images to fetch.
     */
    orderBy?: student_imagesOrderByWithRelationInput | student_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_images.
     */
    cursor?: student_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_images.
     */
    distinct?: Student_imagesScalarFieldEnum | Student_imagesScalarFieldEnum[]
  }

  /**
   * student_images findFirstOrThrow
   */
  export type student_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * Filter, which student_images to fetch.
     */
    where?: student_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_images to fetch.
     */
    orderBy?: student_imagesOrderByWithRelationInput | student_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_images.
     */
    cursor?: student_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_images.
     */
    distinct?: Student_imagesScalarFieldEnum | Student_imagesScalarFieldEnum[]
  }

  /**
   * student_images findMany
   */
  export type student_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * Filter, which student_images to fetch.
     */
    where?: student_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_images to fetch.
     */
    orderBy?: student_imagesOrderByWithRelationInput | student_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_images.
     */
    cursor?: student_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_images.
     */
    skip?: number
    distinct?: Student_imagesScalarFieldEnum | Student_imagesScalarFieldEnum[]
  }

  /**
   * student_images create
   */
  export type student_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a student_images.
     */
    data: XOR<student_imagesCreateInput, student_imagesUncheckedCreateInput>
  }

  /**
   * student_images createMany
   */
  export type student_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_images.
     */
    data: student_imagesCreateManyInput | student_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_images createManyAndReturn
   */
  export type student_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many student_images.
     */
    data: student_imagesCreateManyInput | student_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_images update
   */
  export type student_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a student_images.
     */
    data: XOR<student_imagesUpdateInput, student_imagesUncheckedUpdateInput>
    /**
     * Choose, which student_images to update.
     */
    where: student_imagesWhereUniqueInput
  }

  /**
   * student_images updateMany
   */
  export type student_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_images.
     */
    data: XOR<student_imagesUpdateManyMutationInput, student_imagesUncheckedUpdateManyInput>
    /**
     * Filter which student_images to update
     */
    where?: student_imagesWhereInput
    /**
     * Limit how many student_images to update.
     */
    limit?: number
  }

  /**
   * student_images updateManyAndReturn
   */
  export type student_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * The data used to update student_images.
     */
    data: XOR<student_imagesUpdateManyMutationInput, student_imagesUncheckedUpdateManyInput>
    /**
     * Filter which student_images to update
     */
    where?: student_imagesWhereInput
    /**
     * Limit how many student_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_images upsert
   */
  export type student_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the student_images to update in case it exists.
     */
    where: student_imagesWhereUniqueInput
    /**
     * In case the student_images found by the `where` argument doesn't exist, create a new student_images with this data.
     */
    create: XOR<student_imagesCreateInput, student_imagesUncheckedCreateInput>
    /**
     * In case the student_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_imagesUpdateInput, student_imagesUncheckedUpdateInput>
  }

  /**
   * student_images delete
   */
  export type student_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    /**
     * Filter which student_images to delete.
     */
    where: student_imagesWhereUniqueInput
  }

  /**
   * student_images deleteMany
   */
  export type student_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_images to delete
     */
    where?: student_imagesWhereInput
    /**
     * Limit how many student_images to delete.
     */
    limit?: number
  }

  /**
   * student_images without action
   */
  export type student_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
  }


  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    full_name: number
    school_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StudentsMinAggregateInputType = {
    id?: true
    full_name?: true
    school_id?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    full_name?: true
    school_id?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    full_name?: true
    school_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: string
    full_name: string
    school_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    attendance_records?: boolean | students$attendance_recordsArgs<ExtArgs>
    enrollments?: boolean | students$enrollmentsArgs<ExtArgs>
    recognized_faces?: boolean | students$recognized_facesArgs<ExtArgs>
    student_images?: boolean | students$student_imagesArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectScalar = {
    id?: boolean
    full_name?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type studentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "school_id" | "created_at" | "updated_at", ExtArgs["result"]["students"]>
  export type studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_records?: boolean | students$attendance_recordsArgs<ExtArgs>
    enrollments?: boolean | students$enrollmentsArgs<ExtArgs>
    recognized_faces?: boolean | students$recognized_facesArgs<ExtArgs>
    student_images?: boolean | students$student_imagesArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }
  export type studentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }

  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {
      attendance_records: Prisma.$attendance_recordsPayload<ExtArgs>[]
      enrollments: Prisma.$enrollmentsPayload<ExtArgs>[]
      recognized_faces: Prisma.$recognized_facesPayload<ExtArgs>[]
      student_images: Prisma.$student_imagesPayload<ExtArgs>[]
      schools: Prisma.$schoolsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      school_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentsFindManyArgs>(args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends studentsCreateArgs>(args: SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentsCreateManyArgs>(args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentsCreateManyAndReturnArgs>(args?: SelectSubset<T, studentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends studentsDeleteArgs>(args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentsUpdateArgs>(args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentsUpdateManyArgs>(args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.updateManyAndReturn({
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
    updateManyAndReturn<T extends studentsUpdateManyAndReturnArgs>(args: SelectSubset<T, studentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
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
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance_records<T extends students$attendance_recordsArgs<ExtArgs> = {}>(args?: Subset<T, students$attendance_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends students$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, students$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recognized_faces<T extends students$recognized_facesArgs<ExtArgs> = {}>(args?: Subset<T, students$recognized_facesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recognized_facesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student_images<T extends students$student_imagesArgs<ExtArgs> = {}>(args?: Subset<T, students$student_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schools<T extends schoolsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schoolsDefaultArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the students model
   */
  interface studentsFieldRefs {
    readonly id: FieldRef<"students", 'String'>
    readonly full_name: FieldRef<"students", 'String'>
    readonly school_id: FieldRef<"students", 'String'>
    readonly created_at: FieldRef<"students", 'DateTime'>
    readonly updated_at: FieldRef<"students", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }

  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * students createManyAndReturn
   */
  export type studentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * students updateManyAndReturn
   */
  export type studentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }

  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * students.attendance_records
   */
  export type students$attendance_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    where?: attendance_recordsWhereInput
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    cursor?: attendance_recordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Attendance_recordsScalarFieldEnum | Attendance_recordsScalarFieldEnum[]
  }

  /**
   * students.enrollments
   */
  export type students$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    cursor?: enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * students.recognized_faces
   */
  export type students$recognized_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recognized_faces
     */
    select?: recognized_facesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recognized_faces
     */
    omit?: recognized_facesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recognized_facesInclude<ExtArgs> | null
    where?: recognized_facesWhereInput
    orderBy?: recognized_facesOrderByWithRelationInput | recognized_facesOrderByWithRelationInput[]
    cursor?: recognized_facesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recognized_facesScalarFieldEnum | Recognized_facesScalarFieldEnum[]
  }

  /**
   * students.student_images
   */
  export type students$student_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_images
     */
    select?: student_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_images
     */
    omit?: student_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_imagesInclude<ExtArgs> | null
    where?: student_imagesWhereInput
    orderBy?: student_imagesOrderByWithRelationInput | student_imagesOrderByWithRelationInput[]
    cursor?: student_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_imagesScalarFieldEnum | Student_imagesScalarFieldEnum[]
  }

  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    full_name: string | null
    role: string | null
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    full_name: string | null
    role: string | null
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    full_name: number
    role: number
    school_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    full_name?: true
    role?: true
    school_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    full_name?: true
    role?: true
    school_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    full_name?: true
    role?: true
    school_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    attendance_records?: boolean | users$attendance_recordsArgs<ExtArgs>
    classes?: boolean | users$classesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    school_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "full_name" | "role" | "school_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_records?: boolean | users$attendance_recordsArgs<ExtArgs>
    classes?: boolean | users$classesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      attendance_records: Prisma.$attendance_recordsPayload<ExtArgs>[]
      classes: Prisma.$classesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      full_name: string
      role: string
      school_id: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance_records<T extends users$attendance_recordsArgs<ExtArgs> = {}>(args?: Subset<T, users$attendance_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendance_recordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends users$classesArgs<ExtArgs> = {}>(args?: Subset<T, users$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly school_id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.attendance_records
   */
  export type users$attendance_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance_records
     */
    select?: attendance_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance_records
     */
    omit?: attendance_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendance_recordsInclude<ExtArgs> | null
    where?: attendance_recordsWhereInput
    orderBy?: attendance_recordsOrderByWithRelationInput | attendance_recordsOrderByWithRelationInput[]
    cursor?: attendance_recordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Attendance_recordsScalarFieldEnum | Attendance_recordsScalarFieldEnum[]
  }

  /**
   * users.classes
   */
  export type users$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    where?: classesWhereInput
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    cursor?: classesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Attendance_recordsScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    class_id: 'class_id',
    date: 'date',
    status: 'status',
    marked_by: 'marked_by',
    created_at: 'created_at'
  };

  export type Attendance_recordsScalarFieldEnum = (typeof Attendance_recordsScalarFieldEnum)[keyof typeof Attendance_recordsScalarFieldEnum]


  export const Camera_capturesScalarFieldEnum: {
    id: 'id',
    camera_id: 'camera_id',
    image_path: 'image_path',
    captured_at: 'captured_at',
    class_id: 'class_id',
    created_at: 'created_at'
  };

  export type Camera_capturesScalarFieldEnum = (typeof Camera_capturesScalarFieldEnum)[keyof typeof Camera_capturesScalarFieldEnum]


  export const CamerasScalarFieldEnum: {
    device_id: 'device_id',
    location: 'location',
    status: 'status',
    school_id: 'school_id',
    class_id: 'class_id',
    created_at: 'created_at',
    id: 'id'
  };

  export type CamerasScalarFieldEnum = (typeof CamerasScalarFieldEnum)[keyof typeof CamerasScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacher_id: 'teacher_id',
    school_id: 'school_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const EnrollmentsScalarFieldEnum: {
    student_id: 'student_id',
    class_id: 'class_id',
    enrolled_at: 'enrolled_at'
  };

  export type EnrollmentsScalarFieldEnum = (typeof EnrollmentsScalarFieldEnum)[keyof typeof EnrollmentsScalarFieldEnum]


  export const Recognized_facesScalarFieldEnum: {
    id: 'id',
    capture_id: 'capture_id',
    student_id: 'student_id',
    confidence_score: 'confidence_score',
    created_at: 'created_at'
  };

  export type Recognized_facesScalarFieldEnum = (typeof Recognized_facesScalarFieldEnum)[keyof typeof Recognized_facesScalarFieldEnum]


  export const SchoolsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SchoolsScalarFieldEnum = (typeof SchoolsScalarFieldEnum)[keyof typeof SchoolsScalarFieldEnum]


  export const Student_imagesScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    image_path: 'image_path',
    uploaded_at: 'uploaded_at',
    is_active: 'is_active'
  };

  export type Student_imagesScalarFieldEnum = (typeof Student_imagesScalarFieldEnum)[keyof typeof Student_imagesScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    school_id: 'school_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    full_name: 'full_name',
    role: 'role',
    school_id: 'school_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type attendance_recordsWhereInput = {
    AND?: attendance_recordsWhereInput | attendance_recordsWhereInput[]
    OR?: attendance_recordsWhereInput[]
    NOT?: attendance_recordsWhereInput | attendance_recordsWhereInput[]
    id?: UuidFilter<"attendance_records"> | string
    student_id?: UuidFilter<"attendance_records"> | string
    class_id?: UuidFilter<"attendance_records"> | string
    date?: DateTimeFilter<"attendance_records"> | Date | string
    status?: StringFilter<"attendance_records"> | string
    marked_by?: UuidFilter<"attendance_records"> | string
    created_at?: DateTimeNullableFilter<"attendance_records"> | Date | string | null
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }

  export type attendance_recordsOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    marked_by?: SortOrder
    created_at?: SortOrderInput | SortOrder
    classes?: classesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
  }

  export type attendance_recordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    student_id_class_id_date?: attendance_recordsStudent_idClass_idDateCompoundUniqueInput
    AND?: attendance_recordsWhereInput | attendance_recordsWhereInput[]
    OR?: attendance_recordsWhereInput[]
    NOT?: attendance_recordsWhereInput | attendance_recordsWhereInput[]
    student_id?: UuidFilter<"attendance_records"> | string
    class_id?: UuidFilter<"attendance_records"> | string
    date?: DateTimeFilter<"attendance_records"> | Date | string
    status?: StringFilter<"attendance_records"> | string
    marked_by?: UuidFilter<"attendance_records"> | string
    created_at?: DateTimeNullableFilter<"attendance_records"> | Date | string | null
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }, "id" | "student_id_class_id_date">

  export type attendance_recordsOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    marked_by?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: attendance_recordsCountOrderByAggregateInput
    _max?: attendance_recordsMaxOrderByAggregateInput
    _min?: attendance_recordsMinOrderByAggregateInput
  }

  export type attendance_recordsScalarWhereWithAggregatesInput = {
    AND?: attendance_recordsScalarWhereWithAggregatesInput | attendance_recordsScalarWhereWithAggregatesInput[]
    OR?: attendance_recordsScalarWhereWithAggregatesInput[]
    NOT?: attendance_recordsScalarWhereWithAggregatesInput | attendance_recordsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"attendance_records"> | string
    student_id?: UuidWithAggregatesFilter<"attendance_records"> | string
    class_id?: UuidWithAggregatesFilter<"attendance_records"> | string
    date?: DateTimeWithAggregatesFilter<"attendance_records"> | Date | string
    status?: StringWithAggregatesFilter<"attendance_records"> | string
    marked_by?: UuidWithAggregatesFilter<"attendance_records"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"attendance_records"> | Date | string | null
  }

  export type camera_capturesWhereInput = {
    AND?: camera_capturesWhereInput | camera_capturesWhereInput[]
    OR?: camera_capturesWhereInput[]
    NOT?: camera_capturesWhereInput | camera_capturesWhereInput[]
    id?: UuidFilter<"camera_captures"> | string
    camera_id?: UuidFilter<"camera_captures"> | string
    image_path?: StringFilter<"camera_captures"> | string
    captured_at?: DateTimeFilter<"camera_captures"> | Date | string
    class_id?: UuidNullableFilter<"camera_captures"> | string | null
    created_at?: DateTimeNullableFilter<"camera_captures"> | Date | string | null
    cameras?: XOR<CamerasScalarRelationFilter, camerasWhereInput>
    classes?: XOR<ClassesNullableScalarRelationFilter, classesWhereInput> | null
    recognized_faces?: Recognized_facesListRelationFilter
  }

  export type camera_capturesOrderByWithRelationInput = {
    id?: SortOrder
    camera_id?: SortOrder
    image_path?: SortOrder
    captured_at?: SortOrder
    class_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    cameras?: camerasOrderByWithRelationInput
    classes?: classesOrderByWithRelationInput
    recognized_faces?: recognized_facesOrderByRelationAggregateInput
  }

  export type camera_capturesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: camera_capturesWhereInput | camera_capturesWhereInput[]
    OR?: camera_capturesWhereInput[]
    NOT?: camera_capturesWhereInput | camera_capturesWhereInput[]
    camera_id?: UuidFilter<"camera_captures"> | string
    image_path?: StringFilter<"camera_captures"> | string
    captured_at?: DateTimeFilter<"camera_captures"> | Date | string
    class_id?: UuidNullableFilter<"camera_captures"> | string | null
    created_at?: DateTimeNullableFilter<"camera_captures"> | Date | string | null
    cameras?: XOR<CamerasScalarRelationFilter, camerasWhereInput>
    classes?: XOR<ClassesNullableScalarRelationFilter, classesWhereInput> | null
    recognized_faces?: Recognized_facesListRelationFilter
  }, "id">

  export type camera_capturesOrderByWithAggregationInput = {
    id?: SortOrder
    camera_id?: SortOrder
    image_path?: SortOrder
    captured_at?: SortOrder
    class_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: camera_capturesCountOrderByAggregateInput
    _max?: camera_capturesMaxOrderByAggregateInput
    _min?: camera_capturesMinOrderByAggregateInput
  }

  export type camera_capturesScalarWhereWithAggregatesInput = {
    AND?: camera_capturesScalarWhereWithAggregatesInput | camera_capturesScalarWhereWithAggregatesInput[]
    OR?: camera_capturesScalarWhereWithAggregatesInput[]
    NOT?: camera_capturesScalarWhereWithAggregatesInput | camera_capturesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"camera_captures"> | string
    camera_id?: UuidWithAggregatesFilter<"camera_captures"> | string
    image_path?: StringWithAggregatesFilter<"camera_captures"> | string
    captured_at?: DateTimeWithAggregatesFilter<"camera_captures"> | Date | string
    class_id?: UuidNullableWithAggregatesFilter<"camera_captures"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"camera_captures"> | Date | string | null
  }

  export type camerasWhereInput = {
    AND?: camerasWhereInput | camerasWhereInput[]
    OR?: camerasWhereInput[]
    NOT?: camerasWhereInput | camerasWhereInput[]
    device_id?: StringFilter<"cameras"> | string
    location?: StringFilter<"cameras"> | string
    status?: StringFilter<"cameras"> | string
    school_id?: UuidNullableFilter<"cameras"> | string | null
    class_id?: UuidNullableFilter<"cameras"> | string | null
    created_at?: DateTimeNullableFilter<"cameras"> | Date | string | null
    id?: UuidFilter<"cameras"> | string
    camera_captures?: Camera_capturesListRelationFilter
    classes?: XOR<ClassesNullableScalarRelationFilter, classesWhereInput> | null
    schools?: XOR<SchoolsNullableScalarRelationFilter, schoolsWhereInput> | null
  }

  export type camerasOrderByWithRelationInput = {
    device_id?: SortOrder
    location?: SortOrder
    status?: SortOrder
    school_id?: SortOrderInput | SortOrder
    class_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    camera_captures?: camera_capturesOrderByRelationAggregateInput
    classes?: classesOrderByWithRelationInput
    schools?: schoolsOrderByWithRelationInput
  }

  export type camerasWhereUniqueInput = Prisma.AtLeast<{
    device_id?: string
    id?: string
    AND?: camerasWhereInput | camerasWhereInput[]
    OR?: camerasWhereInput[]
    NOT?: camerasWhereInput | camerasWhereInput[]
    location?: StringFilter<"cameras"> | string
    status?: StringFilter<"cameras"> | string
    school_id?: UuidNullableFilter<"cameras"> | string | null
    class_id?: UuidNullableFilter<"cameras"> | string | null
    created_at?: DateTimeNullableFilter<"cameras"> | Date | string | null
    camera_captures?: Camera_capturesListRelationFilter
    classes?: XOR<ClassesNullableScalarRelationFilter, classesWhereInput> | null
    schools?: XOR<SchoolsNullableScalarRelationFilter, schoolsWhereInput> | null
  }, "id" | "device_id">

  export type camerasOrderByWithAggregationInput = {
    device_id?: SortOrder
    location?: SortOrder
    status?: SortOrder
    school_id?: SortOrderInput | SortOrder
    class_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: camerasCountOrderByAggregateInput
    _max?: camerasMaxOrderByAggregateInput
    _min?: camerasMinOrderByAggregateInput
  }

  export type camerasScalarWhereWithAggregatesInput = {
    AND?: camerasScalarWhereWithAggregatesInput | camerasScalarWhereWithAggregatesInput[]
    OR?: camerasScalarWhereWithAggregatesInput[]
    NOT?: camerasScalarWhereWithAggregatesInput | camerasScalarWhereWithAggregatesInput[]
    device_id?: StringWithAggregatesFilter<"cameras"> | string
    location?: StringWithAggregatesFilter<"cameras"> | string
    status?: StringWithAggregatesFilter<"cameras"> | string
    school_id?: UuidNullableWithAggregatesFilter<"cameras"> | string | null
    class_id?: UuidNullableWithAggregatesFilter<"cameras"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"cameras"> | Date | string | null
    id?: UuidWithAggregatesFilter<"cameras"> | string
  }

  export type classesWhereInput = {
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    id?: UuidFilter<"classes"> | string
    name?: StringFilter<"classes"> | string
    teacher_id?: UuidFilter<"classes"> | string
    school_id?: UuidFilter<"classes"> | string
    created_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    attendance_records?: Attendance_recordsListRelationFilter
    camera_captures?: Camera_capturesListRelationFilter
    cameras?: CamerasListRelationFilter
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    enrollments?: EnrollmentsListRelationFilter
  }

  export type classesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    attendance_records?: attendance_recordsOrderByRelationAggregateInput
    camera_captures?: camera_capturesOrderByRelationAggregateInput
    cameras?: camerasOrderByRelationAggregateInput
    schools?: schoolsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    enrollments?: enrollmentsOrderByRelationAggregateInput
  }

  export type classesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    name?: StringFilter<"classes"> | string
    teacher_id?: UuidFilter<"classes"> | string
    school_id?: UuidFilter<"classes"> | string
    created_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    attendance_records?: Attendance_recordsListRelationFilter
    camera_captures?: Camera_capturesListRelationFilter
    cameras?: CamerasListRelationFilter
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    enrollments?: EnrollmentsListRelationFilter
  }, "id">

  export type classesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: classesCountOrderByAggregateInput
    _max?: classesMaxOrderByAggregateInput
    _min?: classesMinOrderByAggregateInput
  }

  export type classesScalarWhereWithAggregatesInput = {
    AND?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    OR?: classesScalarWhereWithAggregatesInput[]
    NOT?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"classes"> | string
    name?: StringWithAggregatesFilter<"classes"> | string
    teacher_id?: UuidWithAggregatesFilter<"classes"> | string
    school_id?: UuidWithAggregatesFilter<"classes"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"classes"> | Date | string | null
  }

  export type enrollmentsWhereInput = {
    AND?: enrollmentsWhereInput | enrollmentsWhereInput[]
    OR?: enrollmentsWhereInput[]
    NOT?: enrollmentsWhereInput | enrollmentsWhereInput[]
    student_id?: UuidFilter<"enrollments"> | string
    class_id?: UuidFilter<"enrollments"> | string
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }

  export type enrollmentsOrderByWithRelationInput = {
    student_id?: SortOrder
    class_id?: SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    classes?: classesOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
  }

  export type enrollmentsWhereUniqueInput = Prisma.AtLeast<{
    student_id_class_id?: enrollmentsStudent_idClass_idCompoundUniqueInput
    AND?: enrollmentsWhereInput | enrollmentsWhereInput[]
    OR?: enrollmentsWhereInput[]
    NOT?: enrollmentsWhereInput | enrollmentsWhereInput[]
    student_id?: UuidFilter<"enrollments"> | string
    class_id?: UuidFilter<"enrollments"> | string
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }, "student_id_class_id">

  export type enrollmentsOrderByWithAggregationInput = {
    student_id?: SortOrder
    class_id?: SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    _count?: enrollmentsCountOrderByAggregateInput
    _max?: enrollmentsMaxOrderByAggregateInput
    _min?: enrollmentsMinOrderByAggregateInput
  }

  export type enrollmentsScalarWhereWithAggregatesInput = {
    AND?: enrollmentsScalarWhereWithAggregatesInput | enrollmentsScalarWhereWithAggregatesInput[]
    OR?: enrollmentsScalarWhereWithAggregatesInput[]
    NOT?: enrollmentsScalarWhereWithAggregatesInput | enrollmentsScalarWhereWithAggregatesInput[]
    student_id?: UuidWithAggregatesFilter<"enrollments"> | string
    class_id?: UuidWithAggregatesFilter<"enrollments"> | string
    enrolled_at?: DateTimeNullableWithAggregatesFilter<"enrollments"> | Date | string | null
  }

  export type recognized_facesWhereInput = {
    AND?: recognized_facesWhereInput | recognized_facesWhereInput[]
    OR?: recognized_facesWhereInput[]
    NOT?: recognized_facesWhereInput | recognized_facesWhereInput[]
    id?: UuidFilter<"recognized_faces"> | string
    capture_id?: UuidFilter<"recognized_faces"> | string
    student_id?: UuidFilter<"recognized_faces"> | string
    confidence_score?: DecimalFilter<"recognized_faces"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"recognized_faces"> | Date | string | null
    camera_captures?: XOR<Camera_capturesScalarRelationFilter, camera_capturesWhereInput>
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }

  export type recognized_facesOrderByWithRelationInput = {
    id?: SortOrder
    capture_id?: SortOrder
    student_id?: SortOrder
    confidence_score?: SortOrder
    created_at?: SortOrderInput | SortOrder
    camera_captures?: camera_capturesOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
  }

  export type recognized_facesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: recognized_facesWhereInput | recognized_facesWhereInput[]
    OR?: recognized_facesWhereInput[]
    NOT?: recognized_facesWhereInput | recognized_facesWhereInput[]
    capture_id?: UuidFilter<"recognized_faces"> | string
    student_id?: UuidFilter<"recognized_faces"> | string
    confidence_score?: DecimalFilter<"recognized_faces"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"recognized_faces"> | Date | string | null
    camera_captures?: XOR<Camera_capturesScalarRelationFilter, camera_capturesWhereInput>
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }, "id">

  export type recognized_facesOrderByWithAggregationInput = {
    id?: SortOrder
    capture_id?: SortOrder
    student_id?: SortOrder
    confidence_score?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: recognized_facesCountOrderByAggregateInput
    _avg?: recognized_facesAvgOrderByAggregateInput
    _max?: recognized_facesMaxOrderByAggregateInput
    _min?: recognized_facesMinOrderByAggregateInput
    _sum?: recognized_facesSumOrderByAggregateInput
  }

  export type recognized_facesScalarWhereWithAggregatesInput = {
    AND?: recognized_facesScalarWhereWithAggregatesInput | recognized_facesScalarWhereWithAggregatesInput[]
    OR?: recognized_facesScalarWhereWithAggregatesInput[]
    NOT?: recognized_facesScalarWhereWithAggregatesInput | recognized_facesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"recognized_faces"> | string
    capture_id?: UuidWithAggregatesFilter<"recognized_faces"> | string
    student_id?: UuidWithAggregatesFilter<"recognized_faces"> | string
    confidence_score?: DecimalWithAggregatesFilter<"recognized_faces"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"recognized_faces"> | Date | string | null
  }

  export type schoolsWhereInput = {
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    id?: UuidFilter<"schools"> | string
    name?: StringFilter<"schools"> | string
    created_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    cameras?: CamerasListRelationFilter
    classes?: ClassesListRelationFilter
    students?: StudentsListRelationFilter
  }

  export type schoolsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cameras?: camerasOrderByRelationAggregateInput
    classes?: classesOrderByRelationAggregateInput
    students?: studentsOrderByRelationAggregateInput
  }

  export type schoolsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    name?: StringFilter<"schools"> | string
    created_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    cameras?: CamerasListRelationFilter
    classes?: ClassesListRelationFilter
    students?: StudentsListRelationFilter
  }, "id">

  export type schoolsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: schoolsCountOrderByAggregateInput
    _max?: schoolsMaxOrderByAggregateInput
    _min?: schoolsMinOrderByAggregateInput
  }

  export type schoolsScalarWhereWithAggregatesInput = {
    AND?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    OR?: schoolsScalarWhereWithAggregatesInput[]
    NOT?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"schools"> | string
    name?: StringWithAggregatesFilter<"schools"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"schools"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"schools"> | Date | string | null
  }

  export type student_imagesWhereInput = {
    AND?: student_imagesWhereInput | student_imagesWhereInput[]
    OR?: student_imagesWhereInput[]
    NOT?: student_imagesWhereInput | student_imagesWhereInput[]
    id?: UuidFilter<"student_images"> | string
    student_id?: UuidFilter<"student_images"> | string
    image_path?: StringFilter<"student_images"> | string
    uploaded_at?: DateTimeNullableFilter<"student_images"> | Date | string | null
    is_active?: BoolNullableFilter<"student_images"> | boolean | null
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }

  export type student_imagesOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    image_path?: SortOrder
    uploaded_at?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    students?: studentsOrderByWithRelationInput
  }

  export type student_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: student_imagesWhereInput | student_imagesWhereInput[]
    OR?: student_imagesWhereInput[]
    NOT?: student_imagesWhereInput | student_imagesWhereInput[]
    student_id?: UuidFilter<"student_images"> | string
    image_path?: StringFilter<"student_images"> | string
    uploaded_at?: DateTimeNullableFilter<"student_images"> | Date | string | null
    is_active?: BoolNullableFilter<"student_images"> | boolean | null
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
  }, "id">

  export type student_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    image_path?: SortOrder
    uploaded_at?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: student_imagesCountOrderByAggregateInput
    _max?: student_imagesMaxOrderByAggregateInput
    _min?: student_imagesMinOrderByAggregateInput
  }

  export type student_imagesScalarWhereWithAggregatesInput = {
    AND?: student_imagesScalarWhereWithAggregatesInput | student_imagesScalarWhereWithAggregatesInput[]
    OR?: student_imagesScalarWhereWithAggregatesInput[]
    NOT?: student_imagesScalarWhereWithAggregatesInput | student_imagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"student_images"> | string
    student_id?: UuidWithAggregatesFilter<"student_images"> | string
    image_path?: StringWithAggregatesFilter<"student_images"> | string
    uploaded_at?: DateTimeNullableWithAggregatesFilter<"student_images"> | Date | string | null
    is_active?: BoolNullableWithAggregatesFilter<"student_images"> | boolean | null
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    id?: UuidFilter<"students"> | string
    full_name?: StringFilter<"students"> | string
    school_id?: UuidFilter<"students"> | string
    created_at?: DateTimeNullableFilter<"students"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"students"> | Date | string | null
    attendance_records?: Attendance_recordsListRelationFilter
    enrollments?: EnrollmentsListRelationFilter
    recognized_faces?: Recognized_facesListRelationFilter
    student_images?: Student_imagesListRelationFilter
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
  }

  export type studentsOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    attendance_records?: attendance_recordsOrderByRelationAggregateInput
    enrollments?: enrollmentsOrderByRelationAggregateInput
    recognized_faces?: recognized_facesOrderByRelationAggregateInput
    student_images?: student_imagesOrderByRelationAggregateInput
    schools?: schoolsOrderByWithRelationInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    full_name?: StringFilter<"students"> | string
    school_id?: UuidFilter<"students"> | string
    created_at?: DateTimeNullableFilter<"students"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"students"> | Date | string | null
    attendance_records?: Attendance_recordsListRelationFilter
    enrollments?: EnrollmentsListRelationFilter
    recognized_faces?: Recognized_facesListRelationFilter
    student_images?: Student_imagesListRelationFilter
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
  }, "id">

  export type studentsOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: studentsCountOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"students"> | string
    full_name?: StringWithAggregatesFilter<"students"> | string
    school_id?: UuidWithAggregatesFilter<"students"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    school_id?: UuidNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    attendance_records?: Attendance_recordsListRelationFilter
    classes?: ClassesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    school_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    attendance_records?: attendance_recordsOrderByRelationAggregateInput
    classes?: classesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    school_id?: UuidNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    attendance_records?: Attendance_recordsListRelationFilter
    classes?: ClassesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    school_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    full_name?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    school_id?: UuidNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type attendance_recordsCreateInput = {
    id?: string
    date: Date | string
    status: string
    created_at?: Date | string | null
    classes: classesCreateNestedOneWithoutAttendance_recordsInput
    users: usersCreateNestedOneWithoutAttendance_recordsInput
    students: studentsCreateNestedOneWithoutAttendance_recordsInput
  }

  export type attendance_recordsUncheckedCreateInput = {
    id?: string
    student_id: string
    class_id: string
    date: Date | string
    status: string
    marked_by: string
    created_at?: Date | string | null
  }

  export type attendance_recordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutAttendance_recordsNestedInput
    users?: usersUpdateOneRequiredWithoutAttendance_recordsNestedInput
    students?: studentsUpdateOneRequiredWithoutAttendance_recordsNestedInput
  }

  export type attendance_recordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    marked_by?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsCreateManyInput = {
    id?: string
    student_id: string
    class_id: string
    date: Date | string
    status: string
    marked_by: string
    created_at?: Date | string | null
  }

  export type attendance_recordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    marked_by?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_capturesCreateInput = {
    id?: string
    image_path: string
    captured_at: Date | string
    created_at?: Date | string | null
    cameras: camerasCreateNestedOneWithoutCamera_capturesInput
    classes?: classesCreateNestedOneWithoutCamera_capturesInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutCamera_capturesInput
  }

  export type camera_capturesUncheckedCreateInput = {
    id?: string
    camera_id: string
    image_path: string
    captured_at: Date | string
    class_id?: string | null
    created_at?: Date | string | null
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutCamera_capturesInput
  }

  export type camera_capturesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUpdateOneRequiredWithoutCamera_capturesNestedInput
    classes?: classesUpdateOneWithoutCamera_capturesNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutCamera_capturesNestedInput
  }

  export type camera_capturesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutCamera_capturesNestedInput
  }

  export type camera_capturesCreateManyInput = {
    id?: string
    camera_id: string
    image_path: string
    captured_at: Date | string
    class_id?: string | null
    created_at?: Date | string | null
  }

  export type camera_capturesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_capturesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camerasCreateInput = {
    device_id: string
    location: string
    status?: string
    created_at?: Date | string | null
    id: string
    camera_captures?: camera_capturesCreateNestedManyWithoutCamerasInput
    classes?: classesCreateNestedOneWithoutCamerasInput
    schools?: schoolsCreateNestedOneWithoutCamerasInput
  }

  export type camerasUncheckedCreateInput = {
    device_id: string
    location: string
    status?: string
    school_id?: string | null
    class_id?: string | null
    created_at?: Date | string | null
    id: string
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutCamerasInput
  }

  export type camerasUpdateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    camera_captures?: camera_capturesUpdateManyWithoutCamerasNestedInput
    classes?: classesUpdateOneWithoutCamerasNestedInput
    schools?: schoolsUpdateOneWithoutCamerasNestedInput
  }

  export type camerasUncheckedUpdateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutCamerasNestedInput
  }

  export type camerasCreateManyInput = {
    device_id: string
    location: string
    status?: string
    school_id?: string | null
    class_id?: string | null
    created_at?: Date | string | null
    id: string
  }

  export type camerasUpdateManyMutationInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type camerasUncheckedUpdateManyInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type classesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesCreateNestedManyWithoutClassesInput
    cameras?: camerasCreateNestedManyWithoutClassesInput
    schools: schoolsCreateNestedOneWithoutClassesInput
    users: usersCreateNestedOneWithoutClassesInput
    enrollments?: enrollmentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateInput = {
    id?: string
    name: string
    teacher_id: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutClassesInput
    cameras?: camerasUncheckedCreateNestedManyWithoutClassesInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUpdateManyWithoutClassesNestedInput
    cameras?: camerasUpdateManyWithoutClassesNestedInput
    schools?: schoolsUpdateOneRequiredWithoutClassesNestedInput
    users?: usersUpdateOneRequiredWithoutClassesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutClassesNestedInput
    cameras?: camerasUncheckedUpdateManyWithoutClassesNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type classesCreateManyInput = {
    id?: string
    name: string
    teacher_id: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type classesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsCreateInput = {
    enrolled_at?: Date | string | null
    classes: classesCreateNestedOneWithoutEnrollmentsInput
    students: studentsCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateInput = {
    student_id: string
    class_id: string
    enrolled_at?: Date | string | null
  }

  export type enrollmentsUpdateInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutEnrollmentsNestedInput
    students?: studentsUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsCreateManyInput = {
    student_id: string
    class_id: string
    enrolled_at?: Date | string | null
  }

  export type enrollmentsUpdateManyMutationInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsUncheckedUpdateManyInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recognized_facesCreateInput = {
    id?: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    camera_captures: camera_capturesCreateNestedOneWithoutRecognized_facesInput
    students: studentsCreateNestedOneWithoutRecognized_facesInput
  }

  export type recognized_facesUncheckedCreateInput = {
    id?: string
    capture_id: string
    student_id: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recognized_facesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    camera_captures?: camera_capturesUpdateOneRequiredWithoutRecognized_facesNestedInput
    students?: studentsUpdateOneRequiredWithoutRecognized_facesNestedInput
  }

  export type recognized_facesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    capture_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recognized_facesCreateManyInput = {
    id?: string
    capture_id: string
    student_id: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recognized_facesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recognized_facesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    capture_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schoolsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cameras?: camerasCreateNestedManyWithoutSchoolsInput
    classes?: classesCreateNestedManyWithoutSchoolsInput
    students?: studentsCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cameras?: camerasUncheckedCreateNestedManyWithoutSchoolsInput
    classes?: classesUncheckedCreateNestedManyWithoutSchoolsInput
    students?: studentsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUpdateManyWithoutSchoolsNestedInput
    classes?: classesUpdateManyWithoutSchoolsNestedInput
    students?: studentsUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUncheckedUpdateManyWithoutSchoolsNestedInput
    classes?: classesUncheckedUpdateManyWithoutSchoolsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type schoolsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schoolsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_imagesCreateInput = {
    id?: string
    image_path: string
    uploaded_at?: Date | string | null
    is_active?: boolean | null
    students: studentsCreateNestedOneWithoutStudent_imagesInput
  }

  export type student_imagesUncheckedCreateInput = {
    id?: string
    student_id: string
    image_path: string
    uploaded_at?: Date | string | null
    is_active?: boolean | null
  }

  export type student_imagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    students?: studentsUpdateOneRequiredWithoutStudent_imagesNestedInput
  }

  export type student_imagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type student_imagesCreateManyInput = {
    id?: string
    student_id: string
    image_path: string
    uploaded_at?: Date | string | null
    is_active?: boolean | null
  }

  export type student_imagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type student_imagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type studentsCreateInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesCreateNestedManyWithoutStudentsInput
    schools: schoolsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateInput = {
    id?: string
    full_name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUpdateManyWithoutStudentsNestedInput
    schools?: schoolsUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsCreateManyInput = {
    id?: string
    full_name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type studentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutUsersInput
    classes?: classesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutUsersInput
    classes?: classesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutUsersNestedInput
    classes?: classesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutUsersNestedInput
    classes?: classesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type ClassesScalarRelationFilter = {
    is?: classesWhereInput
    isNot?: classesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type StudentsScalarRelationFilter = {
    is?: studentsWhereInput
    isNot?: studentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type attendance_recordsStudent_idClass_idDateCompoundUniqueInput = {
    student_id: string
    class_id: string
    date: Date | string
  }

  export type attendance_recordsCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    marked_by?: SortOrder
    created_at?: SortOrder
  }

  export type attendance_recordsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    marked_by?: SortOrder
    created_at?: SortOrder
  }

  export type attendance_recordsMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    marked_by?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type CamerasScalarRelationFilter = {
    is?: camerasWhereInput
    isNot?: camerasWhereInput
  }

  export type ClassesNullableScalarRelationFilter = {
    is?: classesWhereInput | null
    isNot?: classesWhereInput | null
  }

  export type Recognized_facesListRelationFilter = {
    every?: recognized_facesWhereInput
    some?: recognized_facesWhereInput
    none?: recognized_facesWhereInput
  }

  export type recognized_facesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type camera_capturesCountOrderByAggregateInput = {
    id?: SortOrder
    camera_id?: SortOrder
    image_path?: SortOrder
    captured_at?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
  }

  export type camera_capturesMaxOrderByAggregateInput = {
    id?: SortOrder
    camera_id?: SortOrder
    image_path?: SortOrder
    captured_at?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
  }

  export type camera_capturesMinOrderByAggregateInput = {
    id?: SortOrder
    camera_id?: SortOrder
    image_path?: SortOrder
    captured_at?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Camera_capturesListRelationFilter = {
    every?: camera_capturesWhereInput
    some?: camera_capturesWhereInput
    none?: camera_capturesWhereInput
  }

  export type SchoolsNullableScalarRelationFilter = {
    is?: schoolsWhereInput | null
    isNot?: schoolsWhereInput | null
  }

  export type camera_capturesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type camerasCountOrderByAggregateInput = {
    device_id?: SortOrder
    location?: SortOrder
    status?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
  }

  export type camerasMaxOrderByAggregateInput = {
    device_id?: SortOrder
    location?: SortOrder
    status?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
  }

  export type camerasMinOrderByAggregateInput = {
    device_id?: SortOrder
    location?: SortOrder
    status?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
  }

  export type Attendance_recordsListRelationFilter = {
    every?: attendance_recordsWhereInput
    some?: attendance_recordsWhereInput
    none?: attendance_recordsWhereInput
  }

  export type CamerasListRelationFilter = {
    every?: camerasWhereInput
    some?: camerasWhereInput
    none?: camerasWhereInput
  }

  export type SchoolsScalarRelationFilter = {
    is?: schoolsWhereInput
    isNot?: schoolsWhereInput
  }

  export type EnrollmentsListRelationFilter = {
    every?: enrollmentsWhereInput
    some?: enrollmentsWhereInput
    none?: enrollmentsWhereInput
  }

  export type attendance_recordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type camerasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enrollmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type classesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type classesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type classesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type enrollmentsStudent_idClass_idCompoundUniqueInput = {
    student_id: string
    class_id: string
  }

  export type enrollmentsCountOrderByAggregateInput = {
    student_id?: SortOrder
    class_id?: SortOrder
    enrolled_at?: SortOrder
  }

  export type enrollmentsMaxOrderByAggregateInput = {
    student_id?: SortOrder
    class_id?: SortOrder
    enrolled_at?: SortOrder
  }

  export type enrollmentsMinOrderByAggregateInput = {
    student_id?: SortOrder
    class_id?: SortOrder
    enrolled_at?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Camera_capturesScalarRelationFilter = {
    is?: camera_capturesWhereInput
    isNot?: camera_capturesWhereInput
  }

  export type recognized_facesCountOrderByAggregateInput = {
    id?: SortOrder
    capture_id?: SortOrder
    student_id?: SortOrder
    confidence_score?: SortOrder
    created_at?: SortOrder
  }

  export type recognized_facesAvgOrderByAggregateInput = {
    confidence_score?: SortOrder
  }

  export type recognized_facesMaxOrderByAggregateInput = {
    id?: SortOrder
    capture_id?: SortOrder
    student_id?: SortOrder
    confidence_score?: SortOrder
    created_at?: SortOrder
  }

  export type recognized_facesMinOrderByAggregateInput = {
    id?: SortOrder
    capture_id?: SortOrder
    student_id?: SortOrder
    confidence_score?: SortOrder
    created_at?: SortOrder
  }

  export type recognized_facesSumOrderByAggregateInput = {
    confidence_score?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ClassesListRelationFilter = {
    every?: classesWhereInput
    some?: classesWhereInput
    none?: classesWhereInput
  }

  export type StudentsListRelationFilter = {
    every?: studentsWhereInput
    some?: studentsWhereInput
    none?: studentsWhereInput
  }

  export type classesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type schoolsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type schoolsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type schoolsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type student_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    image_path?: SortOrder
    uploaded_at?: SortOrder
    is_active?: SortOrder
  }

  export type student_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    image_path?: SortOrder
    uploaded_at?: SortOrder
    is_active?: SortOrder
  }

  export type student_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    image_path?: SortOrder
    uploaded_at?: SortOrder
    is_active?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Student_imagesListRelationFilter = {
    every?: student_imagesWhereInput
    some?: student_imagesWhereInput
    none?: student_imagesWhereInput
  }

  export type student_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentsCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    school_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type classesCreateNestedOneWithoutAttendance_recordsInput = {
    create?: XOR<classesCreateWithoutAttendance_recordsInput, classesUncheckedCreateWithoutAttendance_recordsInput>
    connectOrCreate?: classesCreateOrConnectWithoutAttendance_recordsInput
    connect?: classesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAttendance_recordsInput = {
    create?: XOR<usersCreateWithoutAttendance_recordsInput, usersUncheckedCreateWithoutAttendance_recordsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttendance_recordsInput
    connect?: usersWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutAttendance_recordsInput = {
    create?: XOR<studentsCreateWithoutAttendance_recordsInput, studentsUncheckedCreateWithoutAttendance_recordsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutAttendance_recordsInput
    connect?: studentsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type classesUpdateOneRequiredWithoutAttendance_recordsNestedInput = {
    create?: XOR<classesCreateWithoutAttendance_recordsInput, classesUncheckedCreateWithoutAttendance_recordsInput>
    connectOrCreate?: classesCreateOrConnectWithoutAttendance_recordsInput
    upsert?: classesUpsertWithoutAttendance_recordsInput
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutAttendance_recordsInput, classesUpdateWithoutAttendance_recordsInput>, classesUncheckedUpdateWithoutAttendance_recordsInput>
  }

  export type usersUpdateOneRequiredWithoutAttendance_recordsNestedInput = {
    create?: XOR<usersCreateWithoutAttendance_recordsInput, usersUncheckedCreateWithoutAttendance_recordsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttendance_recordsInput
    upsert?: usersUpsertWithoutAttendance_recordsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAttendance_recordsInput, usersUpdateWithoutAttendance_recordsInput>, usersUncheckedUpdateWithoutAttendance_recordsInput>
  }

  export type studentsUpdateOneRequiredWithoutAttendance_recordsNestedInput = {
    create?: XOR<studentsCreateWithoutAttendance_recordsInput, studentsUncheckedCreateWithoutAttendance_recordsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutAttendance_recordsInput
    upsert?: studentsUpsertWithoutAttendance_recordsInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutAttendance_recordsInput, studentsUpdateWithoutAttendance_recordsInput>, studentsUncheckedUpdateWithoutAttendance_recordsInput>
  }

  export type camerasCreateNestedOneWithoutCamera_capturesInput = {
    create?: XOR<camerasCreateWithoutCamera_capturesInput, camerasUncheckedCreateWithoutCamera_capturesInput>
    connectOrCreate?: camerasCreateOrConnectWithoutCamera_capturesInput
    connect?: camerasWhereUniqueInput
  }

  export type classesCreateNestedOneWithoutCamera_capturesInput = {
    create?: XOR<classesCreateWithoutCamera_capturesInput, classesUncheckedCreateWithoutCamera_capturesInput>
    connectOrCreate?: classesCreateOrConnectWithoutCamera_capturesInput
    connect?: classesWhereUniqueInput
  }

  export type recognized_facesCreateNestedManyWithoutCamera_capturesInput = {
    create?: XOR<recognized_facesCreateWithoutCamera_capturesInput, recognized_facesUncheckedCreateWithoutCamera_capturesInput> | recognized_facesCreateWithoutCamera_capturesInput[] | recognized_facesUncheckedCreateWithoutCamera_capturesInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutCamera_capturesInput | recognized_facesCreateOrConnectWithoutCamera_capturesInput[]
    createMany?: recognized_facesCreateManyCamera_capturesInputEnvelope
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
  }

  export type recognized_facesUncheckedCreateNestedManyWithoutCamera_capturesInput = {
    create?: XOR<recognized_facesCreateWithoutCamera_capturesInput, recognized_facesUncheckedCreateWithoutCamera_capturesInput> | recognized_facesCreateWithoutCamera_capturesInput[] | recognized_facesUncheckedCreateWithoutCamera_capturesInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutCamera_capturesInput | recognized_facesCreateOrConnectWithoutCamera_capturesInput[]
    createMany?: recognized_facesCreateManyCamera_capturesInputEnvelope
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
  }

  export type camerasUpdateOneRequiredWithoutCamera_capturesNestedInput = {
    create?: XOR<camerasCreateWithoutCamera_capturesInput, camerasUncheckedCreateWithoutCamera_capturesInput>
    connectOrCreate?: camerasCreateOrConnectWithoutCamera_capturesInput
    upsert?: camerasUpsertWithoutCamera_capturesInput
    connect?: camerasWhereUniqueInput
    update?: XOR<XOR<camerasUpdateToOneWithWhereWithoutCamera_capturesInput, camerasUpdateWithoutCamera_capturesInput>, camerasUncheckedUpdateWithoutCamera_capturesInput>
  }

  export type classesUpdateOneWithoutCamera_capturesNestedInput = {
    create?: XOR<classesCreateWithoutCamera_capturesInput, classesUncheckedCreateWithoutCamera_capturesInput>
    connectOrCreate?: classesCreateOrConnectWithoutCamera_capturesInput
    upsert?: classesUpsertWithoutCamera_capturesInput
    disconnect?: classesWhereInput | boolean
    delete?: classesWhereInput | boolean
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutCamera_capturesInput, classesUpdateWithoutCamera_capturesInput>, classesUncheckedUpdateWithoutCamera_capturesInput>
  }

  export type recognized_facesUpdateManyWithoutCamera_capturesNestedInput = {
    create?: XOR<recognized_facesCreateWithoutCamera_capturesInput, recognized_facesUncheckedCreateWithoutCamera_capturesInput> | recognized_facesCreateWithoutCamera_capturesInput[] | recognized_facesUncheckedCreateWithoutCamera_capturesInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutCamera_capturesInput | recognized_facesCreateOrConnectWithoutCamera_capturesInput[]
    upsert?: recognized_facesUpsertWithWhereUniqueWithoutCamera_capturesInput | recognized_facesUpsertWithWhereUniqueWithoutCamera_capturesInput[]
    createMany?: recognized_facesCreateManyCamera_capturesInputEnvelope
    set?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    disconnect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    delete?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    update?: recognized_facesUpdateWithWhereUniqueWithoutCamera_capturesInput | recognized_facesUpdateWithWhereUniqueWithoutCamera_capturesInput[]
    updateMany?: recognized_facesUpdateManyWithWhereWithoutCamera_capturesInput | recognized_facesUpdateManyWithWhereWithoutCamera_capturesInput[]
    deleteMany?: recognized_facesScalarWhereInput | recognized_facesScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type recognized_facesUncheckedUpdateManyWithoutCamera_capturesNestedInput = {
    create?: XOR<recognized_facesCreateWithoutCamera_capturesInput, recognized_facesUncheckedCreateWithoutCamera_capturesInput> | recognized_facesCreateWithoutCamera_capturesInput[] | recognized_facesUncheckedCreateWithoutCamera_capturesInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutCamera_capturesInput | recognized_facesCreateOrConnectWithoutCamera_capturesInput[]
    upsert?: recognized_facesUpsertWithWhereUniqueWithoutCamera_capturesInput | recognized_facesUpsertWithWhereUniqueWithoutCamera_capturesInput[]
    createMany?: recognized_facesCreateManyCamera_capturesInputEnvelope
    set?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    disconnect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    delete?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    update?: recognized_facesUpdateWithWhereUniqueWithoutCamera_capturesInput | recognized_facesUpdateWithWhereUniqueWithoutCamera_capturesInput[]
    updateMany?: recognized_facesUpdateManyWithWhereWithoutCamera_capturesInput | recognized_facesUpdateManyWithWhereWithoutCamera_capturesInput[]
    deleteMany?: recognized_facesScalarWhereInput | recognized_facesScalarWhereInput[]
  }

  export type camera_capturesCreateNestedManyWithoutCamerasInput = {
    create?: XOR<camera_capturesCreateWithoutCamerasInput, camera_capturesUncheckedCreateWithoutCamerasInput> | camera_capturesCreateWithoutCamerasInput[] | camera_capturesUncheckedCreateWithoutCamerasInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutCamerasInput | camera_capturesCreateOrConnectWithoutCamerasInput[]
    createMany?: camera_capturesCreateManyCamerasInputEnvelope
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
  }

  export type classesCreateNestedOneWithoutCamerasInput = {
    create?: XOR<classesCreateWithoutCamerasInput, classesUncheckedCreateWithoutCamerasInput>
    connectOrCreate?: classesCreateOrConnectWithoutCamerasInput
    connect?: classesWhereUniqueInput
  }

  export type schoolsCreateNestedOneWithoutCamerasInput = {
    create?: XOR<schoolsCreateWithoutCamerasInput, schoolsUncheckedCreateWithoutCamerasInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutCamerasInput
    connect?: schoolsWhereUniqueInput
  }

  export type camera_capturesUncheckedCreateNestedManyWithoutCamerasInput = {
    create?: XOR<camera_capturesCreateWithoutCamerasInput, camera_capturesUncheckedCreateWithoutCamerasInput> | camera_capturesCreateWithoutCamerasInput[] | camera_capturesUncheckedCreateWithoutCamerasInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutCamerasInput | camera_capturesCreateOrConnectWithoutCamerasInput[]
    createMany?: camera_capturesCreateManyCamerasInputEnvelope
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
  }

  export type camera_capturesUpdateManyWithoutCamerasNestedInput = {
    create?: XOR<camera_capturesCreateWithoutCamerasInput, camera_capturesUncheckedCreateWithoutCamerasInput> | camera_capturesCreateWithoutCamerasInput[] | camera_capturesUncheckedCreateWithoutCamerasInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutCamerasInput | camera_capturesCreateOrConnectWithoutCamerasInput[]
    upsert?: camera_capturesUpsertWithWhereUniqueWithoutCamerasInput | camera_capturesUpsertWithWhereUniqueWithoutCamerasInput[]
    createMany?: camera_capturesCreateManyCamerasInputEnvelope
    set?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    disconnect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    delete?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    update?: camera_capturesUpdateWithWhereUniqueWithoutCamerasInput | camera_capturesUpdateWithWhereUniqueWithoutCamerasInput[]
    updateMany?: camera_capturesUpdateManyWithWhereWithoutCamerasInput | camera_capturesUpdateManyWithWhereWithoutCamerasInput[]
    deleteMany?: camera_capturesScalarWhereInput | camera_capturesScalarWhereInput[]
  }

  export type classesUpdateOneWithoutCamerasNestedInput = {
    create?: XOR<classesCreateWithoutCamerasInput, classesUncheckedCreateWithoutCamerasInput>
    connectOrCreate?: classesCreateOrConnectWithoutCamerasInput
    upsert?: classesUpsertWithoutCamerasInput
    disconnect?: classesWhereInput | boolean
    delete?: classesWhereInput | boolean
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutCamerasInput, classesUpdateWithoutCamerasInput>, classesUncheckedUpdateWithoutCamerasInput>
  }

  export type schoolsUpdateOneWithoutCamerasNestedInput = {
    create?: XOR<schoolsCreateWithoutCamerasInput, schoolsUncheckedCreateWithoutCamerasInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutCamerasInput
    upsert?: schoolsUpsertWithoutCamerasInput
    disconnect?: schoolsWhereInput | boolean
    delete?: schoolsWhereInput | boolean
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutCamerasInput, schoolsUpdateWithoutCamerasInput>, schoolsUncheckedUpdateWithoutCamerasInput>
  }

  export type camera_capturesUncheckedUpdateManyWithoutCamerasNestedInput = {
    create?: XOR<camera_capturesCreateWithoutCamerasInput, camera_capturesUncheckedCreateWithoutCamerasInput> | camera_capturesCreateWithoutCamerasInput[] | camera_capturesUncheckedCreateWithoutCamerasInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutCamerasInput | camera_capturesCreateOrConnectWithoutCamerasInput[]
    upsert?: camera_capturesUpsertWithWhereUniqueWithoutCamerasInput | camera_capturesUpsertWithWhereUniqueWithoutCamerasInput[]
    createMany?: camera_capturesCreateManyCamerasInputEnvelope
    set?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    disconnect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    delete?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    update?: camera_capturesUpdateWithWhereUniqueWithoutCamerasInput | camera_capturesUpdateWithWhereUniqueWithoutCamerasInput[]
    updateMany?: camera_capturesUpdateManyWithWhereWithoutCamerasInput | camera_capturesUpdateManyWithWhereWithoutCamerasInput[]
    deleteMany?: camera_capturesScalarWhereInput | camera_capturesScalarWhereInput[]
  }

  export type attendance_recordsCreateNestedManyWithoutClassesInput = {
    create?: XOR<attendance_recordsCreateWithoutClassesInput, attendance_recordsUncheckedCreateWithoutClassesInput> | attendance_recordsCreateWithoutClassesInput[] | attendance_recordsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutClassesInput | attendance_recordsCreateOrConnectWithoutClassesInput[]
    createMany?: attendance_recordsCreateManyClassesInputEnvelope
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
  }

  export type camera_capturesCreateNestedManyWithoutClassesInput = {
    create?: XOR<camera_capturesCreateWithoutClassesInput, camera_capturesUncheckedCreateWithoutClassesInput> | camera_capturesCreateWithoutClassesInput[] | camera_capturesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutClassesInput | camera_capturesCreateOrConnectWithoutClassesInput[]
    createMany?: camera_capturesCreateManyClassesInputEnvelope
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
  }

  export type camerasCreateNestedManyWithoutClassesInput = {
    create?: XOR<camerasCreateWithoutClassesInput, camerasUncheckedCreateWithoutClassesInput> | camerasCreateWithoutClassesInput[] | camerasUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutClassesInput | camerasCreateOrConnectWithoutClassesInput[]
    createMany?: camerasCreateManyClassesInputEnvelope
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
  }

  export type schoolsCreateNestedOneWithoutClassesInput = {
    create?: XOR<schoolsCreateWithoutClassesInput, schoolsUncheckedCreateWithoutClassesInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutClassesInput
    connect?: schoolsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutClassesInput = {
    create?: XOR<usersCreateWithoutClassesInput, usersUncheckedCreateWithoutClassesInput>
    connectOrCreate?: usersCreateOrConnectWithoutClassesInput
    connect?: usersWhereUniqueInput
  }

  export type enrollmentsCreateNestedManyWithoutClassesInput = {
    create?: XOR<enrollmentsCreateWithoutClassesInput, enrollmentsUncheckedCreateWithoutClassesInput> | enrollmentsCreateWithoutClassesInput[] | enrollmentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutClassesInput | enrollmentsCreateOrConnectWithoutClassesInput[]
    createMany?: enrollmentsCreateManyClassesInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type attendance_recordsUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<attendance_recordsCreateWithoutClassesInput, attendance_recordsUncheckedCreateWithoutClassesInput> | attendance_recordsCreateWithoutClassesInput[] | attendance_recordsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutClassesInput | attendance_recordsCreateOrConnectWithoutClassesInput[]
    createMany?: attendance_recordsCreateManyClassesInputEnvelope
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
  }

  export type camera_capturesUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<camera_capturesCreateWithoutClassesInput, camera_capturesUncheckedCreateWithoutClassesInput> | camera_capturesCreateWithoutClassesInput[] | camera_capturesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutClassesInput | camera_capturesCreateOrConnectWithoutClassesInput[]
    createMany?: camera_capturesCreateManyClassesInputEnvelope
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
  }

  export type camerasUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<camerasCreateWithoutClassesInput, camerasUncheckedCreateWithoutClassesInput> | camerasCreateWithoutClassesInput[] | camerasUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutClassesInput | camerasCreateOrConnectWithoutClassesInput[]
    createMany?: camerasCreateManyClassesInputEnvelope
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
  }

  export type enrollmentsUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<enrollmentsCreateWithoutClassesInput, enrollmentsUncheckedCreateWithoutClassesInput> | enrollmentsCreateWithoutClassesInput[] | enrollmentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutClassesInput | enrollmentsCreateOrConnectWithoutClassesInput[]
    createMany?: enrollmentsCreateManyClassesInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type attendance_recordsUpdateManyWithoutClassesNestedInput = {
    create?: XOR<attendance_recordsCreateWithoutClassesInput, attendance_recordsUncheckedCreateWithoutClassesInput> | attendance_recordsCreateWithoutClassesInput[] | attendance_recordsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutClassesInput | attendance_recordsCreateOrConnectWithoutClassesInput[]
    upsert?: attendance_recordsUpsertWithWhereUniqueWithoutClassesInput | attendance_recordsUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: attendance_recordsCreateManyClassesInputEnvelope
    set?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    disconnect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    delete?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    update?: attendance_recordsUpdateWithWhereUniqueWithoutClassesInput | attendance_recordsUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: attendance_recordsUpdateManyWithWhereWithoutClassesInput | attendance_recordsUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
  }

  export type camera_capturesUpdateManyWithoutClassesNestedInput = {
    create?: XOR<camera_capturesCreateWithoutClassesInput, camera_capturesUncheckedCreateWithoutClassesInput> | camera_capturesCreateWithoutClassesInput[] | camera_capturesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutClassesInput | camera_capturesCreateOrConnectWithoutClassesInput[]
    upsert?: camera_capturesUpsertWithWhereUniqueWithoutClassesInput | camera_capturesUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: camera_capturesCreateManyClassesInputEnvelope
    set?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    disconnect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    delete?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    update?: camera_capturesUpdateWithWhereUniqueWithoutClassesInput | camera_capturesUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: camera_capturesUpdateManyWithWhereWithoutClassesInput | camera_capturesUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: camera_capturesScalarWhereInput | camera_capturesScalarWhereInput[]
  }

  export type camerasUpdateManyWithoutClassesNestedInput = {
    create?: XOR<camerasCreateWithoutClassesInput, camerasUncheckedCreateWithoutClassesInput> | camerasCreateWithoutClassesInput[] | camerasUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutClassesInput | camerasCreateOrConnectWithoutClassesInput[]
    upsert?: camerasUpsertWithWhereUniqueWithoutClassesInput | camerasUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: camerasCreateManyClassesInputEnvelope
    set?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    disconnect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    delete?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    update?: camerasUpdateWithWhereUniqueWithoutClassesInput | camerasUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: camerasUpdateManyWithWhereWithoutClassesInput | camerasUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: camerasScalarWhereInput | camerasScalarWhereInput[]
  }

  export type schoolsUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<schoolsCreateWithoutClassesInput, schoolsUncheckedCreateWithoutClassesInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutClassesInput
    upsert?: schoolsUpsertWithoutClassesInput
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutClassesInput, schoolsUpdateWithoutClassesInput>, schoolsUncheckedUpdateWithoutClassesInput>
  }

  export type usersUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<usersCreateWithoutClassesInput, usersUncheckedCreateWithoutClassesInput>
    connectOrCreate?: usersCreateOrConnectWithoutClassesInput
    upsert?: usersUpsertWithoutClassesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClassesInput, usersUpdateWithoutClassesInput>, usersUncheckedUpdateWithoutClassesInput>
  }

  export type enrollmentsUpdateManyWithoutClassesNestedInput = {
    create?: XOR<enrollmentsCreateWithoutClassesInput, enrollmentsUncheckedCreateWithoutClassesInput> | enrollmentsCreateWithoutClassesInput[] | enrollmentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutClassesInput | enrollmentsCreateOrConnectWithoutClassesInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutClassesInput | enrollmentsUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: enrollmentsCreateManyClassesInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutClassesInput | enrollmentsUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutClassesInput | enrollmentsUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<attendance_recordsCreateWithoutClassesInput, attendance_recordsUncheckedCreateWithoutClassesInput> | attendance_recordsCreateWithoutClassesInput[] | attendance_recordsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutClassesInput | attendance_recordsCreateOrConnectWithoutClassesInput[]
    upsert?: attendance_recordsUpsertWithWhereUniqueWithoutClassesInput | attendance_recordsUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: attendance_recordsCreateManyClassesInputEnvelope
    set?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    disconnect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    delete?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    update?: attendance_recordsUpdateWithWhereUniqueWithoutClassesInput | attendance_recordsUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: attendance_recordsUpdateManyWithWhereWithoutClassesInput | attendance_recordsUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
  }

  export type camera_capturesUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<camera_capturesCreateWithoutClassesInput, camera_capturesUncheckedCreateWithoutClassesInput> | camera_capturesCreateWithoutClassesInput[] | camera_capturesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camera_capturesCreateOrConnectWithoutClassesInput | camera_capturesCreateOrConnectWithoutClassesInput[]
    upsert?: camera_capturesUpsertWithWhereUniqueWithoutClassesInput | camera_capturesUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: camera_capturesCreateManyClassesInputEnvelope
    set?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    disconnect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    delete?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    connect?: camera_capturesWhereUniqueInput | camera_capturesWhereUniqueInput[]
    update?: camera_capturesUpdateWithWhereUniqueWithoutClassesInput | camera_capturesUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: camera_capturesUpdateManyWithWhereWithoutClassesInput | camera_capturesUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: camera_capturesScalarWhereInput | camera_capturesScalarWhereInput[]
  }

  export type camerasUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<camerasCreateWithoutClassesInput, camerasUncheckedCreateWithoutClassesInput> | camerasCreateWithoutClassesInput[] | camerasUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutClassesInput | camerasCreateOrConnectWithoutClassesInput[]
    upsert?: camerasUpsertWithWhereUniqueWithoutClassesInput | camerasUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: camerasCreateManyClassesInputEnvelope
    set?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    disconnect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    delete?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    update?: camerasUpdateWithWhereUniqueWithoutClassesInput | camerasUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: camerasUpdateManyWithWhereWithoutClassesInput | camerasUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: camerasScalarWhereInput | camerasScalarWhereInput[]
  }

  export type enrollmentsUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<enrollmentsCreateWithoutClassesInput, enrollmentsUncheckedCreateWithoutClassesInput> | enrollmentsCreateWithoutClassesInput[] | enrollmentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutClassesInput | enrollmentsCreateOrConnectWithoutClassesInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutClassesInput | enrollmentsUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: enrollmentsCreateManyClassesInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutClassesInput | enrollmentsUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutClassesInput | enrollmentsUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type classesCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<classesCreateWithoutEnrollmentsInput, classesUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: classesCreateOrConnectWithoutEnrollmentsInput
    connect?: classesWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<studentsCreateWithoutEnrollmentsInput, studentsUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutEnrollmentsInput
    connect?: studentsWhereUniqueInput
  }

  export type classesUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<classesCreateWithoutEnrollmentsInput, classesUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: classesCreateOrConnectWithoutEnrollmentsInput
    upsert?: classesUpsertWithoutEnrollmentsInput
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutEnrollmentsInput, classesUpdateWithoutEnrollmentsInput>, classesUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type studentsUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<studentsCreateWithoutEnrollmentsInput, studentsUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutEnrollmentsInput
    upsert?: studentsUpsertWithoutEnrollmentsInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutEnrollmentsInput, studentsUpdateWithoutEnrollmentsInput>, studentsUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type camera_capturesCreateNestedOneWithoutRecognized_facesInput = {
    create?: XOR<camera_capturesCreateWithoutRecognized_facesInput, camera_capturesUncheckedCreateWithoutRecognized_facesInput>
    connectOrCreate?: camera_capturesCreateOrConnectWithoutRecognized_facesInput
    connect?: camera_capturesWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutRecognized_facesInput = {
    create?: XOR<studentsCreateWithoutRecognized_facesInput, studentsUncheckedCreateWithoutRecognized_facesInput>
    connectOrCreate?: studentsCreateOrConnectWithoutRecognized_facesInput
    connect?: studentsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type camera_capturesUpdateOneRequiredWithoutRecognized_facesNestedInput = {
    create?: XOR<camera_capturesCreateWithoutRecognized_facesInput, camera_capturesUncheckedCreateWithoutRecognized_facesInput>
    connectOrCreate?: camera_capturesCreateOrConnectWithoutRecognized_facesInput
    upsert?: camera_capturesUpsertWithoutRecognized_facesInput
    connect?: camera_capturesWhereUniqueInput
    update?: XOR<XOR<camera_capturesUpdateToOneWithWhereWithoutRecognized_facesInput, camera_capturesUpdateWithoutRecognized_facesInput>, camera_capturesUncheckedUpdateWithoutRecognized_facesInput>
  }

  export type studentsUpdateOneRequiredWithoutRecognized_facesNestedInput = {
    create?: XOR<studentsCreateWithoutRecognized_facesInput, studentsUncheckedCreateWithoutRecognized_facesInput>
    connectOrCreate?: studentsCreateOrConnectWithoutRecognized_facesInput
    upsert?: studentsUpsertWithoutRecognized_facesInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutRecognized_facesInput, studentsUpdateWithoutRecognized_facesInput>, studentsUncheckedUpdateWithoutRecognized_facesInput>
  }

  export type camerasCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<camerasCreateWithoutSchoolsInput, camerasUncheckedCreateWithoutSchoolsInput> | camerasCreateWithoutSchoolsInput[] | camerasUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutSchoolsInput | camerasCreateOrConnectWithoutSchoolsInput[]
    createMany?: camerasCreateManySchoolsInputEnvelope
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
  }

  export type classesCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<classesCreateWithoutSchoolsInput, classesUncheckedCreateWithoutSchoolsInput> | classesCreateWithoutSchoolsInput[] | classesUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: classesCreateOrConnectWithoutSchoolsInput | classesCreateOrConnectWithoutSchoolsInput[]
    createMany?: classesCreateManySchoolsInputEnvelope
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
  }

  export type studentsCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<studentsCreateWithoutSchoolsInput, studentsUncheckedCreateWithoutSchoolsInput> | studentsCreateWithoutSchoolsInput[] | studentsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSchoolsInput | studentsCreateOrConnectWithoutSchoolsInput[]
    createMany?: studentsCreateManySchoolsInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type camerasUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<camerasCreateWithoutSchoolsInput, camerasUncheckedCreateWithoutSchoolsInput> | camerasCreateWithoutSchoolsInput[] | camerasUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutSchoolsInput | camerasCreateOrConnectWithoutSchoolsInput[]
    createMany?: camerasCreateManySchoolsInputEnvelope
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
  }

  export type classesUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<classesCreateWithoutSchoolsInput, classesUncheckedCreateWithoutSchoolsInput> | classesCreateWithoutSchoolsInput[] | classesUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: classesCreateOrConnectWithoutSchoolsInput | classesCreateOrConnectWithoutSchoolsInput[]
    createMany?: classesCreateManySchoolsInputEnvelope
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
  }

  export type studentsUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<studentsCreateWithoutSchoolsInput, studentsUncheckedCreateWithoutSchoolsInput> | studentsCreateWithoutSchoolsInput[] | studentsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSchoolsInput | studentsCreateOrConnectWithoutSchoolsInput[]
    createMany?: studentsCreateManySchoolsInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type camerasUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<camerasCreateWithoutSchoolsInput, camerasUncheckedCreateWithoutSchoolsInput> | camerasCreateWithoutSchoolsInput[] | camerasUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutSchoolsInput | camerasCreateOrConnectWithoutSchoolsInput[]
    upsert?: camerasUpsertWithWhereUniqueWithoutSchoolsInput | camerasUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: camerasCreateManySchoolsInputEnvelope
    set?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    disconnect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    delete?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    update?: camerasUpdateWithWhereUniqueWithoutSchoolsInput | camerasUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: camerasUpdateManyWithWhereWithoutSchoolsInput | camerasUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: camerasScalarWhereInput | camerasScalarWhereInput[]
  }

  export type classesUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<classesCreateWithoutSchoolsInput, classesUncheckedCreateWithoutSchoolsInput> | classesCreateWithoutSchoolsInput[] | classesUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: classesCreateOrConnectWithoutSchoolsInput | classesCreateOrConnectWithoutSchoolsInput[]
    upsert?: classesUpsertWithWhereUniqueWithoutSchoolsInput | classesUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: classesCreateManySchoolsInputEnvelope
    set?: classesWhereUniqueInput | classesWhereUniqueInput[]
    disconnect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    delete?: classesWhereUniqueInput | classesWhereUniqueInput[]
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    update?: classesUpdateWithWhereUniqueWithoutSchoolsInput | classesUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: classesUpdateManyWithWhereWithoutSchoolsInput | classesUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: classesScalarWhereInput | classesScalarWhereInput[]
  }

  export type studentsUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<studentsCreateWithoutSchoolsInput, studentsUncheckedCreateWithoutSchoolsInput> | studentsCreateWithoutSchoolsInput[] | studentsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSchoolsInput | studentsCreateOrConnectWithoutSchoolsInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutSchoolsInput | studentsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: studentsCreateManySchoolsInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutSchoolsInput | studentsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutSchoolsInput | studentsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type camerasUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<camerasCreateWithoutSchoolsInput, camerasUncheckedCreateWithoutSchoolsInput> | camerasCreateWithoutSchoolsInput[] | camerasUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: camerasCreateOrConnectWithoutSchoolsInput | camerasCreateOrConnectWithoutSchoolsInput[]
    upsert?: camerasUpsertWithWhereUniqueWithoutSchoolsInput | camerasUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: camerasCreateManySchoolsInputEnvelope
    set?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    disconnect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    delete?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    connect?: camerasWhereUniqueInput | camerasWhereUniqueInput[]
    update?: camerasUpdateWithWhereUniqueWithoutSchoolsInput | camerasUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: camerasUpdateManyWithWhereWithoutSchoolsInput | camerasUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: camerasScalarWhereInput | camerasScalarWhereInput[]
  }

  export type classesUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<classesCreateWithoutSchoolsInput, classesUncheckedCreateWithoutSchoolsInput> | classesCreateWithoutSchoolsInput[] | classesUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: classesCreateOrConnectWithoutSchoolsInput | classesCreateOrConnectWithoutSchoolsInput[]
    upsert?: classesUpsertWithWhereUniqueWithoutSchoolsInput | classesUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: classesCreateManySchoolsInputEnvelope
    set?: classesWhereUniqueInput | classesWhereUniqueInput[]
    disconnect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    delete?: classesWhereUniqueInput | classesWhereUniqueInput[]
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    update?: classesUpdateWithWhereUniqueWithoutSchoolsInput | classesUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: classesUpdateManyWithWhereWithoutSchoolsInput | classesUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: classesScalarWhereInput | classesScalarWhereInput[]
  }

  export type studentsUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<studentsCreateWithoutSchoolsInput, studentsUncheckedCreateWithoutSchoolsInput> | studentsCreateWithoutSchoolsInput[] | studentsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSchoolsInput | studentsCreateOrConnectWithoutSchoolsInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutSchoolsInput | studentsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: studentsCreateManySchoolsInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutSchoolsInput | studentsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutSchoolsInput | studentsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type studentsCreateNestedOneWithoutStudent_imagesInput = {
    create?: XOR<studentsCreateWithoutStudent_imagesInput, studentsUncheckedCreateWithoutStudent_imagesInput>
    connectOrCreate?: studentsCreateOrConnectWithoutStudent_imagesInput
    connect?: studentsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type studentsUpdateOneRequiredWithoutStudent_imagesNestedInput = {
    create?: XOR<studentsCreateWithoutStudent_imagesInput, studentsUncheckedCreateWithoutStudent_imagesInput>
    connectOrCreate?: studentsCreateOrConnectWithoutStudent_imagesInput
    upsert?: studentsUpsertWithoutStudent_imagesInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutStudent_imagesInput, studentsUpdateWithoutStudent_imagesInput>, studentsUncheckedUpdateWithoutStudent_imagesInput>
  }

  export type attendance_recordsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<attendance_recordsCreateWithoutStudentsInput, attendance_recordsUncheckedCreateWithoutStudentsInput> | attendance_recordsCreateWithoutStudentsInput[] | attendance_recordsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutStudentsInput | attendance_recordsCreateOrConnectWithoutStudentsInput[]
    createMany?: attendance_recordsCreateManyStudentsInputEnvelope
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
  }

  export type enrollmentsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<enrollmentsCreateWithoutStudentsInput, enrollmentsUncheckedCreateWithoutStudentsInput> | enrollmentsCreateWithoutStudentsInput[] | enrollmentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutStudentsInput | enrollmentsCreateOrConnectWithoutStudentsInput[]
    createMany?: enrollmentsCreateManyStudentsInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type recognized_facesCreateNestedManyWithoutStudentsInput = {
    create?: XOR<recognized_facesCreateWithoutStudentsInput, recognized_facesUncheckedCreateWithoutStudentsInput> | recognized_facesCreateWithoutStudentsInput[] | recognized_facesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutStudentsInput | recognized_facesCreateOrConnectWithoutStudentsInput[]
    createMany?: recognized_facesCreateManyStudentsInputEnvelope
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
  }

  export type student_imagesCreateNestedManyWithoutStudentsInput = {
    create?: XOR<student_imagesCreateWithoutStudentsInput, student_imagesUncheckedCreateWithoutStudentsInput> | student_imagesCreateWithoutStudentsInput[] | student_imagesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: student_imagesCreateOrConnectWithoutStudentsInput | student_imagesCreateOrConnectWithoutStudentsInput[]
    createMany?: student_imagesCreateManyStudentsInputEnvelope
    connect?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
  }

  export type schoolsCreateNestedOneWithoutStudentsInput = {
    create?: XOR<schoolsCreateWithoutStudentsInput, schoolsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutStudentsInput
    connect?: schoolsWhereUniqueInput
  }

  export type attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<attendance_recordsCreateWithoutStudentsInput, attendance_recordsUncheckedCreateWithoutStudentsInput> | attendance_recordsCreateWithoutStudentsInput[] | attendance_recordsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutStudentsInput | attendance_recordsCreateOrConnectWithoutStudentsInput[]
    createMany?: attendance_recordsCreateManyStudentsInputEnvelope
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
  }

  export type enrollmentsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<enrollmentsCreateWithoutStudentsInput, enrollmentsUncheckedCreateWithoutStudentsInput> | enrollmentsCreateWithoutStudentsInput[] | enrollmentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutStudentsInput | enrollmentsCreateOrConnectWithoutStudentsInput[]
    createMany?: enrollmentsCreateManyStudentsInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type recognized_facesUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<recognized_facesCreateWithoutStudentsInput, recognized_facesUncheckedCreateWithoutStudentsInput> | recognized_facesCreateWithoutStudentsInput[] | recognized_facesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutStudentsInput | recognized_facesCreateOrConnectWithoutStudentsInput[]
    createMany?: recognized_facesCreateManyStudentsInputEnvelope
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
  }

  export type student_imagesUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<student_imagesCreateWithoutStudentsInput, student_imagesUncheckedCreateWithoutStudentsInput> | student_imagesCreateWithoutStudentsInput[] | student_imagesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: student_imagesCreateOrConnectWithoutStudentsInput | student_imagesCreateOrConnectWithoutStudentsInput[]
    createMany?: student_imagesCreateManyStudentsInputEnvelope
    connect?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
  }

  export type attendance_recordsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<attendance_recordsCreateWithoutStudentsInput, attendance_recordsUncheckedCreateWithoutStudentsInput> | attendance_recordsCreateWithoutStudentsInput[] | attendance_recordsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutStudentsInput | attendance_recordsCreateOrConnectWithoutStudentsInput[]
    upsert?: attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput | attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: attendance_recordsCreateManyStudentsInputEnvelope
    set?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    disconnect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    delete?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    update?: attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput | attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: attendance_recordsUpdateManyWithWhereWithoutStudentsInput | attendance_recordsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
  }

  export type enrollmentsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<enrollmentsCreateWithoutStudentsInput, enrollmentsUncheckedCreateWithoutStudentsInput> | enrollmentsCreateWithoutStudentsInput[] | enrollmentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutStudentsInput | enrollmentsCreateOrConnectWithoutStudentsInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutStudentsInput | enrollmentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: enrollmentsCreateManyStudentsInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutStudentsInput | enrollmentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutStudentsInput | enrollmentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type recognized_facesUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<recognized_facesCreateWithoutStudentsInput, recognized_facesUncheckedCreateWithoutStudentsInput> | recognized_facesCreateWithoutStudentsInput[] | recognized_facesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutStudentsInput | recognized_facesCreateOrConnectWithoutStudentsInput[]
    upsert?: recognized_facesUpsertWithWhereUniqueWithoutStudentsInput | recognized_facesUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: recognized_facesCreateManyStudentsInputEnvelope
    set?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    disconnect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    delete?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    update?: recognized_facesUpdateWithWhereUniqueWithoutStudentsInput | recognized_facesUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: recognized_facesUpdateManyWithWhereWithoutStudentsInput | recognized_facesUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: recognized_facesScalarWhereInput | recognized_facesScalarWhereInput[]
  }

  export type student_imagesUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<student_imagesCreateWithoutStudentsInput, student_imagesUncheckedCreateWithoutStudentsInput> | student_imagesCreateWithoutStudentsInput[] | student_imagesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: student_imagesCreateOrConnectWithoutStudentsInput | student_imagesCreateOrConnectWithoutStudentsInput[]
    upsert?: student_imagesUpsertWithWhereUniqueWithoutStudentsInput | student_imagesUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: student_imagesCreateManyStudentsInputEnvelope
    set?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    disconnect?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    delete?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    connect?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    update?: student_imagesUpdateWithWhereUniqueWithoutStudentsInput | student_imagesUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: student_imagesUpdateManyWithWhereWithoutStudentsInput | student_imagesUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: student_imagesScalarWhereInput | student_imagesScalarWhereInput[]
  }

  export type schoolsUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<schoolsCreateWithoutStudentsInput, schoolsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutStudentsInput
    upsert?: schoolsUpsertWithoutStudentsInput
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutStudentsInput, schoolsUpdateWithoutStudentsInput>, schoolsUncheckedUpdateWithoutStudentsInput>
  }

  export type attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<attendance_recordsCreateWithoutStudentsInput, attendance_recordsUncheckedCreateWithoutStudentsInput> | attendance_recordsCreateWithoutStudentsInput[] | attendance_recordsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutStudentsInput | attendance_recordsCreateOrConnectWithoutStudentsInput[]
    upsert?: attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput | attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: attendance_recordsCreateManyStudentsInputEnvelope
    set?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    disconnect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    delete?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    update?: attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput | attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: attendance_recordsUpdateManyWithWhereWithoutStudentsInput | attendance_recordsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
  }

  export type enrollmentsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<enrollmentsCreateWithoutStudentsInput, enrollmentsUncheckedCreateWithoutStudentsInput> | enrollmentsCreateWithoutStudentsInput[] | enrollmentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutStudentsInput | enrollmentsCreateOrConnectWithoutStudentsInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutStudentsInput | enrollmentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: enrollmentsCreateManyStudentsInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutStudentsInput | enrollmentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutStudentsInput | enrollmentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type recognized_facesUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<recognized_facesCreateWithoutStudentsInput, recognized_facesUncheckedCreateWithoutStudentsInput> | recognized_facesCreateWithoutStudentsInput[] | recognized_facesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recognized_facesCreateOrConnectWithoutStudentsInput | recognized_facesCreateOrConnectWithoutStudentsInput[]
    upsert?: recognized_facesUpsertWithWhereUniqueWithoutStudentsInput | recognized_facesUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: recognized_facesCreateManyStudentsInputEnvelope
    set?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    disconnect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    delete?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    connect?: recognized_facesWhereUniqueInput | recognized_facesWhereUniqueInput[]
    update?: recognized_facesUpdateWithWhereUniqueWithoutStudentsInput | recognized_facesUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: recognized_facesUpdateManyWithWhereWithoutStudentsInput | recognized_facesUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: recognized_facesScalarWhereInput | recognized_facesScalarWhereInput[]
  }

  export type student_imagesUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<student_imagesCreateWithoutStudentsInput, student_imagesUncheckedCreateWithoutStudentsInput> | student_imagesCreateWithoutStudentsInput[] | student_imagesUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: student_imagesCreateOrConnectWithoutStudentsInput | student_imagesCreateOrConnectWithoutStudentsInput[]
    upsert?: student_imagesUpsertWithWhereUniqueWithoutStudentsInput | student_imagesUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: student_imagesCreateManyStudentsInputEnvelope
    set?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    disconnect?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    delete?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    connect?: student_imagesWhereUniqueInput | student_imagesWhereUniqueInput[]
    update?: student_imagesUpdateWithWhereUniqueWithoutStudentsInput | student_imagesUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: student_imagesUpdateManyWithWhereWithoutStudentsInput | student_imagesUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: student_imagesScalarWhereInput | student_imagesScalarWhereInput[]
  }

  export type attendance_recordsCreateNestedManyWithoutUsersInput = {
    create?: XOR<attendance_recordsCreateWithoutUsersInput, attendance_recordsUncheckedCreateWithoutUsersInput> | attendance_recordsCreateWithoutUsersInput[] | attendance_recordsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutUsersInput | attendance_recordsCreateOrConnectWithoutUsersInput[]
    createMany?: attendance_recordsCreateManyUsersInputEnvelope
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
  }

  export type classesCreateNestedManyWithoutUsersInput = {
    create?: XOR<classesCreateWithoutUsersInput, classesUncheckedCreateWithoutUsersInput> | classesCreateWithoutUsersInput[] | classesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: classesCreateOrConnectWithoutUsersInput | classesCreateOrConnectWithoutUsersInput[]
    createMany?: classesCreateManyUsersInputEnvelope
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
  }

  export type attendance_recordsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<attendance_recordsCreateWithoutUsersInput, attendance_recordsUncheckedCreateWithoutUsersInput> | attendance_recordsCreateWithoutUsersInput[] | attendance_recordsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutUsersInput | attendance_recordsCreateOrConnectWithoutUsersInput[]
    createMany?: attendance_recordsCreateManyUsersInputEnvelope
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
  }

  export type classesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<classesCreateWithoutUsersInput, classesUncheckedCreateWithoutUsersInput> | classesCreateWithoutUsersInput[] | classesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: classesCreateOrConnectWithoutUsersInput | classesCreateOrConnectWithoutUsersInput[]
    createMany?: classesCreateManyUsersInputEnvelope
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
  }

  export type attendance_recordsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attendance_recordsCreateWithoutUsersInput, attendance_recordsUncheckedCreateWithoutUsersInput> | attendance_recordsCreateWithoutUsersInput[] | attendance_recordsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutUsersInput | attendance_recordsCreateOrConnectWithoutUsersInput[]
    upsert?: attendance_recordsUpsertWithWhereUniqueWithoutUsersInput | attendance_recordsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attendance_recordsCreateManyUsersInputEnvelope
    set?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    disconnect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    delete?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    update?: attendance_recordsUpdateWithWhereUniqueWithoutUsersInput | attendance_recordsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attendance_recordsUpdateManyWithWhereWithoutUsersInput | attendance_recordsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
  }

  export type classesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<classesCreateWithoutUsersInput, classesUncheckedCreateWithoutUsersInput> | classesCreateWithoutUsersInput[] | classesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: classesCreateOrConnectWithoutUsersInput | classesCreateOrConnectWithoutUsersInput[]
    upsert?: classesUpsertWithWhereUniqueWithoutUsersInput | classesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: classesCreateManyUsersInputEnvelope
    set?: classesWhereUniqueInput | classesWhereUniqueInput[]
    disconnect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    delete?: classesWhereUniqueInput | classesWhereUniqueInput[]
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    update?: classesUpdateWithWhereUniqueWithoutUsersInput | classesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: classesUpdateManyWithWhereWithoutUsersInput | classesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: classesScalarWhereInput | classesScalarWhereInput[]
  }

  export type attendance_recordsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attendance_recordsCreateWithoutUsersInput, attendance_recordsUncheckedCreateWithoutUsersInput> | attendance_recordsCreateWithoutUsersInput[] | attendance_recordsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendance_recordsCreateOrConnectWithoutUsersInput | attendance_recordsCreateOrConnectWithoutUsersInput[]
    upsert?: attendance_recordsUpsertWithWhereUniqueWithoutUsersInput | attendance_recordsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attendance_recordsCreateManyUsersInputEnvelope
    set?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    disconnect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    delete?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    connect?: attendance_recordsWhereUniqueInput | attendance_recordsWhereUniqueInput[]
    update?: attendance_recordsUpdateWithWhereUniqueWithoutUsersInput | attendance_recordsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attendance_recordsUpdateManyWithWhereWithoutUsersInput | attendance_recordsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
  }

  export type classesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<classesCreateWithoutUsersInput, classesUncheckedCreateWithoutUsersInput> | classesCreateWithoutUsersInput[] | classesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: classesCreateOrConnectWithoutUsersInput | classesCreateOrConnectWithoutUsersInput[]
    upsert?: classesUpsertWithWhereUniqueWithoutUsersInput | classesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: classesCreateManyUsersInputEnvelope
    set?: classesWhereUniqueInput | classesWhereUniqueInput[]
    disconnect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    delete?: classesWhereUniqueInput | classesWhereUniqueInput[]
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    update?: classesUpdateWithWhereUniqueWithoutUsersInput | classesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: classesUpdateManyWithWhereWithoutUsersInput | classesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: classesScalarWhereInput | classesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type classesCreateWithoutAttendance_recordsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    camera_captures?: camera_capturesCreateNestedManyWithoutClassesInput
    cameras?: camerasCreateNestedManyWithoutClassesInput
    schools: schoolsCreateNestedOneWithoutClassesInput
    users: usersCreateNestedOneWithoutClassesInput
    enrollments?: enrollmentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutAttendance_recordsInput = {
    id?: string
    name: string
    teacher_id: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutClassesInput
    cameras?: camerasUncheckedCreateNestedManyWithoutClassesInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutAttendance_recordsInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutAttendance_recordsInput, classesUncheckedCreateWithoutAttendance_recordsInput>
  }

  export type usersCreateWithoutAttendance_recordsInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    classes?: classesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAttendance_recordsInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    classes?: classesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAttendance_recordsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAttendance_recordsInput, usersUncheckedCreateWithoutAttendance_recordsInput>
  }

  export type studentsCreateWithoutAttendance_recordsInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    enrollments?: enrollmentsCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesCreateNestedManyWithoutStudentsInput
    schools: schoolsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutAttendance_recordsInput = {
    id?: string
    full_name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutAttendance_recordsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutAttendance_recordsInput, studentsUncheckedCreateWithoutAttendance_recordsInput>
  }

  export type classesUpsertWithoutAttendance_recordsInput = {
    update: XOR<classesUpdateWithoutAttendance_recordsInput, classesUncheckedUpdateWithoutAttendance_recordsInput>
    create: XOR<classesCreateWithoutAttendance_recordsInput, classesUncheckedCreateWithoutAttendance_recordsInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutAttendance_recordsInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutAttendance_recordsInput, classesUncheckedUpdateWithoutAttendance_recordsInput>
  }

  export type classesUpdateWithoutAttendance_recordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    camera_captures?: camera_capturesUpdateManyWithoutClassesNestedInput
    cameras?: camerasUpdateManyWithoutClassesNestedInput
    schools?: schoolsUpdateOneRequiredWithoutClassesNestedInput
    users?: usersUpdateOneRequiredWithoutClassesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutAttendance_recordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutClassesNestedInput
    cameras?: camerasUncheckedUpdateManyWithoutClassesNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type usersUpsertWithoutAttendance_recordsInput = {
    update: XOR<usersUpdateWithoutAttendance_recordsInput, usersUncheckedUpdateWithoutAttendance_recordsInput>
    create: XOR<usersCreateWithoutAttendance_recordsInput, usersUncheckedCreateWithoutAttendance_recordsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAttendance_recordsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAttendance_recordsInput, usersUncheckedUpdateWithoutAttendance_recordsInput>
  }

  export type usersUpdateWithoutAttendance_recordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAttendance_recordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type studentsUpsertWithoutAttendance_recordsInput = {
    update: XOR<studentsUpdateWithoutAttendance_recordsInput, studentsUncheckedUpdateWithoutAttendance_recordsInput>
    create: XOR<studentsCreateWithoutAttendance_recordsInput, studentsUncheckedCreateWithoutAttendance_recordsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutAttendance_recordsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutAttendance_recordsInput, studentsUncheckedUpdateWithoutAttendance_recordsInput>
  }

  export type studentsUpdateWithoutAttendance_recordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUpdateManyWithoutStudentsNestedInput
    schools?: schoolsUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutAttendance_recordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type camerasCreateWithoutCamera_capturesInput = {
    device_id: string
    location: string
    status?: string
    created_at?: Date | string | null
    id: string
    classes?: classesCreateNestedOneWithoutCamerasInput
    schools?: schoolsCreateNestedOneWithoutCamerasInput
  }

  export type camerasUncheckedCreateWithoutCamera_capturesInput = {
    device_id: string
    location: string
    status?: string
    school_id?: string | null
    class_id?: string | null
    created_at?: Date | string | null
    id: string
  }

  export type camerasCreateOrConnectWithoutCamera_capturesInput = {
    where: camerasWhereUniqueInput
    create: XOR<camerasCreateWithoutCamera_capturesInput, camerasUncheckedCreateWithoutCamera_capturesInput>
  }

  export type classesCreateWithoutCamera_capturesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutClassesInput
    cameras?: camerasCreateNestedManyWithoutClassesInput
    schools: schoolsCreateNestedOneWithoutClassesInput
    users: usersCreateNestedOneWithoutClassesInput
    enrollments?: enrollmentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutCamera_capturesInput = {
    id?: string
    name: string
    teacher_id: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutClassesInput
    cameras?: camerasUncheckedCreateNestedManyWithoutClassesInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutCamera_capturesInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutCamera_capturesInput, classesUncheckedCreateWithoutCamera_capturesInput>
  }

  export type recognized_facesCreateWithoutCamera_capturesInput = {
    id?: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    students: studentsCreateNestedOneWithoutRecognized_facesInput
  }

  export type recognized_facesUncheckedCreateWithoutCamera_capturesInput = {
    id?: string
    student_id: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recognized_facesCreateOrConnectWithoutCamera_capturesInput = {
    where: recognized_facesWhereUniqueInput
    create: XOR<recognized_facesCreateWithoutCamera_capturesInput, recognized_facesUncheckedCreateWithoutCamera_capturesInput>
  }

  export type recognized_facesCreateManyCamera_capturesInputEnvelope = {
    data: recognized_facesCreateManyCamera_capturesInput | recognized_facesCreateManyCamera_capturesInput[]
    skipDuplicates?: boolean
  }

  export type camerasUpsertWithoutCamera_capturesInput = {
    update: XOR<camerasUpdateWithoutCamera_capturesInput, camerasUncheckedUpdateWithoutCamera_capturesInput>
    create: XOR<camerasCreateWithoutCamera_capturesInput, camerasUncheckedCreateWithoutCamera_capturesInput>
    where?: camerasWhereInput
  }

  export type camerasUpdateToOneWithWhereWithoutCamera_capturesInput = {
    where?: camerasWhereInput
    data: XOR<camerasUpdateWithoutCamera_capturesInput, camerasUncheckedUpdateWithoutCamera_capturesInput>
  }

  export type camerasUpdateWithoutCamera_capturesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    classes?: classesUpdateOneWithoutCamerasNestedInput
    schools?: schoolsUpdateOneWithoutCamerasNestedInput
  }

  export type camerasUncheckedUpdateWithoutCamera_capturesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type classesUpsertWithoutCamera_capturesInput = {
    update: XOR<classesUpdateWithoutCamera_capturesInput, classesUncheckedUpdateWithoutCamera_capturesInput>
    create: XOR<classesCreateWithoutCamera_capturesInput, classesUncheckedCreateWithoutCamera_capturesInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutCamera_capturesInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutCamera_capturesInput, classesUncheckedUpdateWithoutCamera_capturesInput>
  }

  export type classesUpdateWithoutCamera_capturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutClassesNestedInput
    cameras?: camerasUpdateManyWithoutClassesNestedInput
    schools?: schoolsUpdateOneRequiredWithoutClassesNestedInput
    users?: usersUpdateOneRequiredWithoutClassesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutCamera_capturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput
    cameras?: camerasUncheckedUpdateManyWithoutClassesNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type recognized_facesUpsertWithWhereUniqueWithoutCamera_capturesInput = {
    where: recognized_facesWhereUniqueInput
    update: XOR<recognized_facesUpdateWithoutCamera_capturesInput, recognized_facesUncheckedUpdateWithoutCamera_capturesInput>
    create: XOR<recognized_facesCreateWithoutCamera_capturesInput, recognized_facesUncheckedCreateWithoutCamera_capturesInput>
  }

  export type recognized_facesUpdateWithWhereUniqueWithoutCamera_capturesInput = {
    where: recognized_facesWhereUniqueInput
    data: XOR<recognized_facesUpdateWithoutCamera_capturesInput, recognized_facesUncheckedUpdateWithoutCamera_capturesInput>
  }

  export type recognized_facesUpdateManyWithWhereWithoutCamera_capturesInput = {
    where: recognized_facesScalarWhereInput
    data: XOR<recognized_facesUpdateManyMutationInput, recognized_facesUncheckedUpdateManyWithoutCamera_capturesInput>
  }

  export type recognized_facesScalarWhereInput = {
    AND?: recognized_facesScalarWhereInput | recognized_facesScalarWhereInput[]
    OR?: recognized_facesScalarWhereInput[]
    NOT?: recognized_facesScalarWhereInput | recognized_facesScalarWhereInput[]
    id?: UuidFilter<"recognized_faces"> | string
    capture_id?: UuidFilter<"recognized_faces"> | string
    student_id?: UuidFilter<"recognized_faces"> | string
    confidence_score?: DecimalFilter<"recognized_faces"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"recognized_faces"> | Date | string | null
  }

  export type camera_capturesCreateWithoutCamerasInput = {
    id?: string
    image_path: string
    captured_at: Date | string
    created_at?: Date | string | null
    classes?: classesCreateNestedOneWithoutCamera_capturesInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutCamera_capturesInput
  }

  export type camera_capturesUncheckedCreateWithoutCamerasInput = {
    id?: string
    image_path: string
    captured_at: Date | string
    class_id?: string | null
    created_at?: Date | string | null
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutCamera_capturesInput
  }

  export type camera_capturesCreateOrConnectWithoutCamerasInput = {
    where: camera_capturesWhereUniqueInput
    create: XOR<camera_capturesCreateWithoutCamerasInput, camera_capturesUncheckedCreateWithoutCamerasInput>
  }

  export type camera_capturesCreateManyCamerasInputEnvelope = {
    data: camera_capturesCreateManyCamerasInput | camera_capturesCreateManyCamerasInput[]
    skipDuplicates?: boolean
  }

  export type classesCreateWithoutCamerasInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesCreateNestedManyWithoutClassesInput
    schools: schoolsCreateNestedOneWithoutClassesInput
    users: usersCreateNestedOneWithoutClassesInput
    enrollments?: enrollmentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutCamerasInput = {
    id?: string
    name: string
    teacher_id: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutClassesInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutCamerasInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutCamerasInput, classesUncheckedCreateWithoutCamerasInput>
  }

  export type schoolsCreateWithoutCamerasInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    classes?: classesCreateNestedManyWithoutSchoolsInput
    students?: studentsCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutCamerasInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    classes?: classesUncheckedCreateNestedManyWithoutSchoolsInput
    students?: studentsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsCreateOrConnectWithoutCamerasInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutCamerasInput, schoolsUncheckedCreateWithoutCamerasInput>
  }

  export type camera_capturesUpsertWithWhereUniqueWithoutCamerasInput = {
    where: camera_capturesWhereUniqueInput
    update: XOR<camera_capturesUpdateWithoutCamerasInput, camera_capturesUncheckedUpdateWithoutCamerasInput>
    create: XOR<camera_capturesCreateWithoutCamerasInput, camera_capturesUncheckedCreateWithoutCamerasInput>
  }

  export type camera_capturesUpdateWithWhereUniqueWithoutCamerasInput = {
    where: camera_capturesWhereUniqueInput
    data: XOR<camera_capturesUpdateWithoutCamerasInput, camera_capturesUncheckedUpdateWithoutCamerasInput>
  }

  export type camera_capturesUpdateManyWithWhereWithoutCamerasInput = {
    where: camera_capturesScalarWhereInput
    data: XOR<camera_capturesUpdateManyMutationInput, camera_capturesUncheckedUpdateManyWithoutCamerasInput>
  }

  export type camera_capturesScalarWhereInput = {
    AND?: camera_capturesScalarWhereInput | camera_capturesScalarWhereInput[]
    OR?: camera_capturesScalarWhereInput[]
    NOT?: camera_capturesScalarWhereInput | camera_capturesScalarWhereInput[]
    id?: UuidFilter<"camera_captures"> | string
    camera_id?: UuidFilter<"camera_captures"> | string
    image_path?: StringFilter<"camera_captures"> | string
    captured_at?: DateTimeFilter<"camera_captures"> | Date | string
    class_id?: UuidNullableFilter<"camera_captures"> | string | null
    created_at?: DateTimeNullableFilter<"camera_captures"> | Date | string | null
  }

  export type classesUpsertWithoutCamerasInput = {
    update: XOR<classesUpdateWithoutCamerasInput, classesUncheckedUpdateWithoutCamerasInput>
    create: XOR<classesCreateWithoutCamerasInput, classesUncheckedCreateWithoutCamerasInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutCamerasInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutCamerasInput, classesUncheckedUpdateWithoutCamerasInput>
  }

  export type classesUpdateWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUpdateManyWithoutClassesNestedInput
    schools?: schoolsUpdateOneRequiredWithoutClassesNestedInput
    users?: usersUpdateOneRequiredWithoutClassesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutClassesNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type schoolsUpsertWithoutCamerasInput = {
    update: XOR<schoolsUpdateWithoutCamerasInput, schoolsUncheckedUpdateWithoutCamerasInput>
    create: XOR<schoolsCreateWithoutCamerasInput, schoolsUncheckedCreateWithoutCamerasInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutCamerasInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutCamerasInput, schoolsUncheckedUpdateWithoutCamerasInput>
  }

  export type schoolsUpdateWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateManyWithoutSchoolsNestedInput
    students?: studentsUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUncheckedUpdateManyWithoutSchoolsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type attendance_recordsCreateWithoutClassesInput = {
    id?: string
    date: Date | string
    status: string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutAttendance_recordsInput
    students: studentsCreateNestedOneWithoutAttendance_recordsInput
  }

  export type attendance_recordsUncheckedCreateWithoutClassesInput = {
    id?: string
    student_id: string
    date: Date | string
    status: string
    marked_by: string
    created_at?: Date | string | null
  }

  export type attendance_recordsCreateOrConnectWithoutClassesInput = {
    where: attendance_recordsWhereUniqueInput
    create: XOR<attendance_recordsCreateWithoutClassesInput, attendance_recordsUncheckedCreateWithoutClassesInput>
  }

  export type attendance_recordsCreateManyClassesInputEnvelope = {
    data: attendance_recordsCreateManyClassesInput | attendance_recordsCreateManyClassesInput[]
    skipDuplicates?: boolean
  }

  export type camera_capturesCreateWithoutClassesInput = {
    id?: string
    image_path: string
    captured_at: Date | string
    created_at?: Date | string | null
    cameras: camerasCreateNestedOneWithoutCamera_capturesInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutCamera_capturesInput
  }

  export type camera_capturesUncheckedCreateWithoutClassesInput = {
    id?: string
    camera_id: string
    image_path: string
    captured_at: Date | string
    created_at?: Date | string | null
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutCamera_capturesInput
  }

  export type camera_capturesCreateOrConnectWithoutClassesInput = {
    where: camera_capturesWhereUniqueInput
    create: XOR<camera_capturesCreateWithoutClassesInput, camera_capturesUncheckedCreateWithoutClassesInput>
  }

  export type camera_capturesCreateManyClassesInputEnvelope = {
    data: camera_capturesCreateManyClassesInput | camera_capturesCreateManyClassesInput[]
    skipDuplicates?: boolean
  }

  export type camerasCreateWithoutClassesInput = {
    device_id: string
    location: string
    status?: string
    created_at?: Date | string | null
    id: string
    camera_captures?: camera_capturesCreateNestedManyWithoutCamerasInput
    schools?: schoolsCreateNestedOneWithoutCamerasInput
  }

  export type camerasUncheckedCreateWithoutClassesInput = {
    device_id: string
    location: string
    status?: string
    school_id?: string | null
    created_at?: Date | string | null
    id: string
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutCamerasInput
  }

  export type camerasCreateOrConnectWithoutClassesInput = {
    where: camerasWhereUniqueInput
    create: XOR<camerasCreateWithoutClassesInput, camerasUncheckedCreateWithoutClassesInput>
  }

  export type camerasCreateManyClassesInputEnvelope = {
    data: camerasCreateManyClassesInput | camerasCreateManyClassesInput[]
    skipDuplicates?: boolean
  }

  export type schoolsCreateWithoutClassesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cameras?: camerasCreateNestedManyWithoutSchoolsInput
    students?: studentsCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cameras?: camerasUncheckedCreateNestedManyWithoutSchoolsInput
    students?: studentsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsCreateOrConnectWithoutClassesInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutClassesInput, schoolsUncheckedCreateWithoutClassesInput>
  }

  export type usersCreateWithoutClassesInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutClassesInput = {
    id?: string
    email: string
    password_hash: string
    full_name: string
    role: string
    school_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutClassesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClassesInput, usersUncheckedCreateWithoutClassesInput>
  }

  export type enrollmentsCreateWithoutClassesInput = {
    enrolled_at?: Date | string | null
    students: studentsCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateWithoutClassesInput = {
    student_id: string
    enrolled_at?: Date | string | null
  }

  export type enrollmentsCreateOrConnectWithoutClassesInput = {
    where: enrollmentsWhereUniqueInput
    create: XOR<enrollmentsCreateWithoutClassesInput, enrollmentsUncheckedCreateWithoutClassesInput>
  }

  export type enrollmentsCreateManyClassesInputEnvelope = {
    data: enrollmentsCreateManyClassesInput | enrollmentsCreateManyClassesInput[]
    skipDuplicates?: boolean
  }

  export type attendance_recordsUpsertWithWhereUniqueWithoutClassesInput = {
    where: attendance_recordsWhereUniqueInput
    update: XOR<attendance_recordsUpdateWithoutClassesInput, attendance_recordsUncheckedUpdateWithoutClassesInput>
    create: XOR<attendance_recordsCreateWithoutClassesInput, attendance_recordsUncheckedCreateWithoutClassesInput>
  }

  export type attendance_recordsUpdateWithWhereUniqueWithoutClassesInput = {
    where: attendance_recordsWhereUniqueInput
    data: XOR<attendance_recordsUpdateWithoutClassesInput, attendance_recordsUncheckedUpdateWithoutClassesInput>
  }

  export type attendance_recordsUpdateManyWithWhereWithoutClassesInput = {
    where: attendance_recordsScalarWhereInput
    data: XOR<attendance_recordsUpdateManyMutationInput, attendance_recordsUncheckedUpdateManyWithoutClassesInput>
  }

  export type attendance_recordsScalarWhereInput = {
    AND?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
    OR?: attendance_recordsScalarWhereInput[]
    NOT?: attendance_recordsScalarWhereInput | attendance_recordsScalarWhereInput[]
    id?: UuidFilter<"attendance_records"> | string
    student_id?: UuidFilter<"attendance_records"> | string
    class_id?: UuidFilter<"attendance_records"> | string
    date?: DateTimeFilter<"attendance_records"> | Date | string
    status?: StringFilter<"attendance_records"> | string
    marked_by?: UuidFilter<"attendance_records"> | string
    created_at?: DateTimeNullableFilter<"attendance_records"> | Date | string | null
  }

  export type camera_capturesUpsertWithWhereUniqueWithoutClassesInput = {
    where: camera_capturesWhereUniqueInput
    update: XOR<camera_capturesUpdateWithoutClassesInput, camera_capturesUncheckedUpdateWithoutClassesInput>
    create: XOR<camera_capturesCreateWithoutClassesInput, camera_capturesUncheckedCreateWithoutClassesInput>
  }

  export type camera_capturesUpdateWithWhereUniqueWithoutClassesInput = {
    where: camera_capturesWhereUniqueInput
    data: XOR<camera_capturesUpdateWithoutClassesInput, camera_capturesUncheckedUpdateWithoutClassesInput>
  }

  export type camera_capturesUpdateManyWithWhereWithoutClassesInput = {
    where: camera_capturesScalarWhereInput
    data: XOR<camera_capturesUpdateManyMutationInput, camera_capturesUncheckedUpdateManyWithoutClassesInput>
  }

  export type camerasUpsertWithWhereUniqueWithoutClassesInput = {
    where: camerasWhereUniqueInput
    update: XOR<camerasUpdateWithoutClassesInput, camerasUncheckedUpdateWithoutClassesInput>
    create: XOR<camerasCreateWithoutClassesInput, camerasUncheckedCreateWithoutClassesInput>
  }

  export type camerasUpdateWithWhereUniqueWithoutClassesInput = {
    where: camerasWhereUniqueInput
    data: XOR<camerasUpdateWithoutClassesInput, camerasUncheckedUpdateWithoutClassesInput>
  }

  export type camerasUpdateManyWithWhereWithoutClassesInput = {
    where: camerasScalarWhereInput
    data: XOR<camerasUpdateManyMutationInput, camerasUncheckedUpdateManyWithoutClassesInput>
  }

  export type camerasScalarWhereInput = {
    AND?: camerasScalarWhereInput | camerasScalarWhereInput[]
    OR?: camerasScalarWhereInput[]
    NOT?: camerasScalarWhereInput | camerasScalarWhereInput[]
    device_id?: StringFilter<"cameras"> | string
    location?: StringFilter<"cameras"> | string
    status?: StringFilter<"cameras"> | string
    school_id?: UuidNullableFilter<"cameras"> | string | null
    class_id?: UuidNullableFilter<"cameras"> | string | null
    created_at?: DateTimeNullableFilter<"cameras"> | Date | string | null
    id?: UuidFilter<"cameras"> | string
  }

  export type schoolsUpsertWithoutClassesInput = {
    update: XOR<schoolsUpdateWithoutClassesInput, schoolsUncheckedUpdateWithoutClassesInput>
    create: XOR<schoolsCreateWithoutClassesInput, schoolsUncheckedCreateWithoutClassesInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutClassesInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutClassesInput, schoolsUncheckedUpdateWithoutClassesInput>
  }

  export type schoolsUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUpdateManyWithoutSchoolsNestedInput
    students?: studentsUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUncheckedUpdateManyWithoutSchoolsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type usersUpsertWithoutClassesInput = {
    update: XOR<usersUpdateWithoutClassesInput, usersUncheckedUpdateWithoutClassesInput>
    create: XOR<usersCreateWithoutClassesInput, usersUncheckedCreateWithoutClassesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClassesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClassesInput, usersUncheckedUpdateWithoutClassesInput>
  }

  export type usersUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type enrollmentsUpsertWithWhereUniqueWithoutClassesInput = {
    where: enrollmentsWhereUniqueInput
    update: XOR<enrollmentsUpdateWithoutClassesInput, enrollmentsUncheckedUpdateWithoutClassesInput>
    create: XOR<enrollmentsCreateWithoutClassesInput, enrollmentsUncheckedCreateWithoutClassesInput>
  }

  export type enrollmentsUpdateWithWhereUniqueWithoutClassesInput = {
    where: enrollmentsWhereUniqueInput
    data: XOR<enrollmentsUpdateWithoutClassesInput, enrollmentsUncheckedUpdateWithoutClassesInput>
  }

  export type enrollmentsUpdateManyWithWhereWithoutClassesInput = {
    where: enrollmentsScalarWhereInput
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyWithoutClassesInput>
  }

  export type enrollmentsScalarWhereInput = {
    AND?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
    OR?: enrollmentsScalarWhereInput[]
    NOT?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
    student_id?: UuidFilter<"enrollments"> | string
    class_id?: UuidFilter<"enrollments"> | string
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
  }

  export type classesCreateWithoutEnrollmentsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesCreateNestedManyWithoutClassesInput
    cameras?: camerasCreateNestedManyWithoutClassesInput
    schools: schoolsCreateNestedOneWithoutClassesInput
    users: usersCreateNestedOneWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    name: string
    teacher_id: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutClassesInput
    cameras?: camerasUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutEnrollmentsInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutEnrollmentsInput, classesUncheckedCreateWithoutEnrollmentsInput>
  }

  export type studentsCreateWithoutEnrollmentsInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesCreateNestedManyWithoutStudentsInput
    schools: schoolsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    full_name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutEnrollmentsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutEnrollmentsInput, studentsUncheckedCreateWithoutEnrollmentsInput>
  }

  export type classesUpsertWithoutEnrollmentsInput = {
    update: XOR<classesUpdateWithoutEnrollmentsInput, classesUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<classesCreateWithoutEnrollmentsInput, classesUncheckedCreateWithoutEnrollmentsInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutEnrollmentsInput, classesUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type classesUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUpdateManyWithoutClassesNestedInput
    cameras?: camerasUpdateManyWithoutClassesNestedInput
    schools?: schoolsUpdateOneRequiredWithoutClassesNestedInput
    users?: usersUpdateOneRequiredWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutClassesNestedInput
    cameras?: camerasUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type studentsUpsertWithoutEnrollmentsInput = {
    update: XOR<studentsUpdateWithoutEnrollmentsInput, studentsUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<studentsCreateWithoutEnrollmentsInput, studentsUncheckedCreateWithoutEnrollmentsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutEnrollmentsInput, studentsUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type studentsUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUpdateManyWithoutStudentsNestedInput
    schools?: schoolsUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type camera_capturesCreateWithoutRecognized_facesInput = {
    id?: string
    image_path: string
    captured_at: Date | string
    created_at?: Date | string | null
    cameras: camerasCreateNestedOneWithoutCamera_capturesInput
    classes?: classesCreateNestedOneWithoutCamera_capturesInput
  }

  export type camera_capturesUncheckedCreateWithoutRecognized_facesInput = {
    id?: string
    camera_id: string
    image_path: string
    captured_at: Date | string
    class_id?: string | null
    created_at?: Date | string | null
  }

  export type camera_capturesCreateOrConnectWithoutRecognized_facesInput = {
    where: camera_capturesWhereUniqueInput
    create: XOR<camera_capturesCreateWithoutRecognized_facesInput, camera_capturesUncheckedCreateWithoutRecognized_facesInput>
  }

  export type studentsCreateWithoutRecognized_facesInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesCreateNestedManyWithoutStudentsInput
    schools: schoolsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutRecognized_facesInput = {
    id?: string
    full_name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutRecognized_facesInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutRecognized_facesInput, studentsUncheckedCreateWithoutRecognized_facesInput>
  }

  export type camera_capturesUpsertWithoutRecognized_facesInput = {
    update: XOR<camera_capturesUpdateWithoutRecognized_facesInput, camera_capturesUncheckedUpdateWithoutRecognized_facesInput>
    create: XOR<camera_capturesCreateWithoutRecognized_facesInput, camera_capturesUncheckedCreateWithoutRecognized_facesInput>
    where?: camera_capturesWhereInput
  }

  export type camera_capturesUpdateToOneWithWhereWithoutRecognized_facesInput = {
    where?: camera_capturesWhereInput
    data: XOR<camera_capturesUpdateWithoutRecognized_facesInput, camera_capturesUncheckedUpdateWithoutRecognized_facesInput>
  }

  export type camera_capturesUpdateWithoutRecognized_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUpdateOneRequiredWithoutCamera_capturesNestedInput
    classes?: classesUpdateOneWithoutCamera_capturesNestedInput
  }

  export type camera_capturesUncheckedUpdateWithoutRecognized_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentsUpsertWithoutRecognized_facesInput = {
    update: XOR<studentsUpdateWithoutRecognized_facesInput, studentsUncheckedUpdateWithoutRecognized_facesInput>
    create: XOR<studentsCreateWithoutRecognized_facesInput, studentsUncheckedCreateWithoutRecognized_facesInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutRecognized_facesInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutRecognized_facesInput, studentsUncheckedUpdateWithoutRecognized_facesInput>
  }

  export type studentsUpdateWithoutRecognized_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUpdateManyWithoutStudentsNestedInput
    schools?: schoolsUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutRecognized_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type camerasCreateWithoutSchoolsInput = {
    device_id: string
    location: string
    status?: string
    created_at?: Date | string | null
    id: string
    camera_captures?: camera_capturesCreateNestedManyWithoutCamerasInput
    classes?: classesCreateNestedOneWithoutCamerasInput
  }

  export type camerasUncheckedCreateWithoutSchoolsInput = {
    device_id: string
    location: string
    status?: string
    class_id?: string | null
    created_at?: Date | string | null
    id: string
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutCamerasInput
  }

  export type camerasCreateOrConnectWithoutSchoolsInput = {
    where: camerasWhereUniqueInput
    create: XOR<camerasCreateWithoutSchoolsInput, camerasUncheckedCreateWithoutSchoolsInput>
  }

  export type camerasCreateManySchoolsInputEnvelope = {
    data: camerasCreateManySchoolsInput | camerasCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type classesCreateWithoutSchoolsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesCreateNestedManyWithoutClassesInput
    cameras?: camerasCreateNestedManyWithoutClassesInput
    users: usersCreateNestedOneWithoutClassesInput
    enrollments?: enrollmentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutSchoolsInput = {
    id?: string
    name: string
    teacher_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutClassesInput
    cameras?: camerasUncheckedCreateNestedManyWithoutClassesInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutSchoolsInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutSchoolsInput, classesUncheckedCreateWithoutSchoolsInput>
  }

  export type classesCreateManySchoolsInputEnvelope = {
    data: classesCreateManySchoolsInput | classesCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type studentsCreateWithoutSchoolsInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutSchoolsInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutStudentsInput
    student_images?: student_imagesUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutSchoolsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutSchoolsInput, studentsUncheckedCreateWithoutSchoolsInput>
  }

  export type studentsCreateManySchoolsInputEnvelope = {
    data: studentsCreateManySchoolsInput | studentsCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type camerasUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: camerasWhereUniqueInput
    update: XOR<camerasUpdateWithoutSchoolsInput, camerasUncheckedUpdateWithoutSchoolsInput>
    create: XOR<camerasCreateWithoutSchoolsInput, camerasUncheckedCreateWithoutSchoolsInput>
  }

  export type camerasUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: camerasWhereUniqueInput
    data: XOR<camerasUpdateWithoutSchoolsInput, camerasUncheckedUpdateWithoutSchoolsInput>
  }

  export type camerasUpdateManyWithWhereWithoutSchoolsInput = {
    where: camerasScalarWhereInput
    data: XOR<camerasUpdateManyMutationInput, camerasUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type classesUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: classesWhereUniqueInput
    update: XOR<classesUpdateWithoutSchoolsInput, classesUncheckedUpdateWithoutSchoolsInput>
    create: XOR<classesCreateWithoutSchoolsInput, classesUncheckedCreateWithoutSchoolsInput>
  }

  export type classesUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: classesWhereUniqueInput
    data: XOR<classesUpdateWithoutSchoolsInput, classesUncheckedUpdateWithoutSchoolsInput>
  }

  export type classesUpdateManyWithWhereWithoutSchoolsInput = {
    where: classesScalarWhereInput
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type classesScalarWhereInput = {
    AND?: classesScalarWhereInput | classesScalarWhereInput[]
    OR?: classesScalarWhereInput[]
    NOT?: classesScalarWhereInput | classesScalarWhereInput[]
    id?: UuidFilter<"classes"> | string
    name?: StringFilter<"classes"> | string
    teacher_id?: UuidFilter<"classes"> | string
    school_id?: UuidFilter<"classes"> | string
    created_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"classes"> | Date | string | null
  }

  export type studentsUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutSchoolsInput, studentsUncheckedUpdateWithoutSchoolsInput>
    create: XOR<studentsCreateWithoutSchoolsInput, studentsUncheckedCreateWithoutSchoolsInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutSchoolsInput, studentsUncheckedUpdateWithoutSchoolsInput>
  }

  export type studentsUpdateManyWithWhereWithoutSchoolsInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type studentsScalarWhereInput = {
    AND?: studentsScalarWhereInput | studentsScalarWhereInput[]
    OR?: studentsScalarWhereInput[]
    NOT?: studentsScalarWhereInput | studentsScalarWhereInput[]
    id?: UuidFilter<"students"> | string
    full_name?: StringFilter<"students"> | string
    school_id?: UuidFilter<"students"> | string
    created_at?: DateTimeNullableFilter<"students"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"students"> | Date | string | null
  }

  export type studentsCreateWithoutStudent_imagesInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesCreateNestedManyWithoutStudentsInput
    schools: schoolsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutStudent_imagesInput = {
    id?: string
    full_name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutStudentsInput
    recognized_faces?: recognized_facesUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutStudent_imagesInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutStudent_imagesInput, studentsUncheckedCreateWithoutStudent_imagesInput>
  }

  export type studentsUpsertWithoutStudent_imagesInput = {
    update: XOR<studentsUpdateWithoutStudent_imagesInput, studentsUncheckedUpdateWithoutStudent_imagesInput>
    create: XOR<studentsCreateWithoutStudent_imagesInput, studentsUncheckedCreateWithoutStudent_imagesInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutStudent_imagesInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutStudent_imagesInput, studentsUncheckedUpdateWithoutStudent_imagesInput>
  }

  export type studentsUpdateWithoutStudent_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutStudentsNestedInput
    schools?: schoolsUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutStudent_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type attendance_recordsCreateWithoutStudentsInput = {
    id?: string
    date: Date | string
    status: string
    created_at?: Date | string | null
    classes: classesCreateNestedOneWithoutAttendance_recordsInput
    users: usersCreateNestedOneWithoutAttendance_recordsInput
  }

  export type attendance_recordsUncheckedCreateWithoutStudentsInput = {
    id?: string
    class_id: string
    date: Date | string
    status: string
    marked_by: string
    created_at?: Date | string | null
  }

  export type attendance_recordsCreateOrConnectWithoutStudentsInput = {
    where: attendance_recordsWhereUniqueInput
    create: XOR<attendance_recordsCreateWithoutStudentsInput, attendance_recordsUncheckedCreateWithoutStudentsInput>
  }

  export type attendance_recordsCreateManyStudentsInputEnvelope = {
    data: attendance_recordsCreateManyStudentsInput | attendance_recordsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentsCreateWithoutStudentsInput = {
    enrolled_at?: Date | string | null
    classes: classesCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateWithoutStudentsInput = {
    class_id: string
    enrolled_at?: Date | string | null
  }

  export type enrollmentsCreateOrConnectWithoutStudentsInput = {
    where: enrollmentsWhereUniqueInput
    create: XOR<enrollmentsCreateWithoutStudentsInput, enrollmentsUncheckedCreateWithoutStudentsInput>
  }

  export type enrollmentsCreateManyStudentsInputEnvelope = {
    data: enrollmentsCreateManyStudentsInput | enrollmentsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type recognized_facesCreateWithoutStudentsInput = {
    id?: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    camera_captures: camera_capturesCreateNestedOneWithoutRecognized_facesInput
  }

  export type recognized_facesUncheckedCreateWithoutStudentsInput = {
    id?: string
    capture_id: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recognized_facesCreateOrConnectWithoutStudentsInput = {
    where: recognized_facesWhereUniqueInput
    create: XOR<recognized_facesCreateWithoutStudentsInput, recognized_facesUncheckedCreateWithoutStudentsInput>
  }

  export type recognized_facesCreateManyStudentsInputEnvelope = {
    data: recognized_facesCreateManyStudentsInput | recognized_facesCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type student_imagesCreateWithoutStudentsInput = {
    id?: string
    image_path: string
    uploaded_at?: Date | string | null
    is_active?: boolean | null
  }

  export type student_imagesUncheckedCreateWithoutStudentsInput = {
    id?: string
    image_path: string
    uploaded_at?: Date | string | null
    is_active?: boolean | null
  }

  export type student_imagesCreateOrConnectWithoutStudentsInput = {
    where: student_imagesWhereUniqueInput
    create: XOR<student_imagesCreateWithoutStudentsInput, student_imagesUncheckedCreateWithoutStudentsInput>
  }

  export type student_imagesCreateManyStudentsInputEnvelope = {
    data: student_imagesCreateManyStudentsInput | student_imagesCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type schoolsCreateWithoutStudentsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cameras?: camerasCreateNestedManyWithoutSchoolsInput
    classes?: classesCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cameras?: camerasUncheckedCreateNestedManyWithoutSchoolsInput
    classes?: classesUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsCreateOrConnectWithoutStudentsInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutStudentsInput, schoolsUncheckedCreateWithoutStudentsInput>
  }

  export type attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: attendance_recordsWhereUniqueInput
    update: XOR<attendance_recordsUpdateWithoutStudentsInput, attendance_recordsUncheckedUpdateWithoutStudentsInput>
    create: XOR<attendance_recordsCreateWithoutStudentsInput, attendance_recordsUncheckedCreateWithoutStudentsInput>
  }

  export type attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: attendance_recordsWhereUniqueInput
    data: XOR<attendance_recordsUpdateWithoutStudentsInput, attendance_recordsUncheckedUpdateWithoutStudentsInput>
  }

  export type attendance_recordsUpdateManyWithWhereWithoutStudentsInput = {
    where: attendance_recordsScalarWhereInput
    data: XOR<attendance_recordsUpdateManyMutationInput, attendance_recordsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type enrollmentsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: enrollmentsWhereUniqueInput
    update: XOR<enrollmentsUpdateWithoutStudentsInput, enrollmentsUncheckedUpdateWithoutStudentsInput>
    create: XOR<enrollmentsCreateWithoutStudentsInput, enrollmentsUncheckedCreateWithoutStudentsInput>
  }

  export type enrollmentsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: enrollmentsWhereUniqueInput
    data: XOR<enrollmentsUpdateWithoutStudentsInput, enrollmentsUncheckedUpdateWithoutStudentsInput>
  }

  export type enrollmentsUpdateManyWithWhereWithoutStudentsInput = {
    where: enrollmentsScalarWhereInput
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type recognized_facesUpsertWithWhereUniqueWithoutStudentsInput = {
    where: recognized_facesWhereUniqueInput
    update: XOR<recognized_facesUpdateWithoutStudentsInput, recognized_facesUncheckedUpdateWithoutStudentsInput>
    create: XOR<recognized_facesCreateWithoutStudentsInput, recognized_facesUncheckedCreateWithoutStudentsInput>
  }

  export type recognized_facesUpdateWithWhereUniqueWithoutStudentsInput = {
    where: recognized_facesWhereUniqueInput
    data: XOR<recognized_facesUpdateWithoutStudentsInput, recognized_facesUncheckedUpdateWithoutStudentsInput>
  }

  export type recognized_facesUpdateManyWithWhereWithoutStudentsInput = {
    where: recognized_facesScalarWhereInput
    data: XOR<recognized_facesUpdateManyMutationInput, recognized_facesUncheckedUpdateManyWithoutStudentsInput>
  }

  export type student_imagesUpsertWithWhereUniqueWithoutStudentsInput = {
    where: student_imagesWhereUniqueInput
    update: XOR<student_imagesUpdateWithoutStudentsInput, student_imagesUncheckedUpdateWithoutStudentsInput>
    create: XOR<student_imagesCreateWithoutStudentsInput, student_imagesUncheckedCreateWithoutStudentsInput>
  }

  export type student_imagesUpdateWithWhereUniqueWithoutStudentsInput = {
    where: student_imagesWhereUniqueInput
    data: XOR<student_imagesUpdateWithoutStudentsInput, student_imagesUncheckedUpdateWithoutStudentsInput>
  }

  export type student_imagesUpdateManyWithWhereWithoutStudentsInput = {
    where: student_imagesScalarWhereInput
    data: XOR<student_imagesUpdateManyMutationInput, student_imagesUncheckedUpdateManyWithoutStudentsInput>
  }

  export type student_imagesScalarWhereInput = {
    AND?: student_imagesScalarWhereInput | student_imagesScalarWhereInput[]
    OR?: student_imagesScalarWhereInput[]
    NOT?: student_imagesScalarWhereInput | student_imagesScalarWhereInput[]
    id?: UuidFilter<"student_images"> | string
    student_id?: UuidFilter<"student_images"> | string
    image_path?: StringFilter<"student_images"> | string
    uploaded_at?: DateTimeNullableFilter<"student_images"> | Date | string | null
    is_active?: BoolNullableFilter<"student_images"> | boolean | null
  }

  export type schoolsUpsertWithoutStudentsInput = {
    update: XOR<schoolsUpdateWithoutStudentsInput, schoolsUncheckedUpdateWithoutStudentsInput>
    create: XOR<schoolsCreateWithoutStudentsInput, schoolsUncheckedCreateWithoutStudentsInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutStudentsInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutStudentsInput, schoolsUncheckedUpdateWithoutStudentsInput>
  }

  export type schoolsUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUpdateManyWithoutSchoolsNestedInput
    classes?: classesUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUncheckedUpdateManyWithoutSchoolsNestedInput
    classes?: classesUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type attendance_recordsCreateWithoutUsersInput = {
    id?: string
    date: Date | string
    status: string
    created_at?: Date | string | null
    classes: classesCreateNestedOneWithoutAttendance_recordsInput
    students: studentsCreateNestedOneWithoutAttendance_recordsInput
  }

  export type attendance_recordsUncheckedCreateWithoutUsersInput = {
    id?: string
    student_id: string
    class_id: string
    date: Date | string
    status: string
    created_at?: Date | string | null
  }

  export type attendance_recordsCreateOrConnectWithoutUsersInput = {
    where: attendance_recordsWhereUniqueInput
    create: XOR<attendance_recordsCreateWithoutUsersInput, attendance_recordsUncheckedCreateWithoutUsersInput>
  }

  export type attendance_recordsCreateManyUsersInputEnvelope = {
    data: attendance_recordsCreateManyUsersInput | attendance_recordsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type classesCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesCreateNestedManyWithoutClassesInput
    cameras?: camerasCreateNestedManyWithoutClassesInput
    schools: schoolsCreateNestedOneWithoutClassesInput
    enrollments?: enrollmentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attendance_records?: attendance_recordsUncheckedCreateNestedManyWithoutClassesInput
    camera_captures?: camera_capturesUncheckedCreateNestedManyWithoutClassesInput
    cameras?: camerasUncheckedCreateNestedManyWithoutClassesInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutUsersInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutUsersInput, classesUncheckedCreateWithoutUsersInput>
  }

  export type classesCreateManyUsersInputEnvelope = {
    data: classesCreateManyUsersInput | classesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type attendance_recordsUpsertWithWhereUniqueWithoutUsersInput = {
    where: attendance_recordsWhereUniqueInput
    update: XOR<attendance_recordsUpdateWithoutUsersInput, attendance_recordsUncheckedUpdateWithoutUsersInput>
    create: XOR<attendance_recordsCreateWithoutUsersInput, attendance_recordsUncheckedCreateWithoutUsersInput>
  }

  export type attendance_recordsUpdateWithWhereUniqueWithoutUsersInput = {
    where: attendance_recordsWhereUniqueInput
    data: XOR<attendance_recordsUpdateWithoutUsersInput, attendance_recordsUncheckedUpdateWithoutUsersInput>
  }

  export type attendance_recordsUpdateManyWithWhereWithoutUsersInput = {
    where: attendance_recordsScalarWhereInput
    data: XOR<attendance_recordsUpdateManyMutationInput, attendance_recordsUncheckedUpdateManyWithoutUsersInput>
  }

  export type classesUpsertWithWhereUniqueWithoutUsersInput = {
    where: classesWhereUniqueInput
    update: XOR<classesUpdateWithoutUsersInput, classesUncheckedUpdateWithoutUsersInput>
    create: XOR<classesCreateWithoutUsersInput, classesUncheckedCreateWithoutUsersInput>
  }

  export type classesUpdateWithWhereUniqueWithoutUsersInput = {
    where: classesWhereUniqueInput
    data: XOR<classesUpdateWithoutUsersInput, classesUncheckedUpdateWithoutUsersInput>
  }

  export type classesUpdateManyWithWhereWithoutUsersInput = {
    where: classesScalarWhereInput
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyWithoutUsersInput>
  }

  export type recognized_facesCreateManyCamera_capturesInput = {
    id?: string
    student_id: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type recognized_facesUpdateWithoutCamera_capturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: studentsUpdateOneRequiredWithoutRecognized_facesNestedInput
  }

  export type recognized_facesUncheckedUpdateWithoutCamera_capturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recognized_facesUncheckedUpdateManyWithoutCamera_capturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_capturesCreateManyCamerasInput = {
    id?: string
    image_path: string
    captured_at: Date | string
    class_id?: string | null
    created_at?: Date | string | null
  }

  export type camera_capturesUpdateWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneWithoutCamera_capturesNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutCamera_capturesNestedInput
  }

  export type camera_capturesUncheckedUpdateWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutCamera_capturesNestedInput
  }

  export type camera_capturesUncheckedUpdateManyWithoutCamerasInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsCreateManyClassesInput = {
    id?: string
    student_id: string
    date: Date | string
    status: string
    marked_by: string
    created_at?: Date | string | null
  }

  export type camera_capturesCreateManyClassesInput = {
    id?: string
    camera_id: string
    image_path: string
    captured_at: Date | string
    created_at?: Date | string | null
  }

  export type camerasCreateManyClassesInput = {
    device_id: string
    location: string
    status?: string
    school_id?: string | null
    created_at?: Date | string | null
    id: string
  }

  export type enrollmentsCreateManyClassesInput = {
    student_id: string
    enrolled_at?: Date | string | null
  }

  export type attendance_recordsUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutAttendance_recordsNestedInput
    students?: studentsUpdateOneRequiredWithoutAttendance_recordsNestedInput
  }

  export type attendance_recordsUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    marked_by?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsUncheckedUpdateManyWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    marked_by?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_capturesUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cameras?: camerasUpdateOneRequiredWithoutCamera_capturesNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutCamera_capturesNestedInput
  }

  export type camera_capturesUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutCamera_capturesNestedInput
  }

  export type camera_capturesUncheckedUpdateManyWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    captured_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camerasUpdateWithoutClassesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    camera_captures?: camera_capturesUpdateManyWithoutCamerasNestedInput
    schools?: schoolsUpdateOneWithoutCamerasNestedInput
  }

  export type camerasUncheckedUpdateWithoutClassesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutCamerasNestedInput
  }

  export type camerasUncheckedUpdateManyWithoutClassesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    school_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentsUpdateWithoutClassesInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: studentsUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateWithoutClassesInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsUncheckedUpdateManyWithoutClassesInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camerasCreateManySchoolsInput = {
    device_id: string
    location: string
    status?: string
    class_id?: string | null
    created_at?: Date | string | null
    id: string
  }

  export type classesCreateManySchoolsInput = {
    id?: string
    name: string
    teacher_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type studentsCreateManySchoolsInput = {
    id?: string
    full_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type camerasUpdateWithoutSchoolsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    camera_captures?: camera_capturesUpdateManyWithoutCamerasNestedInput
    classes?: classesUpdateOneWithoutCamerasNestedInput
  }

  export type camerasUncheckedUpdateWithoutSchoolsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutCamerasNestedInput
  }

  export type camerasUncheckedUpdateManyWithoutSchoolsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type classesUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUpdateManyWithoutClassesNestedInput
    cameras?: camerasUpdateManyWithoutClassesNestedInput
    users?: usersUpdateOneRequiredWithoutClassesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutClassesNestedInput
    cameras?: camerasUncheckedUpdateManyWithoutClassesNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateManyWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentsUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutStudentsNestedInput
    recognized_faces?: recognized_facesUncheckedUpdateManyWithoutStudentsNestedInput
    student_images?: student_imagesUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateManyWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsCreateManyStudentsInput = {
    id?: string
    class_id: string
    date: Date | string
    status: string
    marked_by: string
    created_at?: Date | string | null
  }

  export type enrollmentsCreateManyStudentsInput = {
    class_id: string
    enrolled_at?: Date | string | null
  }

  export type recognized_facesCreateManyStudentsInput = {
    id?: string
    capture_id: string
    confidence_score: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type student_imagesCreateManyStudentsInput = {
    id?: string
    image_path: string
    uploaded_at?: Date | string | null
    is_active?: boolean | null
  }

  export type attendance_recordsUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutAttendance_recordsNestedInput
    users?: usersUpdateOneRequiredWithoutAttendance_recordsNestedInput
  }

  export type attendance_recordsUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    marked_by?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    marked_by?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsUpdateWithoutStudentsInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateWithoutStudentsInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsUncheckedUpdateManyWithoutStudentsInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recognized_facesUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    camera_captures?: camera_capturesUpdateOneRequiredWithoutRecognized_facesNestedInput
  }

  export type recognized_facesUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    capture_id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recognized_facesUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    capture_id?: StringFieldUpdateOperationsInput | string
    confidence_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_imagesUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type student_imagesUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type student_imagesUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type attendance_recordsCreateManyUsersInput = {
    id?: string
    student_id: string
    class_id: string
    date: Date | string
    status: string
    created_at?: Date | string | null
  }

  export type classesCreateManyUsersInput = {
    id?: string
    name: string
    school_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type attendance_recordsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutAttendance_recordsNestedInput
    students?: studentsUpdateOneRequiredWithoutAttendance_recordsNestedInput
  }

  export type attendance_recordsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendance_recordsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUpdateManyWithoutClassesNestedInput
    cameras?: camerasUpdateManyWithoutClassesNestedInput
    schools?: schoolsUpdateOneRequiredWithoutClassesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance_records?: attendance_recordsUncheckedUpdateManyWithoutClassesNestedInput
    camera_captures?: camera_capturesUncheckedUpdateManyWithoutClassesNestedInput
    cameras?: camerasUncheckedUpdateManyWithoutClassesNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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