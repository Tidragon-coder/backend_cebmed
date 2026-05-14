
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model Treatment
 * 
 */
export type Treatment = $Result.DefaultSelection<Prisma.$TreatmentPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model UserCaregiver
 * 
 */
export type UserCaregiver = $Result.DefaultSelection<Prisma.$UserCaregiverPayload>
/**
 * Model Intake
 * 
 */
export type Intake = $Result.DefaultSelection<Prisma.$IntakePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Newsletter
 * 
 */
export type Newsletter = $Result.DefaultSelection<Prisma.$NewsletterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TreatmentStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  PAUSED: 'PAUSED',
  CANCELLED: 'CANCELLED'
};

export type TreatmentStatus = (typeof TreatmentStatus)[keyof typeof TreatmentStatus]


export const CaregiverStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type CaregiverStatus = (typeof CaregiverStatus)[keyof typeof CaregiverStatus]


export const IntakeStatus: {
  PENDING: 'PENDING',
  TAKEN: 'TAKEN',
  MISSED: 'MISSED'
};

export type IntakeStatus = (typeof IntakeStatus)[keyof typeof IntakeStatus]

}

export type TreatmentStatus = $Enums.TreatmentStatus

export const TreatmentStatus: typeof $Enums.TreatmentStatus

export type CaregiverStatus = $Enums.CaregiverStatus

export const CaregiverStatus: typeof $Enums.CaregiverStatus

export type IntakeStatus = $Enums.IntakeStatus

export const IntakeStatus: typeof $Enums.IntakeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatment`: Exposes CRUD operations for the **Treatment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treatments
    * const treatments = await prisma.treatment.findMany()
    * ```
    */
  get treatment(): Prisma.TreatmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCaregiver`: Exposes CRUD operations for the **UserCaregiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCaregivers
    * const userCaregivers = await prisma.userCaregiver.findMany()
    * ```
    */
  get userCaregiver(): Prisma.UserCaregiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intake`: Exposes CRUD operations for the **Intake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intakes
    * const intakes = await prisma.intake.findMany()
    * ```
    */
  get intake(): Prisma.IntakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletter`: Exposes CRUD operations for the **Newsletter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newsletters
    * const newsletters = await prisma.newsletter.findMany()
    * ```
    */
  get newsletter(): Prisma.NewsletterDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Medication: 'Medication',
    Treatment: 'Treatment',
    Stock: 'Stock',
    UserCaregiver: 'UserCaregiver',
    Intake: 'Intake',
    Document: 'Document',
    Appointment: 'Appointment',
    Newsletter: 'Newsletter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "medication" | "treatment" | "stock" | "userCaregiver" | "intake" | "document" | "appointment" | "newsletter"
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
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      Treatment: {
        payload: Prisma.$TreatmentPayload<ExtArgs>
        fields: Prisma.TreatmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findFirst: {
            args: Prisma.TreatmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findMany: {
            args: Prisma.TreatmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          create: {
            args: Prisma.TreatmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          createMany: {
            args: Prisma.TreatmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreatmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          delete: {
            args: Prisma.TreatmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          update: {
            args: Prisma.TreatmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreatmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          upsert: {
            args: Prisma.TreatmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          aggregate: {
            args: Prisma.TreatmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatment>
          }
          groupBy: {
            args: Prisma.TreatmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      UserCaregiver: {
        payload: Prisma.$UserCaregiverPayload<ExtArgs>
        fields: Prisma.UserCaregiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCaregiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCaregiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>
          }
          findFirst: {
            args: Prisma.UserCaregiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCaregiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>
          }
          findMany: {
            args: Prisma.UserCaregiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>[]
          }
          create: {
            args: Prisma.UserCaregiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>
          }
          createMany: {
            args: Prisma.UserCaregiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCaregiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>[]
          }
          delete: {
            args: Prisma.UserCaregiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>
          }
          update: {
            args: Prisma.UserCaregiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>
          }
          deleteMany: {
            args: Prisma.UserCaregiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCaregiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCaregiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>[]
          }
          upsert: {
            args: Prisma.UserCaregiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCaregiverPayload>
          }
          aggregate: {
            args: Prisma.UserCaregiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCaregiver>
          }
          groupBy: {
            args: Prisma.UserCaregiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCaregiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCaregiverCountArgs<ExtArgs>
            result: $Utils.Optional<UserCaregiverCountAggregateOutputType> | number
          }
        }
      }
      Intake: {
        payload: Prisma.$IntakePayload<ExtArgs>
        fields: Prisma.IntakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>
          }
          findFirst: {
            args: Prisma.IntakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>
          }
          findMany: {
            args: Prisma.IntakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>[]
          }
          create: {
            args: Prisma.IntakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>
          }
          createMany: {
            args: Prisma.IntakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>[]
          }
          delete: {
            args: Prisma.IntakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>
          }
          update: {
            args: Prisma.IntakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>
          }
          deleteMany: {
            args: Prisma.IntakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>[]
          }
          upsert: {
            args: Prisma.IntakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>
          }
          aggregate: {
            args: Prisma.IntakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntake>
          }
          groupBy: {
            args: Prisma.IntakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntakeCountArgs<ExtArgs>
            result: $Utils.Optional<IntakeCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Newsletter: {
        payload: Prisma.$NewsletterPayload<ExtArgs>
        fields: Prisma.NewsletterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          findFirst: {
            args: Prisma.NewsletterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          findMany: {
            args: Prisma.NewsletterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          create: {
            args: Prisma.NewsletterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          createMany: {
            args: Prisma.NewsletterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          delete: {
            args: Prisma.NewsletterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          update: {
            args: Prisma.NewsletterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          aggregate: {
            args: Prisma.NewsletterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletter>
          }
          groupBy: {
            args: Prisma.NewsletterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    medication?: MedicationOmit
    treatment?: TreatmentOmit
    stock?: StockOmit
    userCaregiver?: UserCaregiverOmit
    intake?: IntakeOmit
    document?: DocumentOmit
    appointment?: AppointmentOmit
    newsletter?: NewsletterOmit
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
    treatments: number
    stocks: number
    documents: number
    appointments: number
    patients: number
    caregivers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatments?: boolean | UserCountOutputTypeCountTreatmentsArgs
    stocks?: boolean | UserCountOutputTypeCountStocksArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    patients?: boolean | UserCountOutputTypeCountPatientsArgs
    caregivers?: boolean | UserCountOutputTypeCountCaregiversArgs
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
  export type UserCountOutputTypeCountTreatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCaregiverWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCaregiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCaregiverWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    treatments: number
    stocks: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatments?: boolean | MedicationCountOutputTypeCountTreatmentsArgs
    stocks?: boolean | MedicationCountOutputTypeCountStocksArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountTreatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }


  /**
   * Count Type TreatmentCountOutputType
   */

  export type TreatmentCountOutputType = {
    intakes: number
  }

  export type TreatmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intakes?: boolean | TreatmentCountOutputTypeCountIntakesArgs
  }

  // Custom InputTypes
  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCountOutputType
     */
    select?: TreatmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeCountIntakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeWhereInput
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
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    email: string | null
    phone: string | null
    password: string | null
    picture: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    email: string | null
    phone: string | null
    password: string | null
    picture: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dateOfBirth: number
    email: number
    phone: number
    password: number
    picture: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    email?: true
    phone?: true
    password?: true
    picture?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    email?: true
    phone?: true
    password?: true
    picture?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    email?: true
    phone?: true
    password?: true
    picture?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    firstName: string
    lastName: string
    dateOfBirth: Date | null
    email: string
    phone: string | null
    password: string
    picture: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
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
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    picture?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    treatments?: boolean | User$treatmentsArgs<ExtArgs>
    stocks?: boolean | User$stocksArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    patients?: boolean | User$patientsArgs<ExtArgs>
    caregivers?: boolean | User$caregiversArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    picture?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    picture?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    picture?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "dateOfBirth" | "email" | "phone" | "password" | "picture" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatments?: boolean | User$treatmentsArgs<ExtArgs>
    stocks?: boolean | User$stocksArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    patients?: boolean | User$patientsArgs<ExtArgs>
    caregivers?: boolean | User$caregiversArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      treatments: Prisma.$TreatmentPayload<ExtArgs>[]
      stocks: Prisma.$StockPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      patients: Prisma.$UserCaregiverPayload<ExtArgs>[]
      caregivers: Prisma.$UserCaregiverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      dateOfBirth: Date | null
      email: string
      phone: string | null
      password: string
      picture: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
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
    treatments<T extends User$treatmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$treatmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stocks<T extends User$stocksArgs<ExtArgs> = {}>(args?: Subset<T, User$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends User$patientsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    caregivers<T extends User$caregiversArgs<ExtArgs> = {}>(args?: Subset<T, User$caregiversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.treatments
   */
  export type User$treatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    cursor?: TreatmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * User.stocks
   */
  export type User$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.patients
   */
  export type User$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    where?: UserCaregiverWhereInput
    orderBy?: UserCaregiverOrderByWithRelationInput | UserCaregiverOrderByWithRelationInput[]
    cursor?: UserCaregiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCaregiverScalarFieldEnum | UserCaregiverScalarFieldEnum[]
  }

  /**
   * User.caregivers
   */
  export type User$caregiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    where?: UserCaregiverWhereInput
    orderBy?: UserCaregiverOrderByWithRelationInput | UserCaregiverOrderByWithRelationInput[]
    cursor?: UserCaregiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCaregiverScalarFieldEnum | UserCaregiverScalarFieldEnum[]
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
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    id: number | null
  }

  export type MedicationSumAggregateOutputType = {
    id: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: number | null
    cisCode: string | null
    name: string | null
    pharmaceuticalForm: string | null
    administrationRoutes: string | null
    marketingStatus: string | null
    holder: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: number | null
    cisCode: string | null
    name: string | null
    pharmaceuticalForm: string | null
    administrationRoutes: string | null
    marketingStatus: string | null
    holder: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    cisCode: number
    name: number
    pharmaceuticalForm: number
    administrationRoutes: number
    marketingStatus: number
    holder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    id?: true
  }

  export type MedicationSumAggregateInputType = {
    id?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    cisCode?: true
    name?: true
    pharmaceuticalForm?: true
    administrationRoutes?: true
    marketingStatus?: true
    holder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    cisCode?: true
    name?: true
    pharmaceuticalForm?: true
    administrationRoutes?: true
    marketingStatus?: true
    holder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    cisCode?: true
    name?: true
    pharmaceuticalForm?: true
    administrationRoutes?: true
    marketingStatus?: true
    holder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: number
    cisCode: string
    name: string
    pharmaceuticalForm: string | null
    administrationRoutes: string | null
    marketingStatus: string | null
    holder: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cisCode?: boolean
    name?: boolean
    pharmaceuticalForm?: boolean
    administrationRoutes?: boolean
    marketingStatus?: boolean
    holder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    treatments?: boolean | Medication$treatmentsArgs<ExtArgs>
    stocks?: boolean | Medication$stocksArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cisCode?: boolean
    name?: boolean
    pharmaceuticalForm?: boolean
    administrationRoutes?: boolean
    marketingStatus?: boolean
    holder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cisCode?: boolean
    name?: boolean
    pharmaceuticalForm?: boolean
    administrationRoutes?: boolean
    marketingStatus?: boolean
    holder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    cisCode?: boolean
    name?: boolean
    pharmaceuticalForm?: boolean
    administrationRoutes?: boolean
    marketingStatus?: boolean
    holder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cisCode" | "name" | "pharmaceuticalForm" | "administrationRoutes" | "marketingStatus" | "holder" | "createdAt" | "updatedAt", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatments?: boolean | Medication$treatmentsArgs<ExtArgs>
    stocks?: boolean | Medication$stocksArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      treatments: Prisma.$TreatmentPayload<ExtArgs>[]
      stocks: Prisma.$StockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cisCode: string
      name: string
      pharmaceuticalForm: string | null
      administrationRoutes: string | null
      marketingStatus: string | null
      holder: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treatments<T extends Medication$treatmentsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$treatmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stocks<T extends Medication$stocksArgs<ExtArgs> = {}>(args?: Subset<T, Medication$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'Int'>
    readonly cisCode: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly pharmaceuticalForm: FieldRef<"Medication", 'String'>
    readonly administrationRoutes: FieldRef<"Medication", 'String'>
    readonly marketingStatus: FieldRef<"Medication", 'String'>
    readonly holder: FieldRef<"Medication", 'String'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.treatments
   */
  export type Medication$treatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    cursor?: TreatmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Medication.stocks
   */
  export type Medication$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model Treatment
   */

  export type AggregateTreatment = {
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  export type TreatmentAvgAggregateOutputType = {
    id: number | null
    medication_id: number | null
  }

  export type TreatmentSumAggregateOutputType = {
    id: number | null
    medication_id: number | null
  }

  export type TreatmentMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    medication_id: number | null
    dosage: string | null
    frequency: string | null
    start_date: Date | null
    end_date: Date | null
    status: $Enums.TreatmentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TreatmentMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    medication_id: number | null
    dosage: string | null
    frequency: string | null
    start_date: Date | null
    end_date: Date | null
    status: $Enums.TreatmentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TreatmentCountAggregateOutputType = {
    id: number
    user_id: number
    medication_id: number
    dosage: number
    frequency: number
    start_date: number
    end_date: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TreatmentAvgAggregateInputType = {
    id?: true
    medication_id?: true
  }

  export type TreatmentSumAggregateInputType = {
    id?: true
    medication_id?: true
  }

  export type TreatmentMinAggregateInputType = {
    id?: true
    user_id?: true
    medication_id?: true
    dosage?: true
    frequency?: true
    start_date?: true
    end_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TreatmentMaxAggregateInputType = {
    id?: true
    user_id?: true
    medication_id?: true
    dosage?: true
    frequency?: true
    start_date?: true
    end_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TreatmentCountAggregateInputType = {
    id?: true
    user_id?: true
    medication_id?: true
    dosage?: true
    frequency?: true
    start_date?: true
    end_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TreatmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatment to aggregate.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treatments
    **/
    _count?: true | TreatmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentMaxAggregateInputType
  }

  export type GetTreatmentAggregateType<T extends TreatmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatment[P]>
      : GetScalarType<T[P], AggregateTreatment[P]>
  }




  export type TreatmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithAggregationInput | TreatmentOrderByWithAggregationInput[]
    by: TreatmentScalarFieldEnum[] | TreatmentScalarFieldEnum
    having?: TreatmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentCountAggregateInputType | true
    _avg?: TreatmentAvgAggregateInputType
    _sum?: TreatmentSumAggregateInputType
    _min?: TreatmentMinAggregateInputType
    _max?: TreatmentMaxAggregateInputType
  }

  export type TreatmentGroupByOutputType = {
    id: number
    user_id: string
    medication_id: number
    dosage: string
    frequency: string
    start_date: Date
    end_date: Date | null
    status: $Enums.TreatmentStatus
    created_at: Date
    updated_at: Date
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  type GetTreatmentGroupByPayload<T extends TreatmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    dosage?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    intakes?: boolean | Treatment$intakesArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    dosage?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    dosage?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectScalar = {
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    dosage?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TreatmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "medication_id" | "dosage" | "frequency" | "start_date" | "end_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["treatment"]>
  export type TreatmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    intakes?: boolean | Treatment$intakesArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreatmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type TreatmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $TreatmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treatment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medication: Prisma.$MedicationPayload<ExtArgs>
      intakes: Prisma.$IntakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      medication_id: number
      dosage: string
      frequency: string
      start_date: Date
      end_date: Date | null
      status: $Enums.TreatmentStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["treatment"]>
    composites: {}
  }

  type TreatmentGetPayload<S extends boolean | null | undefined | TreatmentDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPayload, S>

  type TreatmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentCountAggregateInputType | true
    }

  export interface TreatmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treatment'], meta: { name: 'Treatment' } }
    /**
     * Find zero or one Treatment that matches the filter.
     * @param {TreatmentFindUniqueArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentFindUniqueArgs>(args: SelectSubset<T, TreatmentFindUniqueArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treatment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentFindUniqueOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentFindFirstArgs>(args?: SelectSubset<T, TreatmentFindFirstArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treatments
     * const treatments = await prisma.treatment.findMany()
     * 
     * // Get first 10 Treatments
     * const treatments = await prisma.treatment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentWithIdOnly = await prisma.treatment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentFindManyArgs>(args?: SelectSubset<T, TreatmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treatment.
     * @param {TreatmentCreateArgs} args - Arguments to create a Treatment.
     * @example
     * // Create one Treatment
     * const Treatment = await prisma.treatment.create({
     *   data: {
     *     // ... data to create a Treatment
     *   }
     * })
     * 
     */
    create<T extends TreatmentCreateArgs>(args: SelectSubset<T, TreatmentCreateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treatments.
     * @param {TreatmentCreateManyArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentCreateManyArgs>(args?: SelectSubset<T, TreatmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Treatments and returns the data saved in the database.
     * @param {TreatmentCreateManyAndReturnArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Treatments and only return the `id`
     * const treatmentWithIdOnly = await prisma.treatment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreatmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TreatmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Treatment.
     * @param {TreatmentDeleteArgs} args - Arguments to delete one Treatment.
     * @example
     * // Delete one Treatment
     * const Treatment = await prisma.treatment.delete({
     *   where: {
     *     // ... filter to delete one Treatment
     *   }
     * })
     * 
     */
    delete<T extends TreatmentDeleteArgs>(args: SelectSubset<T, TreatmentDeleteArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treatment.
     * @param {TreatmentUpdateArgs} args - Arguments to update one Treatment.
     * @example
     * // Update one Treatment
     * const treatment = await prisma.treatment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentUpdateArgs>(args: SelectSubset<T, TreatmentUpdateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treatments.
     * @param {TreatmentDeleteManyArgs} args - Arguments to filter Treatments to delete.
     * @example
     * // Delete a few Treatments
     * const { count } = await prisma.treatment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentDeleteManyArgs>(args?: SelectSubset<T, TreatmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treatments
     * const treatment = await prisma.treatment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentUpdateManyArgs>(args: SelectSubset<T, TreatmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatments and returns the data updated in the database.
     * @param {TreatmentUpdateManyAndReturnArgs} args - Arguments to update many Treatments.
     * @example
     * // Update many Treatments
     * const treatment = await prisma.treatment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Treatments and only return the `id`
     * const treatmentWithIdOnly = await prisma.treatment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TreatmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TreatmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Treatment.
     * @param {TreatmentUpsertArgs} args - Arguments to update or create a Treatment.
     * @example
     * // Update or create a Treatment
     * const treatment = await prisma.treatment.upsert({
     *   create: {
     *     // ... data to create a Treatment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treatment we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentUpsertArgs>(args: SelectSubset<T, TreatmentUpsertArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCountArgs} args - Arguments to filter Treatments to count.
     * @example
     * // Count the number of Treatments
     * const count = await prisma.treatment.count({
     *   where: {
     *     // ... the filter for the Treatments we want to count
     *   }
     * })
    **/
    count<T extends TreatmentCountArgs>(
      args?: Subset<T, TreatmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreatmentAggregateArgs>(args: Subset<T, TreatmentAggregateArgs>): Prisma.PrismaPromise<GetTreatmentAggregateType<T>>

    /**
     * Group by Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentGroupByArgs} args - Group by arguments.
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
      T extends TreatmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreatmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treatment model
   */
  readonly fields: TreatmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treatment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    intakes<T extends Treatment$intakesArgs<ExtArgs> = {}>(args?: Subset<T, Treatment$intakesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Treatment model
   */
  interface TreatmentFieldRefs {
    readonly id: FieldRef<"Treatment", 'Int'>
    readonly user_id: FieldRef<"Treatment", 'String'>
    readonly medication_id: FieldRef<"Treatment", 'Int'>
    readonly dosage: FieldRef<"Treatment", 'String'>
    readonly frequency: FieldRef<"Treatment", 'String'>
    readonly start_date: FieldRef<"Treatment", 'DateTime'>
    readonly end_date: FieldRef<"Treatment", 'DateTime'>
    readonly status: FieldRef<"Treatment", 'TreatmentStatus'>
    readonly created_at: FieldRef<"Treatment", 'DateTime'>
    readonly updated_at: FieldRef<"Treatment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Treatment findUnique
   */
  export type TreatmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findUniqueOrThrow
   */
  export type TreatmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findFirst
   */
  export type TreatmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findFirstOrThrow
   */
  export type TreatmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findMany
   */
  export type TreatmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatments to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment create
   */
  export type TreatmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Treatment.
     */
    data: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
  }

  /**
   * Treatment createMany
   */
  export type TreatmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treatment createManyAndReturn
   */
  export type TreatmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Treatment update
   */
  export type TreatmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Treatment.
     */
    data: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
    /**
     * Choose, which Treatment to update.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment updateMany
   */
  export type TreatmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treatments.
     */
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyInput>
    /**
     * Filter which Treatments to update
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to update.
     */
    limit?: number
  }

  /**
   * Treatment updateManyAndReturn
   */
  export type TreatmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * The data used to update Treatments.
     */
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyInput>
    /**
     * Filter which Treatments to update
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Treatment upsert
   */
  export type TreatmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Treatment to update in case it exists.
     */
    where: TreatmentWhereUniqueInput
    /**
     * In case the Treatment found by the `where` argument doesn't exist, create a new Treatment with this data.
     */
    create: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
    /**
     * In case the Treatment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
  }

  /**
   * Treatment delete
   */
  export type TreatmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter which Treatment to delete.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment deleteMany
   */
  export type TreatmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatments to delete
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to delete.
     */
    limit?: number
  }

  /**
   * Treatment.intakes
   */
  export type Treatment$intakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    where?: IntakeWhereInput
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[]
    cursor?: IntakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[]
  }

  /**
   * Treatment without action
   */
  export type TreatmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
    medication_id: number | null
    quantity: number | null
  }

  export type StockSumAggregateOutputType = {
    id: number | null
    medication_id: number | null
    quantity: number | null
  }

  export type StockMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    medication_id: number | null
    quantity: number | null
    location: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StockMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    medication_id: number | null
    quantity: number | null
    location: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    user_id: number
    medication_id: number
    quantity: number
    location: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
    medication_id?: true
    quantity?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
    medication_id?: true
    quantity?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    user_id?: true
    medication_id?: true
    quantity?: true
    location?: true
    created_at?: true
    updated_at?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    user_id?: true
    medication_id?: true
    quantity?: true
    location?: true
    created_at?: true
    updated_at?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    user_id?: true
    medication_id?: true
    quantity?: true
    location?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: number
    user_id: string
    medication_id: number
    quantity: number
    location: string
    created_at: Date
    updated_at: Date
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    quantity?: boolean
    location?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    quantity?: boolean
    location?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    quantity?: boolean
    location?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    user_id?: boolean
    medication_id?: boolean
    quantity?: boolean
    location?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "medication_id" | "quantity" | "location" | "created_at" | "updated_at", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type StockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      medication_id: number
      quantity: number
      location: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
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
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
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
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'Int'>
    readonly user_id: FieldRef<"Stock", 'String'>
    readonly medication_id: FieldRef<"Stock", 'Int'>
    readonly quantity: FieldRef<"Stock", 'Int'>
    readonly location: FieldRef<"Stock", 'String'>
    readonly created_at: FieldRef<"Stock", 'DateTime'>
    readonly updated_at: FieldRef<"Stock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model UserCaregiver
   */

  export type AggregateUserCaregiver = {
    _count: UserCaregiverCountAggregateOutputType | null
    _avg: UserCaregiverAvgAggregateOutputType | null
    _sum: UserCaregiverSumAggregateOutputType | null
    _min: UserCaregiverMinAggregateOutputType | null
    _max: UserCaregiverMaxAggregateOutputType | null
  }

  export type UserCaregiverAvgAggregateOutputType = {
    id: number | null
  }

  export type UserCaregiverSumAggregateOutputType = {
    id: number | null
  }

  export type UserCaregiverMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    caregiver_id: string | null
    status: $Enums.CaregiverStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCaregiverMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    caregiver_id: string | null
    status: $Enums.CaregiverStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCaregiverCountAggregateOutputType = {
    id: number
    user_id: number
    caregiver_id: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserCaregiverAvgAggregateInputType = {
    id?: true
  }

  export type UserCaregiverSumAggregateInputType = {
    id?: true
  }

  export type UserCaregiverMinAggregateInputType = {
    id?: true
    user_id?: true
    caregiver_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCaregiverMaxAggregateInputType = {
    id?: true
    user_id?: true
    caregiver_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCaregiverCountAggregateInputType = {
    id?: true
    user_id?: true
    caregiver_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserCaregiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCaregiver to aggregate.
     */
    where?: UserCaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCaregivers to fetch.
     */
    orderBy?: UserCaregiverOrderByWithRelationInput | UserCaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCaregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCaregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCaregivers
    **/
    _count?: true | UserCaregiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCaregiverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCaregiverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCaregiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCaregiverMaxAggregateInputType
  }

  export type GetUserCaregiverAggregateType<T extends UserCaregiverAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCaregiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCaregiver[P]>
      : GetScalarType<T[P], AggregateUserCaregiver[P]>
  }




  export type UserCaregiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCaregiverWhereInput
    orderBy?: UserCaregiverOrderByWithAggregationInput | UserCaregiverOrderByWithAggregationInput[]
    by: UserCaregiverScalarFieldEnum[] | UserCaregiverScalarFieldEnum
    having?: UserCaregiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCaregiverCountAggregateInputType | true
    _avg?: UserCaregiverAvgAggregateInputType
    _sum?: UserCaregiverSumAggregateInputType
    _min?: UserCaregiverMinAggregateInputType
    _max?: UserCaregiverMaxAggregateInputType
  }

  export type UserCaregiverGroupByOutputType = {
    id: number
    user_id: string
    caregiver_id: string
    status: $Enums.CaregiverStatus
    created_at: Date
    updated_at: Date
    _count: UserCaregiverCountAggregateOutputType | null
    _avg: UserCaregiverAvgAggregateOutputType | null
    _sum: UserCaregiverSumAggregateOutputType | null
    _min: UserCaregiverMinAggregateOutputType | null
    _max: UserCaregiverMaxAggregateOutputType | null
  }

  type GetUserCaregiverGroupByPayload<T extends UserCaregiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCaregiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCaregiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCaregiverGroupByOutputType[P]>
            : GetScalarType<T[P], UserCaregiverGroupByOutputType[P]>
        }
      >
    >


  export type UserCaregiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    caregiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    caregiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCaregiver"]>

  export type UserCaregiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    caregiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    caregiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCaregiver"]>

  export type UserCaregiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    caregiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    caregiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCaregiver"]>

  export type UserCaregiverSelectScalar = {
    id?: boolean
    user_id?: boolean
    caregiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserCaregiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "caregiver_id" | "status" | "created_at" | "updated_at", ExtArgs["result"]["userCaregiver"]>
  export type UserCaregiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    caregiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCaregiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    caregiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCaregiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    caregiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCaregiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCaregiver"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      caregiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      caregiver_id: string
      status: $Enums.CaregiverStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userCaregiver"]>
    composites: {}
  }

  type UserCaregiverGetPayload<S extends boolean | null | undefined | UserCaregiverDefaultArgs> = $Result.GetResult<Prisma.$UserCaregiverPayload, S>

  type UserCaregiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCaregiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCaregiverCountAggregateInputType | true
    }

  export interface UserCaregiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCaregiver'], meta: { name: 'UserCaregiver' } }
    /**
     * Find zero or one UserCaregiver that matches the filter.
     * @param {UserCaregiverFindUniqueArgs} args - Arguments to find a UserCaregiver
     * @example
     * // Get one UserCaregiver
     * const userCaregiver = await prisma.userCaregiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCaregiverFindUniqueArgs>(args: SelectSubset<T, UserCaregiverFindUniqueArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCaregiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCaregiverFindUniqueOrThrowArgs} args - Arguments to find a UserCaregiver
     * @example
     * // Get one UserCaregiver
     * const userCaregiver = await prisma.userCaregiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCaregiverFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCaregiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCaregiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverFindFirstArgs} args - Arguments to find a UserCaregiver
     * @example
     * // Get one UserCaregiver
     * const userCaregiver = await prisma.userCaregiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCaregiverFindFirstArgs>(args?: SelectSubset<T, UserCaregiverFindFirstArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCaregiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverFindFirstOrThrowArgs} args - Arguments to find a UserCaregiver
     * @example
     * // Get one UserCaregiver
     * const userCaregiver = await prisma.userCaregiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCaregiverFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCaregiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCaregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCaregivers
     * const userCaregivers = await prisma.userCaregiver.findMany()
     * 
     * // Get first 10 UserCaregivers
     * const userCaregivers = await prisma.userCaregiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCaregiverWithIdOnly = await prisma.userCaregiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCaregiverFindManyArgs>(args?: SelectSubset<T, UserCaregiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCaregiver.
     * @param {UserCaregiverCreateArgs} args - Arguments to create a UserCaregiver.
     * @example
     * // Create one UserCaregiver
     * const UserCaregiver = await prisma.userCaregiver.create({
     *   data: {
     *     // ... data to create a UserCaregiver
     *   }
     * })
     * 
     */
    create<T extends UserCaregiverCreateArgs>(args: SelectSubset<T, UserCaregiverCreateArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCaregivers.
     * @param {UserCaregiverCreateManyArgs} args - Arguments to create many UserCaregivers.
     * @example
     * // Create many UserCaregivers
     * const userCaregiver = await prisma.userCaregiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCaregiverCreateManyArgs>(args?: SelectSubset<T, UserCaregiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCaregivers and returns the data saved in the database.
     * @param {UserCaregiverCreateManyAndReturnArgs} args - Arguments to create many UserCaregivers.
     * @example
     * // Create many UserCaregivers
     * const userCaregiver = await prisma.userCaregiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCaregivers and only return the `id`
     * const userCaregiverWithIdOnly = await prisma.userCaregiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCaregiverCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCaregiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCaregiver.
     * @param {UserCaregiverDeleteArgs} args - Arguments to delete one UserCaregiver.
     * @example
     * // Delete one UserCaregiver
     * const UserCaregiver = await prisma.userCaregiver.delete({
     *   where: {
     *     // ... filter to delete one UserCaregiver
     *   }
     * })
     * 
     */
    delete<T extends UserCaregiverDeleteArgs>(args: SelectSubset<T, UserCaregiverDeleteArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCaregiver.
     * @param {UserCaregiverUpdateArgs} args - Arguments to update one UserCaregiver.
     * @example
     * // Update one UserCaregiver
     * const userCaregiver = await prisma.userCaregiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCaregiverUpdateArgs>(args: SelectSubset<T, UserCaregiverUpdateArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCaregivers.
     * @param {UserCaregiverDeleteManyArgs} args - Arguments to filter UserCaregivers to delete.
     * @example
     * // Delete a few UserCaregivers
     * const { count } = await prisma.userCaregiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCaregiverDeleteManyArgs>(args?: SelectSubset<T, UserCaregiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCaregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCaregivers
     * const userCaregiver = await prisma.userCaregiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCaregiverUpdateManyArgs>(args: SelectSubset<T, UserCaregiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCaregivers and returns the data updated in the database.
     * @param {UserCaregiverUpdateManyAndReturnArgs} args - Arguments to update many UserCaregivers.
     * @example
     * // Update many UserCaregivers
     * const userCaregiver = await prisma.userCaregiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCaregivers and only return the `id`
     * const userCaregiverWithIdOnly = await prisma.userCaregiver.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCaregiverUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCaregiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCaregiver.
     * @param {UserCaregiverUpsertArgs} args - Arguments to update or create a UserCaregiver.
     * @example
     * // Update or create a UserCaregiver
     * const userCaregiver = await prisma.userCaregiver.upsert({
     *   create: {
     *     // ... data to create a UserCaregiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCaregiver we want to update
     *   }
     * })
     */
    upsert<T extends UserCaregiverUpsertArgs>(args: SelectSubset<T, UserCaregiverUpsertArgs<ExtArgs>>): Prisma__UserCaregiverClient<$Result.GetResult<Prisma.$UserCaregiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCaregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverCountArgs} args - Arguments to filter UserCaregivers to count.
     * @example
     * // Count the number of UserCaregivers
     * const count = await prisma.userCaregiver.count({
     *   where: {
     *     // ... the filter for the UserCaregivers we want to count
     *   }
     * })
    **/
    count<T extends UserCaregiverCountArgs>(
      args?: Subset<T, UserCaregiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCaregiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCaregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCaregiverAggregateArgs>(args: Subset<T, UserCaregiverAggregateArgs>): Prisma.PrismaPromise<GetUserCaregiverAggregateType<T>>

    /**
     * Group by UserCaregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCaregiverGroupByArgs} args - Group by arguments.
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
      T extends UserCaregiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCaregiverGroupByArgs['orderBy'] }
        : { orderBy?: UserCaregiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCaregiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCaregiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCaregiver model
   */
  readonly fields: UserCaregiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCaregiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCaregiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    caregiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCaregiver model
   */
  interface UserCaregiverFieldRefs {
    readonly id: FieldRef<"UserCaregiver", 'Int'>
    readonly user_id: FieldRef<"UserCaregiver", 'String'>
    readonly caregiver_id: FieldRef<"UserCaregiver", 'String'>
    readonly status: FieldRef<"UserCaregiver", 'CaregiverStatus'>
    readonly created_at: FieldRef<"UserCaregiver", 'DateTime'>
    readonly updated_at: FieldRef<"UserCaregiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCaregiver findUnique
   */
  export type UserCaregiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * Filter, which UserCaregiver to fetch.
     */
    where: UserCaregiverWhereUniqueInput
  }

  /**
   * UserCaregiver findUniqueOrThrow
   */
  export type UserCaregiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * Filter, which UserCaregiver to fetch.
     */
    where: UserCaregiverWhereUniqueInput
  }

  /**
   * UserCaregiver findFirst
   */
  export type UserCaregiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * Filter, which UserCaregiver to fetch.
     */
    where?: UserCaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCaregivers to fetch.
     */
    orderBy?: UserCaregiverOrderByWithRelationInput | UserCaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCaregivers.
     */
    cursor?: UserCaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCaregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCaregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCaregivers.
     */
    distinct?: UserCaregiverScalarFieldEnum | UserCaregiverScalarFieldEnum[]
  }

  /**
   * UserCaregiver findFirstOrThrow
   */
  export type UserCaregiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * Filter, which UserCaregiver to fetch.
     */
    where?: UserCaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCaregivers to fetch.
     */
    orderBy?: UserCaregiverOrderByWithRelationInput | UserCaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCaregivers.
     */
    cursor?: UserCaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCaregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCaregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCaregivers.
     */
    distinct?: UserCaregiverScalarFieldEnum | UserCaregiverScalarFieldEnum[]
  }

  /**
   * UserCaregiver findMany
   */
  export type UserCaregiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * Filter, which UserCaregivers to fetch.
     */
    where?: UserCaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCaregivers to fetch.
     */
    orderBy?: UserCaregiverOrderByWithRelationInput | UserCaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCaregivers.
     */
    cursor?: UserCaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCaregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCaregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCaregivers.
     */
    distinct?: UserCaregiverScalarFieldEnum | UserCaregiverScalarFieldEnum[]
  }

  /**
   * UserCaregiver create
   */
  export type UserCaregiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCaregiver.
     */
    data: XOR<UserCaregiverCreateInput, UserCaregiverUncheckedCreateInput>
  }

  /**
   * UserCaregiver createMany
   */
  export type UserCaregiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCaregivers.
     */
    data: UserCaregiverCreateManyInput | UserCaregiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCaregiver createManyAndReturn
   */
  export type UserCaregiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * The data used to create many UserCaregivers.
     */
    data: UserCaregiverCreateManyInput | UserCaregiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCaregiver update
   */
  export type UserCaregiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCaregiver.
     */
    data: XOR<UserCaregiverUpdateInput, UserCaregiverUncheckedUpdateInput>
    /**
     * Choose, which UserCaregiver to update.
     */
    where: UserCaregiverWhereUniqueInput
  }

  /**
   * UserCaregiver updateMany
   */
  export type UserCaregiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCaregivers.
     */
    data: XOR<UserCaregiverUpdateManyMutationInput, UserCaregiverUncheckedUpdateManyInput>
    /**
     * Filter which UserCaregivers to update
     */
    where?: UserCaregiverWhereInput
    /**
     * Limit how many UserCaregivers to update.
     */
    limit?: number
  }

  /**
   * UserCaregiver updateManyAndReturn
   */
  export type UserCaregiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * The data used to update UserCaregivers.
     */
    data: XOR<UserCaregiverUpdateManyMutationInput, UserCaregiverUncheckedUpdateManyInput>
    /**
     * Filter which UserCaregivers to update
     */
    where?: UserCaregiverWhereInput
    /**
     * Limit how many UserCaregivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCaregiver upsert
   */
  export type UserCaregiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCaregiver to update in case it exists.
     */
    where: UserCaregiverWhereUniqueInput
    /**
     * In case the UserCaregiver found by the `where` argument doesn't exist, create a new UserCaregiver with this data.
     */
    create: XOR<UserCaregiverCreateInput, UserCaregiverUncheckedCreateInput>
    /**
     * In case the UserCaregiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCaregiverUpdateInput, UserCaregiverUncheckedUpdateInput>
  }

  /**
   * UserCaregiver delete
   */
  export type UserCaregiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
    /**
     * Filter which UserCaregiver to delete.
     */
    where: UserCaregiverWhereUniqueInput
  }

  /**
   * UserCaregiver deleteMany
   */
  export type UserCaregiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCaregivers to delete
     */
    where?: UserCaregiverWhereInput
    /**
     * Limit how many UserCaregivers to delete.
     */
    limit?: number
  }

  /**
   * UserCaregiver without action
   */
  export type UserCaregiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCaregiver
     */
    select?: UserCaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCaregiver
     */
    omit?: UserCaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCaregiverInclude<ExtArgs> | null
  }


  /**
   * Model Intake
   */

  export type AggregateIntake = {
    _count: IntakeCountAggregateOutputType | null
    _avg: IntakeAvgAggregateOutputType | null
    _sum: IntakeSumAggregateOutputType | null
    _min: IntakeMinAggregateOutputType | null
    _max: IntakeMaxAggregateOutputType | null
  }

  export type IntakeAvgAggregateOutputType = {
    id: number | null
    treatment_id: number | null
  }

  export type IntakeSumAggregateOutputType = {
    id: number | null
    treatment_id: number | null
  }

  export type IntakeMinAggregateOutputType = {
    id: number | null
    treatment_id: number | null
    taken_at: Date | null
    status: $Enums.IntakeStatus | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IntakeMaxAggregateOutputType = {
    id: number | null
    treatment_id: number | null
    taken_at: Date | null
    status: $Enums.IntakeStatus | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IntakeCountAggregateOutputType = {
    id: number
    treatment_id: number
    taken_at: number
    status: number
    note: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IntakeAvgAggregateInputType = {
    id?: true
    treatment_id?: true
  }

  export type IntakeSumAggregateInputType = {
    id?: true
    treatment_id?: true
  }

  export type IntakeMinAggregateInputType = {
    id?: true
    treatment_id?: true
    taken_at?: true
    status?: true
    note?: true
    created_at?: true
    updated_at?: true
  }

  export type IntakeMaxAggregateInputType = {
    id?: true
    treatment_id?: true
    taken_at?: true
    status?: true
    note?: true
    created_at?: true
    updated_at?: true
  }

  export type IntakeCountAggregateInputType = {
    id?: true
    treatment_id?: true
    taken_at?: true
    status?: true
    note?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IntakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intake to aggregate.
     */
    where?: IntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Intakes
    **/
    _count?: true | IntakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntakeMaxAggregateInputType
  }

  export type GetIntakeAggregateType<T extends IntakeAggregateArgs> = {
        [P in keyof T & keyof AggregateIntake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntake[P]>
      : GetScalarType<T[P], AggregateIntake[P]>
  }




  export type IntakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeWhereInput
    orderBy?: IntakeOrderByWithAggregationInput | IntakeOrderByWithAggregationInput[]
    by: IntakeScalarFieldEnum[] | IntakeScalarFieldEnum
    having?: IntakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntakeCountAggregateInputType | true
    _avg?: IntakeAvgAggregateInputType
    _sum?: IntakeSumAggregateInputType
    _min?: IntakeMinAggregateInputType
    _max?: IntakeMaxAggregateInputType
  }

  export type IntakeGroupByOutputType = {
    id: number
    treatment_id: number
    taken_at: Date | null
    status: $Enums.IntakeStatus
    note: string | null
    created_at: Date
    updated_at: Date
    _count: IntakeCountAggregateOutputType | null
    _avg: IntakeAvgAggregateOutputType | null
    _sum: IntakeSumAggregateOutputType | null
    _min: IntakeMinAggregateOutputType | null
    _max: IntakeMaxAggregateOutputType | null
  }

  type GetIntakeGroupByPayload<T extends IntakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntakeGroupByOutputType[P]>
            : GetScalarType<T[P], IntakeGroupByOutputType[P]>
        }
      >
    >


  export type IntakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatment_id?: boolean
    taken_at?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intake"]>

  export type IntakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatment_id?: boolean
    taken_at?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intake"]>

  export type IntakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatment_id?: boolean
    taken_at?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intake"]>

  export type IntakeSelectScalar = {
    id?: boolean
    treatment_id?: boolean
    taken_at?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type IntakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treatment_id" | "taken_at" | "status" | "note" | "created_at" | "updated_at", ExtArgs["result"]["intake"]>
  export type IntakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }
  export type IntakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }
  export type IntakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }

  export type $IntakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Intake"
    objects: {
      treatment: Prisma.$TreatmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      treatment_id: number
      taken_at: Date | null
      status: $Enums.IntakeStatus
      note: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["intake"]>
    composites: {}
  }

  type IntakeGetPayload<S extends boolean | null | undefined | IntakeDefaultArgs> = $Result.GetResult<Prisma.$IntakePayload, S>

  type IntakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntakeCountAggregateInputType | true
    }

  export interface IntakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Intake'], meta: { name: 'Intake' } }
    /**
     * Find zero or one Intake that matches the filter.
     * @param {IntakeFindUniqueArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntakeFindUniqueArgs>(args: SelectSubset<T, IntakeFindUniqueArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Intake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntakeFindUniqueOrThrowArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntakeFindUniqueOrThrowArgs>(args: SelectSubset<T, IntakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFindFirstArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntakeFindFirstArgs>(args?: SelectSubset<T, IntakeFindFirstArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFindFirstOrThrowArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntakeFindFirstOrThrowArgs>(args?: SelectSubset<T, IntakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Intakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intakes
     * const intakes = await prisma.intake.findMany()
     * 
     * // Get first 10 Intakes
     * const intakes = await prisma.intake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intakeWithIdOnly = await prisma.intake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntakeFindManyArgs>(args?: SelectSubset<T, IntakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Intake.
     * @param {IntakeCreateArgs} args - Arguments to create a Intake.
     * @example
     * // Create one Intake
     * const Intake = await prisma.intake.create({
     *   data: {
     *     // ... data to create a Intake
     *   }
     * })
     * 
     */
    create<T extends IntakeCreateArgs>(args: SelectSubset<T, IntakeCreateArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Intakes.
     * @param {IntakeCreateManyArgs} args - Arguments to create many Intakes.
     * @example
     * // Create many Intakes
     * const intake = await prisma.intake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntakeCreateManyArgs>(args?: SelectSubset<T, IntakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Intakes and returns the data saved in the database.
     * @param {IntakeCreateManyAndReturnArgs} args - Arguments to create many Intakes.
     * @example
     * // Create many Intakes
     * const intake = await prisma.intake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Intakes and only return the `id`
     * const intakeWithIdOnly = await prisma.intake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntakeCreateManyAndReturnArgs>(args?: SelectSubset<T, IntakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Intake.
     * @param {IntakeDeleteArgs} args - Arguments to delete one Intake.
     * @example
     * // Delete one Intake
     * const Intake = await prisma.intake.delete({
     *   where: {
     *     // ... filter to delete one Intake
     *   }
     * })
     * 
     */
    delete<T extends IntakeDeleteArgs>(args: SelectSubset<T, IntakeDeleteArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Intake.
     * @param {IntakeUpdateArgs} args - Arguments to update one Intake.
     * @example
     * // Update one Intake
     * const intake = await prisma.intake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntakeUpdateArgs>(args: SelectSubset<T, IntakeUpdateArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Intakes.
     * @param {IntakeDeleteManyArgs} args - Arguments to filter Intakes to delete.
     * @example
     * // Delete a few Intakes
     * const { count } = await prisma.intake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntakeDeleteManyArgs>(args?: SelectSubset<T, IntakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intakes
     * const intake = await prisma.intake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntakeUpdateManyArgs>(args: SelectSubset<T, IntakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intakes and returns the data updated in the database.
     * @param {IntakeUpdateManyAndReturnArgs} args - Arguments to update many Intakes.
     * @example
     * // Update many Intakes
     * const intake = await prisma.intake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Intakes and only return the `id`
     * const intakeWithIdOnly = await prisma.intake.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntakeUpdateManyAndReturnArgs>(args: SelectSubset<T, IntakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Intake.
     * @param {IntakeUpsertArgs} args - Arguments to update or create a Intake.
     * @example
     * // Update or create a Intake
     * const intake = await prisma.intake.upsert({
     *   create: {
     *     // ... data to create a Intake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intake we want to update
     *   }
     * })
     */
    upsert<T extends IntakeUpsertArgs>(args: SelectSubset<T, IntakeUpsertArgs<ExtArgs>>): Prisma__IntakeClient<$Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Intakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeCountArgs} args - Arguments to filter Intakes to count.
     * @example
     * // Count the number of Intakes
     * const count = await prisma.intake.count({
     *   where: {
     *     // ... the filter for the Intakes we want to count
     *   }
     * })
    **/
    count<T extends IntakeCountArgs>(
      args?: Subset<T, IntakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntakeAggregateArgs>(args: Subset<T, IntakeAggregateArgs>): Prisma.PrismaPromise<GetIntakeAggregateType<T>>

    /**
     * Group by Intake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeGroupByArgs} args - Group by arguments.
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
      T extends IntakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntakeGroupByArgs['orderBy'] }
        : { orderBy?: IntakeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Intake model
   */
  readonly fields: IntakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Intake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treatment<T extends TreatmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentDefaultArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Intake model
   */
  interface IntakeFieldRefs {
    readonly id: FieldRef<"Intake", 'Int'>
    readonly treatment_id: FieldRef<"Intake", 'Int'>
    readonly taken_at: FieldRef<"Intake", 'DateTime'>
    readonly status: FieldRef<"Intake", 'IntakeStatus'>
    readonly note: FieldRef<"Intake", 'String'>
    readonly created_at: FieldRef<"Intake", 'DateTime'>
    readonly updated_at: FieldRef<"Intake", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Intake findUnique
   */
  export type IntakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * Filter, which Intake to fetch.
     */
    where: IntakeWhereUniqueInput
  }

  /**
   * Intake findUniqueOrThrow
   */
  export type IntakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * Filter, which Intake to fetch.
     */
    where: IntakeWhereUniqueInput
  }

  /**
   * Intake findFirst
   */
  export type IntakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * Filter, which Intake to fetch.
     */
    where?: IntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intakes.
     */
    cursor?: IntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intakes.
     */
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[]
  }

  /**
   * Intake findFirstOrThrow
   */
  export type IntakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * Filter, which Intake to fetch.
     */
    where?: IntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intakes.
     */
    cursor?: IntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intakes.
     */
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[]
  }

  /**
   * Intake findMany
   */
  export type IntakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * Filter, which Intakes to fetch.
     */
    where?: IntakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Intakes.
     */
    cursor?: IntakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intakes.
     */
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[]
  }

  /**
   * Intake create
   */
  export type IntakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Intake.
     */
    data: XOR<IntakeCreateInput, IntakeUncheckedCreateInput>
  }

  /**
   * Intake createMany
   */
  export type IntakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Intakes.
     */
    data: IntakeCreateManyInput | IntakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Intake createManyAndReturn
   */
  export type IntakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * The data used to create many Intakes.
     */
    data: IntakeCreateManyInput | IntakeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Intake update
   */
  export type IntakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Intake.
     */
    data: XOR<IntakeUpdateInput, IntakeUncheckedUpdateInput>
    /**
     * Choose, which Intake to update.
     */
    where: IntakeWhereUniqueInput
  }

  /**
   * Intake updateMany
   */
  export type IntakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Intakes.
     */
    data: XOR<IntakeUpdateManyMutationInput, IntakeUncheckedUpdateManyInput>
    /**
     * Filter which Intakes to update
     */
    where?: IntakeWhereInput
    /**
     * Limit how many Intakes to update.
     */
    limit?: number
  }

  /**
   * Intake updateManyAndReturn
   */
  export type IntakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * The data used to update Intakes.
     */
    data: XOR<IntakeUpdateManyMutationInput, IntakeUncheckedUpdateManyInput>
    /**
     * Filter which Intakes to update
     */
    where?: IntakeWhereInput
    /**
     * Limit how many Intakes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Intake upsert
   */
  export type IntakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Intake to update in case it exists.
     */
    where: IntakeWhereUniqueInput
    /**
     * In case the Intake found by the `where` argument doesn't exist, create a new Intake with this data.
     */
    create: XOR<IntakeCreateInput, IntakeUncheckedCreateInput>
    /**
     * In case the Intake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntakeUpdateInput, IntakeUncheckedUpdateInput>
  }

  /**
   * Intake delete
   */
  export type IntakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
    /**
     * Filter which Intake to delete.
     */
    where: IntakeWhereUniqueInput
  }

  /**
   * Intake deleteMany
   */
  export type IntakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intakes to delete
     */
    where?: IntakeWhereInput
    /**
     * Limit how many Intakes to delete.
     */
    limit?: number
  }

  /**
   * Intake without action
   */
  export type IntakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intake
     */
    omit?: IntakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    type: string | null
    description: string | null
    file_path: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    type: string | null
    description: string | null
    file_path: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    type: number
    description: number
    file_path: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    type?: true
    description?: true
    file_path?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    type?: true
    description?: true
    file_path?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    type?: true
    description?: true
    file_path?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    user_id: string
    name: string
    type: string
    description: string | null
    file_path: string
    created_at: Date
    updated_at: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    file_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    file_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    file_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    file_path?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "type" | "description" | "file_path" | "created_at" | "updated_at", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      type: string
      description: string | null
      file_path: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly user_id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly file_path: FieldRef<"Document", 'String'>
    readonly created_at: FieldRef<"Document", 'DateTime'>
    readonly updated_at: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    title: string | null
    description: string | null
    location: string | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    title: string | null
    description: string | null
    location: string | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    location: number
    start_time: number
    end_time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    location?: true
    start_time?: true
    end_time?: true
    created_at?: true
    updated_at?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    location?: true
    start_time?: true
    end_time?: true
    created_at?: true
    updated_at?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    location?: true
    start_time?: true
    end_time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    user_id: string
    title: string
    description: string | null
    location: string | null
    start_time: Date
    end_time: Date
    created_at: Date
    updated_at: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "location" | "start_time" | "end_time" | "created_at" | "updated_at", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      title: string
      description: string | null
      location: string | null
      start_time: Date
      end_time: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly user_id: FieldRef<"Appointment", 'String'>
    readonly title: FieldRef<"Appointment", 'String'>
    readonly description: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly start_time: FieldRef<"Appointment", 'DateTime'>
    readonly end_time: FieldRef<"Appointment", 'DateTime'>
    readonly created_at: FieldRef<"Appointment", 'DateTime'>
    readonly updated_at: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Newsletter
   */

  export type AggregateNewsletter = {
    _count: NewsletterCountAggregateOutputType | null
    _avg: NewsletterAvgAggregateOutputType | null
    _sum: NewsletterSumAggregateOutputType | null
    _min: NewsletterMinAggregateOutputType | null
    _max: NewsletterMaxAggregateOutputType | null
  }

  export type NewsletterAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsletterSumAggregateOutputType = {
    id: number | null
  }

  export type NewsletterMinAggregateOutputType = {
    id: number | null
    email: string | null
    accept_conditions: boolean | null
    accepted_at: Date | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NewsletterMaxAggregateOutputType = {
    id: number | null
    email: string | null
    accept_conditions: boolean | null
    accepted_at: Date | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NewsletterCountAggregateOutputType = {
    id: number
    email: number
    accept_conditions: number
    accepted_at: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NewsletterAvgAggregateInputType = {
    id?: true
  }

  export type NewsletterSumAggregateInputType = {
    id?: true
  }

  export type NewsletterMinAggregateInputType = {
    id?: true
    email?: true
    accept_conditions?: true
    accepted_at?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type NewsletterMaxAggregateInputType = {
    id?: true
    email?: true
    accept_conditions?: true
    accepted_at?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type NewsletterCountAggregateInputType = {
    id?: true
    email?: true
    accept_conditions?: true
    accepted_at?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NewsletterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newsletter to aggregate.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Newsletters
    **/
    _count?: true | NewsletterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsletterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsletterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterMaxAggregateInputType
  }

  export type GetNewsletterAggregateType<T extends NewsletterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletter[P]>
      : GetScalarType<T[P], AggregateNewsletter[P]>
  }




  export type NewsletterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterWhereInput
    orderBy?: NewsletterOrderByWithAggregationInput | NewsletterOrderByWithAggregationInput[]
    by: NewsletterScalarFieldEnum[] | NewsletterScalarFieldEnum
    having?: NewsletterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterCountAggregateInputType | true
    _avg?: NewsletterAvgAggregateInputType
    _sum?: NewsletterSumAggregateInputType
    _min?: NewsletterMinAggregateInputType
    _max?: NewsletterMaxAggregateInputType
  }

  export type NewsletterGroupByOutputType = {
    id: number
    email: string
    accept_conditions: boolean
    accepted_at: Date | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: NewsletterCountAggregateOutputType | null
    _avg: NewsletterAvgAggregateOutputType | null
    _sum: NewsletterSumAggregateOutputType | null
    _min: NewsletterMinAggregateOutputType | null
    _max: NewsletterMaxAggregateOutputType | null
  }

  type GetNewsletterGroupByPayload<T extends NewsletterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accept_conditions?: boolean
    accepted_at?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["newsletter"]>

  export type NewsletterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accept_conditions?: boolean
    accepted_at?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["newsletter"]>

  export type NewsletterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    accept_conditions?: boolean
    accepted_at?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["newsletter"]>

  export type NewsletterSelectScalar = {
    id?: boolean
    email?: boolean
    accept_conditions?: boolean
    accepted_at?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type NewsletterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "accept_conditions" | "accepted_at" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["newsletter"]>

  export type $NewsletterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Newsletter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      accept_conditions: boolean
      accepted_at: Date | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["newsletter"]>
    composites: {}
  }

  type NewsletterGetPayload<S extends boolean | null | undefined | NewsletterDefaultArgs> = $Result.GetResult<Prisma.$NewsletterPayload, S>

  type NewsletterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterCountAggregateInputType | true
    }

  export interface NewsletterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Newsletter'], meta: { name: 'Newsletter' } }
    /**
     * Find zero or one Newsletter that matches the filter.
     * @param {NewsletterFindUniqueArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterFindUniqueArgs>(args: SelectSubset<T, NewsletterFindUniqueArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Newsletter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterFindUniqueOrThrowArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindFirstArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterFindFirstArgs>(args?: SelectSubset<T, NewsletterFindFirstArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindFirstOrThrowArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Newsletters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newsletters
     * const newsletters = await prisma.newsletter.findMany()
     * 
     * // Get first 10 Newsletters
     * const newsletters = await prisma.newsletter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterFindManyArgs>(args?: SelectSubset<T, NewsletterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Newsletter.
     * @param {NewsletterCreateArgs} args - Arguments to create a Newsletter.
     * @example
     * // Create one Newsletter
     * const Newsletter = await prisma.newsletter.create({
     *   data: {
     *     // ... data to create a Newsletter
     *   }
     * })
     * 
     */
    create<T extends NewsletterCreateArgs>(args: SelectSubset<T, NewsletterCreateArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Newsletters.
     * @param {NewsletterCreateManyArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletter = await prisma.newsletter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterCreateManyArgs>(args?: SelectSubset<T, NewsletterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Newsletters and returns the data saved in the database.
     * @param {NewsletterCreateManyAndReturnArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletter = await prisma.newsletter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Newsletters and only return the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Newsletter.
     * @param {NewsletterDeleteArgs} args - Arguments to delete one Newsletter.
     * @example
     * // Delete one Newsletter
     * const Newsletter = await prisma.newsletter.delete({
     *   where: {
     *     // ... filter to delete one Newsletter
     *   }
     * })
     * 
     */
    delete<T extends NewsletterDeleteArgs>(args: SelectSubset<T, NewsletterDeleteArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Newsletter.
     * @param {NewsletterUpdateArgs} args - Arguments to update one Newsletter.
     * @example
     * // Update one Newsletter
     * const newsletter = await prisma.newsletter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterUpdateArgs>(args: SelectSubset<T, NewsletterUpdateArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Newsletters.
     * @param {NewsletterDeleteManyArgs} args - Arguments to filter Newsletters to delete.
     * @example
     * // Delete a few Newsletters
     * const { count } = await prisma.newsletter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterDeleteManyArgs>(args?: SelectSubset<T, NewsletterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newsletters
     * const newsletter = await prisma.newsletter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterUpdateManyArgs>(args: SelectSubset<T, NewsletterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters and returns the data updated in the database.
     * @param {NewsletterUpdateManyAndReturnArgs} args - Arguments to update many Newsletters.
     * @example
     * // Update many Newsletters
     * const newsletter = await prisma.newsletter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Newsletters and only return the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsletterUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Newsletter.
     * @param {NewsletterUpsertArgs} args - Arguments to update or create a Newsletter.
     * @example
     * // Update or create a Newsletter
     * const newsletter = await prisma.newsletter.upsert({
     *   create: {
     *     // ... data to create a Newsletter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newsletter we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterUpsertArgs>(args: SelectSubset<T, NewsletterUpsertArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterCountArgs} args - Arguments to filter Newsletters to count.
     * @example
     * // Count the number of Newsletters
     * const count = await prisma.newsletter.count({
     *   where: {
     *     // ... the filter for the Newsletters we want to count
     *   }
     * })
    **/
    count<T extends NewsletterCountArgs>(
      args?: Subset<T, NewsletterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newsletter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsletterAggregateArgs>(args: Subset<T, NewsletterAggregateArgs>): Prisma.PrismaPromise<GetNewsletterAggregateType<T>>

    /**
     * Group by Newsletter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterGroupByArgs} args - Group by arguments.
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
      T extends NewsletterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsletterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Newsletter model
   */
  readonly fields: NewsletterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Newsletter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Newsletter model
   */
  interface NewsletterFieldRefs {
    readonly id: FieldRef<"Newsletter", 'Int'>
    readonly email: FieldRef<"Newsletter", 'String'>
    readonly accept_conditions: FieldRef<"Newsletter", 'Boolean'>
    readonly accepted_at: FieldRef<"Newsletter", 'DateTime'>
    readonly is_active: FieldRef<"Newsletter", 'Boolean'>
    readonly created_at: FieldRef<"Newsletter", 'DateTime'>
    readonly updated_at: FieldRef<"Newsletter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Newsletter findUnique
   */
  export type NewsletterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter findUniqueOrThrow
   */
  export type NewsletterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter findFirst
   */
  export type NewsletterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter findFirstOrThrow
   */
  export type NewsletterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter findMany
   */
  export type NewsletterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletters to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter create
   */
  export type NewsletterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data needed to create a Newsletter.
     */
    data: XOR<NewsletterCreateInput, NewsletterUncheckedCreateInput>
  }

  /**
   * Newsletter createMany
   */
  export type NewsletterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Newsletters.
     */
    data: NewsletterCreateManyInput | NewsletterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newsletter createManyAndReturn
   */
  export type NewsletterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data used to create many Newsletters.
     */
    data: NewsletterCreateManyInput | NewsletterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newsletter update
   */
  export type NewsletterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data needed to update a Newsletter.
     */
    data: XOR<NewsletterUpdateInput, NewsletterUncheckedUpdateInput>
    /**
     * Choose, which Newsletter to update.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter updateMany
   */
  export type NewsletterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Newsletters.
     */
    data: XOR<NewsletterUpdateManyMutationInput, NewsletterUncheckedUpdateManyInput>
    /**
     * Filter which Newsletters to update
     */
    where?: NewsletterWhereInput
    /**
     * Limit how many Newsletters to update.
     */
    limit?: number
  }

  /**
   * Newsletter updateManyAndReturn
   */
  export type NewsletterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data used to update Newsletters.
     */
    data: XOR<NewsletterUpdateManyMutationInput, NewsletterUncheckedUpdateManyInput>
    /**
     * Filter which Newsletters to update
     */
    where?: NewsletterWhereInput
    /**
     * Limit how many Newsletters to update.
     */
    limit?: number
  }

  /**
   * Newsletter upsert
   */
  export type NewsletterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The filter to search for the Newsletter to update in case it exists.
     */
    where: NewsletterWhereUniqueInput
    /**
     * In case the Newsletter found by the `where` argument doesn't exist, create a new Newsletter with this data.
     */
    create: XOR<NewsletterCreateInput, NewsletterUncheckedCreateInput>
    /**
     * In case the Newsletter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterUpdateInput, NewsletterUncheckedUpdateInput>
  }

  /**
   * Newsletter delete
   */
  export type NewsletterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter which Newsletter to delete.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter deleteMany
   */
  export type NewsletterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newsletters to delete
     */
    where?: NewsletterWhereInput
    /**
     * Limit how many Newsletters to delete.
     */
    limit?: number
  }

  /**
   * Newsletter without action
   */
  export type NewsletterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    email: 'email',
    phone: 'phone',
    password: 'password',
    picture: 'picture',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    cisCode: 'cisCode',
    name: 'name',
    pharmaceuticalForm: 'pharmaceuticalForm',
    administrationRoutes: 'administrationRoutes',
    marketingStatus: 'marketingStatus',
    holder: 'holder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const TreatmentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    medication_id: 'medication_id',
    dosage: 'dosage',
    frequency: 'frequency',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TreatmentScalarFieldEnum = (typeof TreatmentScalarFieldEnum)[keyof typeof TreatmentScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    medication_id: 'medication_id',
    quantity: 'quantity',
    location: 'location',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const UserCaregiverScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    caregiver_id: 'caregiver_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserCaregiverScalarFieldEnum = (typeof UserCaregiverScalarFieldEnum)[keyof typeof UserCaregiverScalarFieldEnum]


  export const IntakeScalarFieldEnum: {
    id: 'id',
    treatment_id: 'treatment_id',
    taken_at: 'taken_at',
    status: 'status',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IntakeScalarFieldEnum = (typeof IntakeScalarFieldEnum)[keyof typeof IntakeScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    type: 'type',
    description: 'description',
    file_path: 'file_path',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    location: 'location',
    start_time: 'start_time',
    end_time: 'end_time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const NewsletterScalarFieldEnum: {
    id: 'id',
    email: 'email',
    accept_conditions: 'accept_conditions',
    accepted_at: 'accepted_at',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NewsletterScalarFieldEnum = (typeof NewsletterScalarFieldEnum)[keyof typeof NewsletterScalarFieldEnum]


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
   * Reference to a field of type 'TreatmentStatus'
   */
  export type EnumTreatmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreatmentStatus'>
    


  /**
   * Reference to a field of type 'TreatmentStatus[]'
   */
  export type ListEnumTreatmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreatmentStatus[]'>
    


  /**
   * Reference to a field of type 'CaregiverStatus'
   */
  export type EnumCaregiverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaregiverStatus'>
    


  /**
   * Reference to a field of type 'CaregiverStatus[]'
   */
  export type ListEnumCaregiverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaregiverStatus[]'>
    


  /**
   * Reference to a field of type 'IntakeStatus'
   */
  export type EnumIntakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntakeStatus'>
    


  /**
   * Reference to a field of type 'IntakeStatus[]'
   */
  export type ListEnumIntakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntakeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    treatments?: TreatmentListRelationFilter
    stocks?: StockListRelationFilter
    documents?: DocumentListRelationFilter
    appointments?: AppointmentListRelationFilter
    patients?: UserCaregiverListRelationFilter
    caregivers?: UserCaregiverListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    picture?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    treatments?: TreatmentOrderByRelationAggregateInput
    stocks?: StockOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    patients?: UserCaregiverOrderByRelationAggregateInput
    caregivers?: UserCaregiverOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    treatments?: TreatmentListRelationFilter
    stocks?: StockListRelationFilter
    documents?: DocumentListRelationFilter
    appointments?: AppointmentListRelationFilter
    patients?: UserCaregiverListRelationFilter
    caregivers?: UserCaregiverListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    picture?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: IntFilter<"Medication"> | number
    cisCode?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    pharmaceuticalForm?: StringNullableFilter<"Medication"> | string | null
    administrationRoutes?: StringNullableFilter<"Medication"> | string | null
    marketingStatus?: StringNullableFilter<"Medication"> | string | null
    holder?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    treatments?: TreatmentListRelationFilter
    stocks?: StockListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    cisCode?: SortOrder
    name?: SortOrder
    pharmaceuticalForm?: SortOrderInput | SortOrder
    administrationRoutes?: SortOrderInput | SortOrder
    marketingStatus?: SortOrderInput | SortOrder
    holder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    treatments?: TreatmentOrderByRelationAggregateInput
    stocks?: StockOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cisCode?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    name?: StringFilter<"Medication"> | string
    pharmaceuticalForm?: StringNullableFilter<"Medication"> | string | null
    administrationRoutes?: StringNullableFilter<"Medication"> | string | null
    marketingStatus?: StringNullableFilter<"Medication"> | string | null
    holder?: StringNullableFilter<"Medication"> | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    treatments?: TreatmentListRelationFilter
    stocks?: StockListRelationFilter
  }, "id" | "cisCode">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    cisCode?: SortOrder
    name?: SortOrder
    pharmaceuticalForm?: SortOrderInput | SortOrder
    administrationRoutes?: SortOrderInput | SortOrder
    marketingStatus?: SortOrderInput | SortOrder
    holder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medication"> | number
    cisCode?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    pharmaceuticalForm?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    administrationRoutes?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    marketingStatus?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    holder?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type TreatmentWhereInput = {
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    id?: IntFilter<"Treatment"> | number
    user_id?: UuidFilter<"Treatment"> | string
    medication_id?: IntFilter<"Treatment"> | number
    dosage?: StringFilter<"Treatment"> | string
    frequency?: StringFilter<"Treatment"> | string
    start_date?: DateTimeFilter<"Treatment"> | Date | string
    end_date?: DateTimeNullableFilter<"Treatment"> | Date | string | null
    status?: EnumTreatmentStatusFilter<"Treatment"> | $Enums.TreatmentStatus
    created_at?: DateTimeFilter<"Treatment"> | Date | string
    updated_at?: DateTimeFilter<"Treatment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    intakes?: IntakeListRelationFilter
  }

  export type TreatmentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    medication?: MedicationOrderByWithRelationInput
    intakes?: IntakeOrderByRelationAggregateInput
  }

  export type TreatmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    user_id?: UuidFilter<"Treatment"> | string
    medication_id?: IntFilter<"Treatment"> | number
    dosage?: StringFilter<"Treatment"> | string
    frequency?: StringFilter<"Treatment"> | string
    start_date?: DateTimeFilter<"Treatment"> | Date | string
    end_date?: DateTimeNullableFilter<"Treatment"> | Date | string | null
    status?: EnumTreatmentStatusFilter<"Treatment"> | $Enums.TreatmentStatus
    created_at?: DateTimeFilter<"Treatment"> | Date | string
    updated_at?: DateTimeFilter<"Treatment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    intakes?: IntakeListRelationFilter
  }, "id">

  export type TreatmentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TreatmentCountOrderByAggregateInput
    _avg?: TreatmentAvgOrderByAggregateInput
    _max?: TreatmentMaxOrderByAggregateInput
    _min?: TreatmentMinOrderByAggregateInput
    _sum?: TreatmentSumOrderByAggregateInput
  }

  export type TreatmentScalarWhereWithAggregatesInput = {
    AND?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    OR?: TreatmentScalarWhereWithAggregatesInput[]
    NOT?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Treatment"> | number
    user_id?: UuidWithAggregatesFilter<"Treatment"> | string
    medication_id?: IntWithAggregatesFilter<"Treatment"> | number
    dosage?: StringWithAggregatesFilter<"Treatment"> | string
    frequency?: StringWithAggregatesFilter<"Treatment"> | string
    start_date?: DateTimeWithAggregatesFilter<"Treatment"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Treatment"> | Date | string | null
    status?: EnumTreatmentStatusWithAggregatesFilter<"Treatment"> | $Enums.TreatmentStatus
    created_at?: DateTimeWithAggregatesFilter<"Treatment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Treatment"> | Date | string
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: IntFilter<"Stock"> | number
    user_id?: UuidFilter<"Stock"> | string
    medication_id?: IntFilter<"Stock"> | number
    quantity?: IntFilter<"Stock"> | number
    location?: StringFilter<"Stock"> | string
    created_at?: DateTimeFilter<"Stock"> | Date | string
    updated_at?: DateTimeFilter<"Stock"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    medication?: MedicationOrderByWithRelationInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    user_id?: UuidFilter<"Stock"> | string
    medication_id?: IntFilter<"Stock"> | number
    quantity?: IntFilter<"Stock"> | number
    location?: StringFilter<"Stock"> | string
    created_at?: DateTimeFilter<"Stock"> | Date | string
    updated_at?: DateTimeFilter<"Stock"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }, "id">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stock"> | number
    user_id?: UuidWithAggregatesFilter<"Stock"> | string
    medication_id?: IntWithAggregatesFilter<"Stock"> | number
    quantity?: IntWithAggregatesFilter<"Stock"> | number
    location?: StringWithAggregatesFilter<"Stock"> | string
    created_at?: DateTimeWithAggregatesFilter<"Stock"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Stock"> | Date | string
  }

  export type UserCaregiverWhereInput = {
    AND?: UserCaregiverWhereInput | UserCaregiverWhereInput[]
    OR?: UserCaregiverWhereInput[]
    NOT?: UserCaregiverWhereInput | UserCaregiverWhereInput[]
    id?: IntFilter<"UserCaregiver"> | number
    user_id?: UuidFilter<"UserCaregiver"> | string
    caregiver_id?: UuidFilter<"UserCaregiver"> | string
    status?: EnumCaregiverStatusFilter<"UserCaregiver"> | $Enums.CaregiverStatus
    created_at?: DateTimeFilter<"UserCaregiver"> | Date | string
    updated_at?: DateTimeFilter<"UserCaregiver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    caregiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCaregiverOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    caregiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    caregiver?: UserOrderByWithRelationInput
  }

  export type UserCaregiverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCaregiverWhereInput | UserCaregiverWhereInput[]
    OR?: UserCaregiverWhereInput[]
    NOT?: UserCaregiverWhereInput | UserCaregiverWhereInput[]
    user_id?: UuidFilter<"UserCaregiver"> | string
    caregiver_id?: UuidFilter<"UserCaregiver"> | string
    status?: EnumCaregiverStatusFilter<"UserCaregiver"> | $Enums.CaregiverStatus
    created_at?: DateTimeFilter<"UserCaregiver"> | Date | string
    updated_at?: DateTimeFilter<"UserCaregiver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    caregiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserCaregiverOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    caregiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCaregiverCountOrderByAggregateInput
    _avg?: UserCaregiverAvgOrderByAggregateInput
    _max?: UserCaregiverMaxOrderByAggregateInput
    _min?: UserCaregiverMinOrderByAggregateInput
    _sum?: UserCaregiverSumOrderByAggregateInput
  }

  export type UserCaregiverScalarWhereWithAggregatesInput = {
    AND?: UserCaregiverScalarWhereWithAggregatesInput | UserCaregiverScalarWhereWithAggregatesInput[]
    OR?: UserCaregiverScalarWhereWithAggregatesInput[]
    NOT?: UserCaregiverScalarWhereWithAggregatesInput | UserCaregiverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCaregiver"> | number
    user_id?: UuidWithAggregatesFilter<"UserCaregiver"> | string
    caregiver_id?: UuidWithAggregatesFilter<"UserCaregiver"> | string
    status?: EnumCaregiverStatusWithAggregatesFilter<"UserCaregiver"> | $Enums.CaregiverStatus
    created_at?: DateTimeWithAggregatesFilter<"UserCaregiver"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserCaregiver"> | Date | string
  }

  export type IntakeWhereInput = {
    AND?: IntakeWhereInput | IntakeWhereInput[]
    OR?: IntakeWhereInput[]
    NOT?: IntakeWhereInput | IntakeWhereInput[]
    id?: IntFilter<"Intake"> | number
    treatment_id?: IntFilter<"Intake"> | number
    taken_at?: DateTimeNullableFilter<"Intake"> | Date | string | null
    status?: EnumIntakeStatusFilter<"Intake"> | $Enums.IntakeStatus
    note?: StringNullableFilter<"Intake"> | string | null
    created_at?: DateTimeFilter<"Intake"> | Date | string
    updated_at?: DateTimeFilter<"Intake"> | Date | string
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
  }

  export type IntakeOrderByWithRelationInput = {
    id?: SortOrder
    treatment_id?: SortOrder
    taken_at?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    treatment?: TreatmentOrderByWithRelationInput
  }

  export type IntakeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IntakeWhereInput | IntakeWhereInput[]
    OR?: IntakeWhereInput[]
    NOT?: IntakeWhereInput | IntakeWhereInput[]
    treatment_id?: IntFilter<"Intake"> | number
    taken_at?: DateTimeNullableFilter<"Intake"> | Date | string | null
    status?: EnumIntakeStatusFilter<"Intake"> | $Enums.IntakeStatus
    note?: StringNullableFilter<"Intake"> | string | null
    created_at?: DateTimeFilter<"Intake"> | Date | string
    updated_at?: DateTimeFilter<"Intake"> | Date | string
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
  }, "id">

  export type IntakeOrderByWithAggregationInput = {
    id?: SortOrder
    treatment_id?: SortOrder
    taken_at?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: IntakeCountOrderByAggregateInput
    _avg?: IntakeAvgOrderByAggregateInput
    _max?: IntakeMaxOrderByAggregateInput
    _min?: IntakeMinOrderByAggregateInput
    _sum?: IntakeSumOrderByAggregateInput
  }

  export type IntakeScalarWhereWithAggregatesInput = {
    AND?: IntakeScalarWhereWithAggregatesInput | IntakeScalarWhereWithAggregatesInput[]
    OR?: IntakeScalarWhereWithAggregatesInput[]
    NOT?: IntakeScalarWhereWithAggregatesInput | IntakeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Intake"> | number
    treatment_id?: IntWithAggregatesFilter<"Intake"> | number
    taken_at?: DateTimeNullableWithAggregatesFilter<"Intake"> | Date | string | null
    status?: EnumIntakeStatusWithAggregatesFilter<"Intake"> | $Enums.IntakeStatus
    note?: StringNullableWithAggregatesFilter<"Intake"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Intake"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Intake"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    user_id?: UuidFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    file_path?: StringFilter<"Document"> | string
    created_at?: DateTimeFilter<"Document"> | Date | string
    updated_at?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    user_id?: UuidFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    file_path?: StringFilter<"Document"> | string
    created_at?: DateTimeFilter<"Document"> | Date | string
    updated_at?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    user_id?: UuidWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    description?: StringNullableWithAggregatesFilter<"Document"> | string | null
    file_path?: StringWithAggregatesFilter<"Document"> | string
    created_at?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    user_id?: UuidFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    start_time?: DateTimeFilter<"Appointment"> | Date | string
    end_time?: DateTimeFilter<"Appointment"> | Date | string
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    user_id?: UuidFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    start_time?: DateTimeFilter<"Appointment"> | Date | string
    end_time?: DateTimeFilter<"Appointment"> | Date | string
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    user_id?: UuidWithAggregatesFilter<"Appointment"> | string
    title?: StringWithAggregatesFilter<"Appointment"> | string
    description?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    location?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    start_time?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type NewsletterWhereInput = {
    AND?: NewsletterWhereInput | NewsletterWhereInput[]
    OR?: NewsletterWhereInput[]
    NOT?: NewsletterWhereInput | NewsletterWhereInput[]
    id?: IntFilter<"Newsletter"> | number
    email?: StringFilter<"Newsletter"> | string
    accept_conditions?: BoolFilter<"Newsletter"> | boolean
    accepted_at?: DateTimeNullableFilter<"Newsletter"> | Date | string | null
    is_active?: BoolFilter<"Newsletter"> | boolean
    created_at?: DateTimeFilter<"Newsletter"> | Date | string
    updated_at?: DateTimeFilter<"Newsletter"> | Date | string
  }

  export type NewsletterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    accept_conditions?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NewsletterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: NewsletterWhereInput | NewsletterWhereInput[]
    OR?: NewsletterWhereInput[]
    NOT?: NewsletterWhereInput | NewsletterWhereInput[]
    accept_conditions?: BoolFilter<"Newsletter"> | boolean
    accepted_at?: DateTimeNullableFilter<"Newsletter"> | Date | string | null
    is_active?: BoolFilter<"Newsletter"> | boolean
    created_at?: DateTimeFilter<"Newsletter"> | Date | string
    updated_at?: DateTimeFilter<"Newsletter"> | Date | string
  }, "id" | "email">

  export type NewsletterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    accept_conditions?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: NewsletterCountOrderByAggregateInput
    _avg?: NewsletterAvgOrderByAggregateInput
    _max?: NewsletterMaxOrderByAggregateInput
    _min?: NewsletterMinOrderByAggregateInput
    _sum?: NewsletterSumOrderByAggregateInput
  }

  export type NewsletterScalarWhereWithAggregatesInput = {
    AND?: NewsletterScalarWhereWithAggregatesInput | NewsletterScalarWhereWithAggregatesInput[]
    OR?: NewsletterScalarWhereWithAggregatesInput[]
    NOT?: NewsletterScalarWhereWithAggregatesInput | NewsletterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Newsletter"> | number
    email?: StringWithAggregatesFilter<"Newsletter"> | string
    accept_conditions?: BoolWithAggregatesFilter<"Newsletter"> | boolean
    accepted_at?: DateTimeNullableWithAggregatesFilter<"Newsletter"> | Date | string | null
    is_active?: BoolWithAggregatesFilter<"Newsletter"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Newsletter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Newsletter"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentCreateNestedManyWithoutUserInput
    stocks?: StockCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    patients?: UserCaregiverCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverCreateNestedManyWithoutCaregiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentUncheckedCreateNestedManyWithoutUserInput
    stocks?: StockUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    patients?: UserCaregiverUncheckedCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUpdateManyWithoutUserNestedInput
    stocks?: StockUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUncheckedUpdateManyWithoutUserNestedInput
    stocks?: StockUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUncheckedUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicationCreateInput = {
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatments?: TreatmentCreateNestedManyWithoutMedicationInput
    stocks?: StockCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: number
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatments?: TreatmentUncheckedCreateNestedManyWithoutMedicationInput
    stocks?: StockUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatments?: TreatmentUpdateManyWithoutMedicationNestedInput
    stocks?: StockUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatments?: TreatmentUncheckedUpdateManyWithoutMedicationNestedInput
    stocks?: StockUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: number
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentCreateInput = {
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTreatmentsInput
    medication: MedicationCreateNestedOneWithoutTreatmentsInput
    intakes?: IntakeCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateInput = {
    id?: number
    user_id: string
    medication_id: number
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    intakes?: IntakeUncheckedCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUpdateInput = {
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTreatmentsNestedInput
    medication?: MedicationUpdateOneRequiredWithoutTreatmentsNestedInput
    intakes?: IntakeUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medication_id?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    intakes?: IntakeUncheckedUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentCreateManyInput = {
    id?: number
    user_id: string
    medication_id: number
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TreatmentUpdateManyMutationInput = {
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medication_id?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateInput = {
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutStocksInput
    medication: MedicationCreateNestedOneWithoutStocksInput
  }

  export type StockUncheckedCreateInput = {
    id?: number
    user_id: string
    medication_id: number
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStocksNestedInput
    medication?: MedicationUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medication_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateManyInput = {
    id?: number
    user_id: string
    medication_id: number
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medication_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverCreateInput = {
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPatientsInput
    caregiver: UserCreateNestedOneWithoutCaregiversInput
  }

  export type UserCaregiverUncheckedCreateInput = {
    id?: number
    user_id: string
    caregiver_id: string
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCaregiverUpdateInput = {
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientsNestedInput
    caregiver?: UserUpdateOneRequiredWithoutCaregiversNestedInput
  }

  export type UserCaregiverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverCreateManyInput = {
    id?: number
    user_id: string
    caregiver_id: string
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCaregiverUpdateManyMutationInput = {
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeCreateInput = {
    taken_at?: Date | string | null
    status?: $Enums.IntakeStatus
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    treatment: TreatmentCreateNestedOneWithoutIntakesInput
  }

  export type IntakeUncheckedCreateInput = {
    id?: number
    treatment_id: number
    taken_at?: Date | string | null
    status?: $Enums.IntakeStatus
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IntakeUpdateInput = {
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    treatment?: TreatmentUpdateOneRequiredWithoutIntakesNestedInput
  }

  export type IntakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    treatment_id?: IntFieldUpdateOperationsInput | number
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeCreateManyInput = {
    id?: number
    treatment_id: number
    taken_at?: Date | string | null
    status?: $Enums.IntakeStatus
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IntakeUpdateManyMutationInput = {
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    treatment_id?: IntFieldUpdateOperationsInput | number
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    name: string
    type: string
    description?: string | null
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    type: string
    description?: string | null
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: number
    user_id: string
    name: string
    type: string
    description?: string | null
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    title: string
    description?: string | null
    location?: string | null
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    user_id: string
    title: string
    description?: string | null
    location?: string | null
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    user_id: string
    title: string
    description?: string | null
    location?: string | null
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterCreateInput = {
    email: string
    accept_conditions?: boolean
    accepted_at?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NewsletterUncheckedCreateInput = {
    id?: number
    email: string
    accept_conditions?: boolean
    accepted_at?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NewsletterUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    accept_conditions?: BoolFieldUpdateOperationsInput | boolean
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accept_conditions?: BoolFieldUpdateOperationsInput | boolean
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterCreateManyInput = {
    id?: number
    email: string
    accept_conditions?: boolean
    accepted_at?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NewsletterUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    accept_conditions?: BoolFieldUpdateOperationsInput | boolean
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accept_conditions?: BoolFieldUpdateOperationsInput | boolean
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TreatmentListRelationFilter = {
    every?: TreatmentWhereInput
    some?: TreatmentWhereInput
    none?: TreatmentWhereInput
  }

  export type StockListRelationFilter = {
    every?: StockWhereInput
    some?: StockWhereInput
    none?: StockWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type UserCaregiverListRelationFilter = {
    every?: UserCaregiverWhereInput
    some?: UserCaregiverWhereInput
    none?: UserCaregiverWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TreatmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCaregiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    cisCode?: SortOrder
    name?: SortOrder
    pharmaceuticalForm?: SortOrder
    administrationRoutes?: SortOrder
    marketingStatus?: SortOrder
    holder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    cisCode?: SortOrder
    name?: SortOrder
    pharmaceuticalForm?: SortOrder
    administrationRoutes?: SortOrder
    marketingStatus?: SortOrder
    holder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    cisCode?: SortOrder
    name?: SortOrder
    pharmaceuticalForm?: SortOrder
    administrationRoutes?: SortOrder
    marketingStatus?: SortOrder
    holder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumTreatmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentStatus | EnumTreatmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreatmentStatusFilter<$PrismaModel> | $Enums.TreatmentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type IntakeListRelationFilter = {
    every?: IntakeWhereInput
    some?: IntakeWhereInput
    none?: IntakeWhereInput
  }

  export type IntakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TreatmentAvgOrderByAggregateInput = {
    id?: SortOrder
    medication_id?: SortOrder
  }

  export type TreatmentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TreatmentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TreatmentSumOrderByAggregateInput = {
    id?: SortOrder
    medication_id?: SortOrder
  }

  export type EnumTreatmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentStatus | EnumTreatmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreatmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TreatmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreatmentStatusFilter<$PrismaModel>
    _max?: NestedEnumTreatmentStatusFilter<$PrismaModel>
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    id?: SortOrder
    medication_id?: SortOrder
    quantity?: SortOrder
  }

  export type EnumCaregiverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaregiverStatus | EnumCaregiverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaregiverStatusFilter<$PrismaModel> | $Enums.CaregiverStatus
  }

  export type UserCaregiverCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    caregiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCaregiverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCaregiverMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    caregiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCaregiverMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    caregiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCaregiverSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCaregiverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaregiverStatus | EnumCaregiverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaregiverStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaregiverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaregiverStatusFilter<$PrismaModel>
    _max?: NestedEnumCaregiverStatusFilter<$PrismaModel>
  }

  export type EnumIntakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusFilter<$PrismaModel> | $Enums.IntakeStatus
  }

  export type TreatmentScalarRelationFilter = {
    is?: TreatmentWhereInput
    isNot?: TreatmentWhereInput
  }

  export type IntakeCountOrderByAggregateInput = {
    id?: SortOrder
    treatment_id?: SortOrder
    taken_at?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntakeAvgOrderByAggregateInput = {
    id?: SortOrder
    treatment_id?: SortOrder
  }

  export type IntakeMaxOrderByAggregateInput = {
    id?: SortOrder
    treatment_id?: SortOrder
    taken_at?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntakeMinOrderByAggregateInput = {
    id?: SortOrder
    treatment_id?: SortOrder
    taken_at?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntakeSumOrderByAggregateInput = {
    id?: SortOrder
    treatment_id?: SortOrder
  }

  export type EnumIntakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntakeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntakeStatusFilter<$PrismaModel>
    _max?: NestedEnumIntakeStatusFilter<$PrismaModel>
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsletterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accept_conditions?: SortOrder
    accepted_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NewsletterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsletterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accept_conditions?: SortOrder
    accepted_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NewsletterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accept_conditions?: SortOrder
    accepted_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NewsletterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TreatmentCreateNestedManyWithoutUserInput = {
    create?: XOR<TreatmentCreateWithoutUserInput, TreatmentUncheckedCreateWithoutUserInput> | TreatmentCreateWithoutUserInput[] | TreatmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutUserInput | TreatmentCreateOrConnectWithoutUserInput[]
    createMany?: TreatmentCreateManyUserInputEnvelope
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
  }

  export type StockCreateNestedManyWithoutUserInput = {
    create?: XOR<StockCreateWithoutUserInput, StockUncheckedCreateWithoutUserInput> | StockCreateWithoutUserInput[] | StockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockCreateOrConnectWithoutUserInput | StockCreateOrConnectWithoutUserInput[]
    createMany?: StockCreateManyUserInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserCaregiverCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCaregiverCreateWithoutUserInput, UserCaregiverUncheckedCreateWithoutUserInput> | UserCaregiverCreateWithoutUserInput[] | UserCaregiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutUserInput | UserCaregiverCreateOrConnectWithoutUserInput[]
    createMany?: UserCaregiverCreateManyUserInputEnvelope
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
  }

  export type UserCaregiverCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<UserCaregiverCreateWithoutCaregiverInput, UserCaregiverUncheckedCreateWithoutCaregiverInput> | UserCaregiverCreateWithoutCaregiverInput[] | UserCaregiverUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutCaregiverInput | UserCaregiverCreateOrConnectWithoutCaregiverInput[]
    createMany?: UserCaregiverCreateManyCaregiverInputEnvelope
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
  }

  export type TreatmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TreatmentCreateWithoutUserInput, TreatmentUncheckedCreateWithoutUserInput> | TreatmentCreateWithoutUserInput[] | TreatmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutUserInput | TreatmentCreateOrConnectWithoutUserInput[]
    createMany?: TreatmentCreateManyUserInputEnvelope
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StockCreateWithoutUserInput, StockUncheckedCreateWithoutUserInput> | StockCreateWithoutUserInput[] | StockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockCreateOrConnectWithoutUserInput | StockCreateOrConnectWithoutUserInput[]
    createMany?: StockCreateManyUserInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserCaregiverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCaregiverCreateWithoutUserInput, UserCaregiverUncheckedCreateWithoutUserInput> | UserCaregiverCreateWithoutUserInput[] | UserCaregiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutUserInput | UserCaregiverCreateOrConnectWithoutUserInput[]
    createMany?: UserCaregiverCreateManyUserInputEnvelope
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
  }

  export type UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<UserCaregiverCreateWithoutCaregiverInput, UserCaregiverUncheckedCreateWithoutCaregiverInput> | UserCaregiverCreateWithoutCaregiverInput[] | UserCaregiverUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutCaregiverInput | UserCaregiverCreateOrConnectWithoutCaregiverInput[]
    createMany?: UserCaregiverCreateManyCaregiverInputEnvelope
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TreatmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreatmentCreateWithoutUserInput, TreatmentUncheckedCreateWithoutUserInput> | TreatmentCreateWithoutUserInput[] | TreatmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutUserInput | TreatmentCreateOrConnectWithoutUserInput[]
    upsert?: TreatmentUpsertWithWhereUniqueWithoutUserInput | TreatmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreatmentCreateManyUserInputEnvelope
    set?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    disconnect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    delete?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    update?: TreatmentUpdateWithWhereUniqueWithoutUserInput | TreatmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreatmentUpdateManyWithWhereWithoutUserInput | TreatmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
  }

  export type StockUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockCreateWithoutUserInput, StockUncheckedCreateWithoutUserInput> | StockCreateWithoutUserInput[] | StockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockCreateOrConnectWithoutUserInput | StockCreateOrConnectWithoutUserInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutUserInput | StockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockCreateManyUserInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutUserInput | StockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockUpdateManyWithWhereWithoutUserInput | StockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCaregiverUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCaregiverCreateWithoutUserInput, UserCaregiverUncheckedCreateWithoutUserInput> | UserCaregiverCreateWithoutUserInput[] | UserCaregiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutUserInput | UserCaregiverCreateOrConnectWithoutUserInput[]
    upsert?: UserCaregiverUpsertWithWhereUniqueWithoutUserInput | UserCaregiverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCaregiverCreateManyUserInputEnvelope
    set?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    disconnect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    delete?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    update?: UserCaregiverUpdateWithWhereUniqueWithoutUserInput | UserCaregiverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCaregiverUpdateManyWithWhereWithoutUserInput | UserCaregiverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCaregiverScalarWhereInput | UserCaregiverScalarWhereInput[]
  }

  export type UserCaregiverUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<UserCaregiverCreateWithoutCaregiverInput, UserCaregiverUncheckedCreateWithoutCaregiverInput> | UserCaregiverCreateWithoutCaregiverInput[] | UserCaregiverUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutCaregiverInput | UserCaregiverCreateOrConnectWithoutCaregiverInput[]
    upsert?: UserCaregiverUpsertWithWhereUniqueWithoutCaregiverInput | UserCaregiverUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: UserCaregiverCreateManyCaregiverInputEnvelope
    set?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    disconnect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    delete?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    update?: UserCaregiverUpdateWithWhereUniqueWithoutCaregiverInput | UserCaregiverUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: UserCaregiverUpdateManyWithWhereWithoutCaregiverInput | UserCaregiverUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: UserCaregiverScalarWhereInput | UserCaregiverScalarWhereInput[]
  }

  export type TreatmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreatmentCreateWithoutUserInput, TreatmentUncheckedCreateWithoutUserInput> | TreatmentCreateWithoutUserInput[] | TreatmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutUserInput | TreatmentCreateOrConnectWithoutUserInput[]
    upsert?: TreatmentUpsertWithWhereUniqueWithoutUserInput | TreatmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreatmentCreateManyUserInputEnvelope
    set?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    disconnect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    delete?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    update?: TreatmentUpdateWithWhereUniqueWithoutUserInput | TreatmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreatmentUpdateManyWithWhereWithoutUserInput | TreatmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockCreateWithoutUserInput, StockUncheckedCreateWithoutUserInput> | StockCreateWithoutUserInput[] | StockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockCreateOrConnectWithoutUserInput | StockCreateOrConnectWithoutUserInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutUserInput | StockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockCreateManyUserInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutUserInput | StockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockUpdateManyWithWhereWithoutUserInput | StockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCaregiverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCaregiverCreateWithoutUserInput, UserCaregiverUncheckedCreateWithoutUserInput> | UserCaregiverCreateWithoutUserInput[] | UserCaregiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutUserInput | UserCaregiverCreateOrConnectWithoutUserInput[]
    upsert?: UserCaregiverUpsertWithWhereUniqueWithoutUserInput | UserCaregiverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCaregiverCreateManyUserInputEnvelope
    set?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    disconnect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    delete?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    update?: UserCaregiverUpdateWithWhereUniqueWithoutUserInput | UserCaregiverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCaregiverUpdateManyWithWhereWithoutUserInput | UserCaregiverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCaregiverScalarWhereInput | UserCaregiverScalarWhereInput[]
  }

  export type UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<UserCaregiverCreateWithoutCaregiverInput, UserCaregiverUncheckedCreateWithoutCaregiverInput> | UserCaregiverCreateWithoutCaregiverInput[] | UserCaregiverUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: UserCaregiverCreateOrConnectWithoutCaregiverInput | UserCaregiverCreateOrConnectWithoutCaregiverInput[]
    upsert?: UserCaregiverUpsertWithWhereUniqueWithoutCaregiverInput | UserCaregiverUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: UserCaregiverCreateManyCaregiverInputEnvelope
    set?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    disconnect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    delete?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    connect?: UserCaregiverWhereUniqueInput | UserCaregiverWhereUniqueInput[]
    update?: UserCaregiverUpdateWithWhereUniqueWithoutCaregiverInput | UserCaregiverUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: UserCaregiverUpdateManyWithWhereWithoutCaregiverInput | UserCaregiverUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: UserCaregiverScalarWhereInput | UserCaregiverScalarWhereInput[]
  }

  export type TreatmentCreateNestedManyWithoutMedicationInput = {
    create?: XOR<TreatmentCreateWithoutMedicationInput, TreatmentUncheckedCreateWithoutMedicationInput> | TreatmentCreateWithoutMedicationInput[] | TreatmentUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutMedicationInput | TreatmentCreateOrConnectWithoutMedicationInput[]
    createMany?: TreatmentCreateManyMedicationInputEnvelope
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
  }

  export type StockCreateNestedManyWithoutMedicationInput = {
    create?: XOR<StockCreateWithoutMedicationInput, StockUncheckedCreateWithoutMedicationInput> | StockCreateWithoutMedicationInput[] | StockUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMedicationInput | StockCreateOrConnectWithoutMedicationInput[]
    createMany?: StockCreateManyMedicationInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type TreatmentUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<TreatmentCreateWithoutMedicationInput, TreatmentUncheckedCreateWithoutMedicationInput> | TreatmentCreateWithoutMedicationInput[] | TreatmentUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutMedicationInput | TreatmentCreateOrConnectWithoutMedicationInput[]
    createMany?: TreatmentCreateManyMedicationInputEnvelope
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<StockCreateWithoutMedicationInput, StockUncheckedCreateWithoutMedicationInput> | StockCreateWithoutMedicationInput[] | StockUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMedicationInput | StockCreateOrConnectWithoutMedicationInput[]
    createMany?: StockCreateManyMedicationInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type TreatmentUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<TreatmentCreateWithoutMedicationInput, TreatmentUncheckedCreateWithoutMedicationInput> | TreatmentCreateWithoutMedicationInput[] | TreatmentUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutMedicationInput | TreatmentCreateOrConnectWithoutMedicationInput[]
    upsert?: TreatmentUpsertWithWhereUniqueWithoutMedicationInput | TreatmentUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: TreatmentCreateManyMedicationInputEnvelope
    set?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    disconnect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    delete?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    update?: TreatmentUpdateWithWhereUniqueWithoutMedicationInput | TreatmentUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: TreatmentUpdateManyWithWhereWithoutMedicationInput | TreatmentUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
  }

  export type StockUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<StockCreateWithoutMedicationInput, StockUncheckedCreateWithoutMedicationInput> | StockCreateWithoutMedicationInput[] | StockUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMedicationInput | StockCreateOrConnectWithoutMedicationInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutMedicationInput | StockUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: StockCreateManyMedicationInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutMedicationInput | StockUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: StockUpdateManyWithWhereWithoutMedicationInput | StockUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TreatmentUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<TreatmentCreateWithoutMedicationInput, TreatmentUncheckedCreateWithoutMedicationInput> | TreatmentCreateWithoutMedicationInput[] | TreatmentUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: TreatmentCreateOrConnectWithoutMedicationInput | TreatmentCreateOrConnectWithoutMedicationInput[]
    upsert?: TreatmentUpsertWithWhereUniqueWithoutMedicationInput | TreatmentUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: TreatmentCreateManyMedicationInputEnvelope
    set?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    disconnect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    delete?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    connect?: TreatmentWhereUniqueInput | TreatmentWhereUniqueInput[]
    update?: TreatmentUpdateWithWhereUniqueWithoutMedicationInput | TreatmentUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: TreatmentUpdateManyWithWhereWithoutMedicationInput | TreatmentUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<StockCreateWithoutMedicationInput, StockUncheckedCreateWithoutMedicationInput> | StockCreateWithoutMedicationInput[] | StockUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMedicationInput | StockCreateOrConnectWithoutMedicationInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutMedicationInput | StockUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: StockCreateManyMedicationInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutMedicationInput | StockUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: StockUpdateManyWithWhereWithoutMedicationInput | StockUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTreatmentsInput = {
    create?: XOR<UserCreateWithoutTreatmentsInput, UserUncheckedCreateWithoutTreatmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreatmentsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutTreatmentsInput = {
    create?: XOR<MedicationCreateWithoutTreatmentsInput, MedicationUncheckedCreateWithoutTreatmentsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutTreatmentsInput
    connect?: MedicationWhereUniqueInput
  }

  export type IntakeCreateNestedManyWithoutTreatmentInput = {
    create?: XOR<IntakeCreateWithoutTreatmentInput, IntakeUncheckedCreateWithoutTreatmentInput> | IntakeCreateWithoutTreatmentInput[] | IntakeUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: IntakeCreateOrConnectWithoutTreatmentInput | IntakeCreateOrConnectWithoutTreatmentInput[]
    createMany?: IntakeCreateManyTreatmentInputEnvelope
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
  }

  export type IntakeUncheckedCreateNestedManyWithoutTreatmentInput = {
    create?: XOR<IntakeCreateWithoutTreatmentInput, IntakeUncheckedCreateWithoutTreatmentInput> | IntakeCreateWithoutTreatmentInput[] | IntakeUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: IntakeCreateOrConnectWithoutTreatmentInput | IntakeCreateOrConnectWithoutTreatmentInput[]
    createMany?: IntakeCreateManyTreatmentInputEnvelope
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
  }

  export type EnumTreatmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TreatmentStatus
  }

  export type UserUpdateOneRequiredWithoutTreatmentsNestedInput = {
    create?: XOR<UserCreateWithoutTreatmentsInput, UserUncheckedCreateWithoutTreatmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreatmentsInput
    upsert?: UserUpsertWithoutTreatmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreatmentsInput, UserUpdateWithoutTreatmentsInput>, UserUncheckedUpdateWithoutTreatmentsInput>
  }

  export type MedicationUpdateOneRequiredWithoutTreatmentsNestedInput = {
    create?: XOR<MedicationCreateWithoutTreatmentsInput, MedicationUncheckedCreateWithoutTreatmentsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutTreatmentsInput
    upsert?: MedicationUpsertWithoutTreatmentsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutTreatmentsInput, MedicationUpdateWithoutTreatmentsInput>, MedicationUncheckedUpdateWithoutTreatmentsInput>
  }

  export type IntakeUpdateManyWithoutTreatmentNestedInput = {
    create?: XOR<IntakeCreateWithoutTreatmentInput, IntakeUncheckedCreateWithoutTreatmentInput> | IntakeCreateWithoutTreatmentInput[] | IntakeUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: IntakeCreateOrConnectWithoutTreatmentInput | IntakeCreateOrConnectWithoutTreatmentInput[]
    upsert?: IntakeUpsertWithWhereUniqueWithoutTreatmentInput | IntakeUpsertWithWhereUniqueWithoutTreatmentInput[]
    createMany?: IntakeCreateManyTreatmentInputEnvelope
    set?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    disconnect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    delete?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    update?: IntakeUpdateWithWhereUniqueWithoutTreatmentInput | IntakeUpdateWithWhereUniqueWithoutTreatmentInput[]
    updateMany?: IntakeUpdateManyWithWhereWithoutTreatmentInput | IntakeUpdateManyWithWhereWithoutTreatmentInput[]
    deleteMany?: IntakeScalarWhereInput | IntakeScalarWhereInput[]
  }

  export type IntakeUncheckedUpdateManyWithoutTreatmentNestedInput = {
    create?: XOR<IntakeCreateWithoutTreatmentInput, IntakeUncheckedCreateWithoutTreatmentInput> | IntakeCreateWithoutTreatmentInput[] | IntakeUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: IntakeCreateOrConnectWithoutTreatmentInput | IntakeCreateOrConnectWithoutTreatmentInput[]
    upsert?: IntakeUpsertWithWhereUniqueWithoutTreatmentInput | IntakeUpsertWithWhereUniqueWithoutTreatmentInput[]
    createMany?: IntakeCreateManyTreatmentInputEnvelope
    set?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    disconnect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    delete?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[]
    update?: IntakeUpdateWithWhereUniqueWithoutTreatmentInput | IntakeUpdateWithWhereUniqueWithoutTreatmentInput[]
    updateMany?: IntakeUpdateManyWithWhereWithoutTreatmentInput | IntakeUpdateManyWithWhereWithoutTreatmentInput[]
    deleteMany?: IntakeScalarWhereInput | IntakeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStocksInput = {
    create?: XOR<UserCreateWithoutStocksInput, UserUncheckedCreateWithoutStocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutStocksInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutStocksInput = {
    create?: XOR<MedicationCreateWithoutStocksInput, MedicationUncheckedCreateWithoutStocksInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutStocksInput
    connect?: MedicationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<UserCreateWithoutStocksInput, UserUncheckedCreateWithoutStocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutStocksInput
    upsert?: UserUpsertWithoutStocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStocksInput, UserUpdateWithoutStocksInput>, UserUncheckedUpdateWithoutStocksInput>
  }

  export type MedicationUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<MedicationCreateWithoutStocksInput, MedicationUncheckedCreateWithoutStocksInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutStocksInput
    upsert?: MedicationUpsertWithoutStocksInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutStocksInput, MedicationUpdateWithoutStocksInput>, MedicationUncheckedUpdateWithoutStocksInput>
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCaregiversInput = {
    create?: XOR<UserCreateWithoutCaregiversInput, UserUncheckedCreateWithoutCaregiversInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaregiversInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCaregiverStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaregiverStatus
  }

  export type UserUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientsInput, UserUpdateWithoutPatientsInput>, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateOneRequiredWithoutCaregiversNestedInput = {
    create?: XOR<UserCreateWithoutCaregiversInput, UserUncheckedCreateWithoutCaregiversInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaregiversInput
    upsert?: UserUpsertWithoutCaregiversInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCaregiversInput, UserUpdateWithoutCaregiversInput>, UserUncheckedUpdateWithoutCaregiversInput>
  }

  export type TreatmentCreateNestedOneWithoutIntakesInput = {
    create?: XOR<TreatmentCreateWithoutIntakesInput, TreatmentUncheckedCreateWithoutIntakesInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutIntakesInput
    connect?: TreatmentWhereUniqueInput
  }

  export type EnumIntakeStatusFieldUpdateOperationsInput = {
    set?: $Enums.IntakeStatus
  }

  export type TreatmentUpdateOneRequiredWithoutIntakesNestedInput = {
    create?: XOR<TreatmentCreateWithoutIntakesInput, TreatmentUncheckedCreateWithoutIntakesInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutIntakesInput
    upsert?: TreatmentUpsertWithoutIntakesInput
    connect?: TreatmentWhereUniqueInput
    update?: XOR<XOR<TreatmentUpdateToOneWithWhereWithoutIntakesInput, TreatmentUpdateWithoutIntakesInput>, TreatmentUncheckedUpdateWithoutIntakesInput>
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTreatmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentStatus | EnumTreatmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreatmentStatusFilter<$PrismaModel> | $Enums.TreatmentStatus
  }

  export type NestedEnumTreatmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentStatus | EnumTreatmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreatmentStatus[] | ListEnumTreatmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreatmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TreatmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreatmentStatusFilter<$PrismaModel>
    _max?: NestedEnumTreatmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumCaregiverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaregiverStatus | EnumCaregiverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaregiverStatusFilter<$PrismaModel> | $Enums.CaregiverStatus
  }

  export type NestedEnumCaregiverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaregiverStatus | EnumCaregiverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaregiverStatus[] | ListEnumCaregiverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaregiverStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaregiverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaregiverStatusFilter<$PrismaModel>
    _max?: NestedEnumCaregiverStatusFilter<$PrismaModel>
  }

  export type NestedEnumIntakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusFilter<$PrismaModel> | $Enums.IntakeStatus
  }

  export type NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntakeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntakeStatusFilter<$PrismaModel>
    _max?: NestedEnumIntakeStatusFilter<$PrismaModel>
  }

  export type TreatmentCreateWithoutUserInput = {
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    medication: MedicationCreateNestedOneWithoutTreatmentsInput
    intakes?: IntakeCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateWithoutUserInput = {
    id?: number
    medication_id: number
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    intakes?: IntakeUncheckedCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentCreateOrConnectWithoutUserInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutUserInput, TreatmentUncheckedCreateWithoutUserInput>
  }

  export type TreatmentCreateManyUserInputEnvelope = {
    data: TreatmentCreateManyUserInput | TreatmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StockCreateWithoutUserInput = {
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
    medication: MedicationCreateNestedOneWithoutStocksInput
  }

  export type StockUncheckedCreateWithoutUserInput = {
    id?: number
    medication_id: number
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockCreateOrConnectWithoutUserInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutUserInput, StockUncheckedCreateWithoutUserInput>
  }

  export type StockCreateManyUserInputEnvelope = {
    data: StockCreateManyUserInput | StockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutUserInput = {
    name: string
    type: string
    description?: string | null
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutUserInput = {
    title: string
    description?: string | null
    location?: string | null
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCaregiverCreateWithoutUserInput = {
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
    caregiver: UserCreateNestedOneWithoutCaregiversInput
  }

  export type UserCaregiverUncheckedCreateWithoutUserInput = {
    id?: number
    caregiver_id: string
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCaregiverCreateOrConnectWithoutUserInput = {
    where: UserCaregiverWhereUniqueInput
    create: XOR<UserCaregiverCreateWithoutUserInput, UserCaregiverUncheckedCreateWithoutUserInput>
  }

  export type UserCaregiverCreateManyUserInputEnvelope = {
    data: UserCaregiverCreateManyUserInput | UserCaregiverCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCaregiverCreateWithoutCaregiverInput = {
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPatientsInput
  }

  export type UserCaregiverUncheckedCreateWithoutCaregiverInput = {
    id?: number
    user_id: string
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCaregiverCreateOrConnectWithoutCaregiverInput = {
    where: UserCaregiverWhereUniqueInput
    create: XOR<UserCaregiverCreateWithoutCaregiverInput, UserCaregiverUncheckedCreateWithoutCaregiverInput>
  }

  export type UserCaregiverCreateManyCaregiverInputEnvelope = {
    data: UserCaregiverCreateManyCaregiverInput | UserCaregiverCreateManyCaregiverInput[]
    skipDuplicates?: boolean
  }

  export type TreatmentUpsertWithWhereUniqueWithoutUserInput = {
    where: TreatmentWhereUniqueInput
    update: XOR<TreatmentUpdateWithoutUserInput, TreatmentUncheckedUpdateWithoutUserInput>
    create: XOR<TreatmentCreateWithoutUserInput, TreatmentUncheckedCreateWithoutUserInput>
  }

  export type TreatmentUpdateWithWhereUniqueWithoutUserInput = {
    where: TreatmentWhereUniqueInput
    data: XOR<TreatmentUpdateWithoutUserInput, TreatmentUncheckedUpdateWithoutUserInput>
  }

  export type TreatmentUpdateManyWithWhereWithoutUserInput = {
    where: TreatmentScalarWhereInput
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyWithoutUserInput>
  }

  export type TreatmentScalarWhereInput = {
    AND?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
    OR?: TreatmentScalarWhereInput[]
    NOT?: TreatmentScalarWhereInput | TreatmentScalarWhereInput[]
    id?: IntFilter<"Treatment"> | number
    user_id?: UuidFilter<"Treatment"> | string
    medication_id?: IntFilter<"Treatment"> | number
    dosage?: StringFilter<"Treatment"> | string
    frequency?: StringFilter<"Treatment"> | string
    start_date?: DateTimeFilter<"Treatment"> | Date | string
    end_date?: DateTimeNullableFilter<"Treatment"> | Date | string | null
    status?: EnumTreatmentStatusFilter<"Treatment"> | $Enums.TreatmentStatus
    created_at?: DateTimeFilter<"Treatment"> | Date | string
    updated_at?: DateTimeFilter<"Treatment"> | Date | string
  }

  export type StockUpsertWithWhereUniqueWithoutUserInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutUserInput, StockUncheckedUpdateWithoutUserInput>
    create: XOR<StockCreateWithoutUserInput, StockUncheckedCreateWithoutUserInput>
  }

  export type StockUpdateWithWhereUniqueWithoutUserInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutUserInput, StockUncheckedUpdateWithoutUserInput>
  }

  export type StockUpdateManyWithWhereWithoutUserInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutUserInput>
  }

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[]
    OR?: StockScalarWhereInput[]
    NOT?: StockScalarWhereInput | StockScalarWhereInput[]
    id?: IntFilter<"Stock"> | number
    user_id?: UuidFilter<"Stock"> | string
    medication_id?: IntFilter<"Stock"> | number
    quantity?: IntFilter<"Stock"> | number
    location?: StringFilter<"Stock"> | string
    created_at?: DateTimeFilter<"Stock"> | Date | string
    updated_at?: DateTimeFilter<"Stock"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    user_id?: UuidFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    file_path?: StringFilter<"Document"> | string
    created_at?: DateTimeFilter<"Document"> | Date | string
    updated_at?: DateTimeFilter<"Document"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    user_id?: UuidFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    start_time?: DateTimeFilter<"Appointment"> | Date | string
    end_time?: DateTimeFilter<"Appointment"> | Date | string
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type UserCaregiverUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCaregiverWhereUniqueInput
    update: XOR<UserCaregiverUpdateWithoutUserInput, UserCaregiverUncheckedUpdateWithoutUserInput>
    create: XOR<UserCaregiverCreateWithoutUserInput, UserCaregiverUncheckedCreateWithoutUserInput>
  }

  export type UserCaregiverUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCaregiverWhereUniqueInput
    data: XOR<UserCaregiverUpdateWithoutUserInput, UserCaregiverUncheckedUpdateWithoutUserInput>
  }

  export type UserCaregiverUpdateManyWithWhereWithoutUserInput = {
    where: UserCaregiverScalarWhereInput
    data: XOR<UserCaregiverUpdateManyMutationInput, UserCaregiverUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCaregiverScalarWhereInput = {
    AND?: UserCaregiverScalarWhereInput | UserCaregiverScalarWhereInput[]
    OR?: UserCaregiverScalarWhereInput[]
    NOT?: UserCaregiverScalarWhereInput | UserCaregiverScalarWhereInput[]
    id?: IntFilter<"UserCaregiver"> | number
    user_id?: UuidFilter<"UserCaregiver"> | string
    caregiver_id?: UuidFilter<"UserCaregiver"> | string
    status?: EnumCaregiverStatusFilter<"UserCaregiver"> | $Enums.CaregiverStatus
    created_at?: DateTimeFilter<"UserCaregiver"> | Date | string
    updated_at?: DateTimeFilter<"UserCaregiver"> | Date | string
  }

  export type UserCaregiverUpsertWithWhereUniqueWithoutCaregiverInput = {
    where: UserCaregiverWhereUniqueInput
    update: XOR<UserCaregiverUpdateWithoutCaregiverInput, UserCaregiverUncheckedUpdateWithoutCaregiverInput>
    create: XOR<UserCaregiverCreateWithoutCaregiverInput, UserCaregiverUncheckedCreateWithoutCaregiverInput>
  }

  export type UserCaregiverUpdateWithWhereUniqueWithoutCaregiverInput = {
    where: UserCaregiverWhereUniqueInput
    data: XOR<UserCaregiverUpdateWithoutCaregiverInput, UserCaregiverUncheckedUpdateWithoutCaregiverInput>
  }

  export type UserCaregiverUpdateManyWithWhereWithoutCaregiverInput = {
    where: UserCaregiverScalarWhereInput
    data: XOR<UserCaregiverUpdateManyMutationInput, UserCaregiverUncheckedUpdateManyWithoutCaregiverInput>
  }

  export type TreatmentCreateWithoutMedicationInput = {
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTreatmentsInput
    intakes?: IntakeCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateWithoutMedicationInput = {
    id?: number
    user_id: string
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    intakes?: IntakeUncheckedCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentCreateOrConnectWithoutMedicationInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutMedicationInput, TreatmentUncheckedCreateWithoutMedicationInput>
  }

  export type TreatmentCreateManyMedicationInputEnvelope = {
    data: TreatmentCreateManyMedicationInput | TreatmentCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type StockCreateWithoutMedicationInput = {
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutStocksInput
  }

  export type StockUncheckedCreateWithoutMedicationInput = {
    id?: number
    user_id: string
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockCreateOrConnectWithoutMedicationInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutMedicationInput, StockUncheckedCreateWithoutMedicationInput>
  }

  export type StockCreateManyMedicationInputEnvelope = {
    data: StockCreateManyMedicationInput | StockCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type TreatmentUpsertWithWhereUniqueWithoutMedicationInput = {
    where: TreatmentWhereUniqueInput
    update: XOR<TreatmentUpdateWithoutMedicationInput, TreatmentUncheckedUpdateWithoutMedicationInput>
    create: XOR<TreatmentCreateWithoutMedicationInput, TreatmentUncheckedCreateWithoutMedicationInput>
  }

  export type TreatmentUpdateWithWhereUniqueWithoutMedicationInput = {
    where: TreatmentWhereUniqueInput
    data: XOR<TreatmentUpdateWithoutMedicationInput, TreatmentUncheckedUpdateWithoutMedicationInput>
  }

  export type TreatmentUpdateManyWithWhereWithoutMedicationInput = {
    where: TreatmentScalarWhereInput
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyWithoutMedicationInput>
  }

  export type StockUpsertWithWhereUniqueWithoutMedicationInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutMedicationInput, StockUncheckedUpdateWithoutMedicationInput>
    create: XOR<StockCreateWithoutMedicationInput, StockUncheckedCreateWithoutMedicationInput>
  }

  export type StockUpdateWithWhereUniqueWithoutMedicationInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutMedicationInput, StockUncheckedUpdateWithoutMedicationInput>
  }

  export type StockUpdateManyWithWhereWithoutMedicationInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutMedicationInput>
  }

  export type UserCreateWithoutTreatmentsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stocks?: StockCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    patients?: UserCaregiverCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverCreateNestedManyWithoutCaregiverInput
  }

  export type UserUncheckedCreateWithoutTreatmentsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stocks?: StockUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    patients?: UserCaregiverUncheckedCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type UserCreateOrConnectWithoutTreatmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreatmentsInput, UserUncheckedCreateWithoutTreatmentsInput>
  }

  export type MedicationCreateWithoutTreatmentsInput = {
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stocks?: StockCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutTreatmentsInput = {
    id?: number
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stocks?: StockUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutTreatmentsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutTreatmentsInput, MedicationUncheckedCreateWithoutTreatmentsInput>
  }

  export type IntakeCreateWithoutTreatmentInput = {
    taken_at?: Date | string | null
    status?: $Enums.IntakeStatus
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IntakeUncheckedCreateWithoutTreatmentInput = {
    id?: number
    taken_at?: Date | string | null
    status?: $Enums.IntakeStatus
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IntakeCreateOrConnectWithoutTreatmentInput = {
    where: IntakeWhereUniqueInput
    create: XOR<IntakeCreateWithoutTreatmentInput, IntakeUncheckedCreateWithoutTreatmentInput>
  }

  export type IntakeCreateManyTreatmentInputEnvelope = {
    data: IntakeCreateManyTreatmentInput | IntakeCreateManyTreatmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTreatmentsInput = {
    update: XOR<UserUpdateWithoutTreatmentsInput, UserUncheckedUpdateWithoutTreatmentsInput>
    create: XOR<UserCreateWithoutTreatmentsInput, UserUncheckedCreateWithoutTreatmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreatmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreatmentsInput, UserUncheckedUpdateWithoutTreatmentsInput>
  }

  export type UserUpdateWithoutTreatmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stocks?: StockUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUncheckedUpdateWithoutTreatmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stocks?: StockUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUncheckedUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type MedicationUpsertWithoutTreatmentsInput = {
    update: XOR<MedicationUpdateWithoutTreatmentsInput, MedicationUncheckedUpdateWithoutTreatmentsInput>
    create: XOR<MedicationCreateWithoutTreatmentsInput, MedicationUncheckedCreateWithoutTreatmentsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutTreatmentsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutTreatmentsInput, MedicationUncheckedUpdateWithoutTreatmentsInput>
  }

  export type MedicationUpdateWithoutTreatmentsInput = {
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stocks?: StockUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutTreatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stocks?: StockUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type IntakeUpsertWithWhereUniqueWithoutTreatmentInput = {
    where: IntakeWhereUniqueInput
    update: XOR<IntakeUpdateWithoutTreatmentInput, IntakeUncheckedUpdateWithoutTreatmentInput>
    create: XOR<IntakeCreateWithoutTreatmentInput, IntakeUncheckedCreateWithoutTreatmentInput>
  }

  export type IntakeUpdateWithWhereUniqueWithoutTreatmentInput = {
    where: IntakeWhereUniqueInput
    data: XOR<IntakeUpdateWithoutTreatmentInput, IntakeUncheckedUpdateWithoutTreatmentInput>
  }

  export type IntakeUpdateManyWithWhereWithoutTreatmentInput = {
    where: IntakeScalarWhereInput
    data: XOR<IntakeUpdateManyMutationInput, IntakeUncheckedUpdateManyWithoutTreatmentInput>
  }

  export type IntakeScalarWhereInput = {
    AND?: IntakeScalarWhereInput | IntakeScalarWhereInput[]
    OR?: IntakeScalarWhereInput[]
    NOT?: IntakeScalarWhereInput | IntakeScalarWhereInput[]
    id?: IntFilter<"Intake"> | number
    treatment_id?: IntFilter<"Intake"> | number
    taken_at?: DateTimeNullableFilter<"Intake"> | Date | string | null
    status?: EnumIntakeStatusFilter<"Intake"> | $Enums.IntakeStatus
    note?: StringNullableFilter<"Intake"> | string | null
    created_at?: DateTimeFilter<"Intake"> | Date | string
    updated_at?: DateTimeFilter<"Intake"> | Date | string
  }

  export type UserCreateWithoutStocksInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    patients?: UserCaregiverCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverCreateNestedManyWithoutCaregiverInput
  }

  export type UserUncheckedCreateWithoutStocksInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    patients?: UserCaregiverUncheckedCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type UserCreateOrConnectWithoutStocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStocksInput, UserUncheckedCreateWithoutStocksInput>
  }

  export type MedicationCreateWithoutStocksInput = {
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatments?: TreatmentCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutStocksInput = {
    id?: number
    cisCode: string
    name: string
    pharmaceuticalForm?: string | null
    administrationRoutes?: string | null
    marketingStatus?: string | null
    holder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatments?: TreatmentUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutStocksInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutStocksInput, MedicationUncheckedCreateWithoutStocksInput>
  }

  export type UserUpsertWithoutStocksInput = {
    update: XOR<UserUpdateWithoutStocksInput, UserUncheckedUpdateWithoutStocksInput>
    create: XOR<UserCreateWithoutStocksInput, UserUncheckedCreateWithoutStocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStocksInput, UserUncheckedUpdateWithoutStocksInput>
  }

  export type UserUpdateWithoutStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUncheckedUpdateWithoutStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUncheckedUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type MedicationUpsertWithoutStocksInput = {
    update: XOR<MedicationUpdateWithoutStocksInput, MedicationUncheckedUpdateWithoutStocksInput>
    create: XOR<MedicationCreateWithoutStocksInput, MedicationUncheckedCreateWithoutStocksInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutStocksInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutStocksInput, MedicationUncheckedUpdateWithoutStocksInput>
  }

  export type MedicationUpdateWithoutStocksInput = {
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatments?: TreatmentUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutStocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    cisCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoutes?: NullableStringFieldUpdateOperationsInput | string | null
    marketingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    holder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatments?: TreatmentUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type UserCreateWithoutPatientsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentCreateNestedManyWithoutUserInput
    stocks?: StockCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverCreateNestedManyWithoutCaregiverInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentUncheckedCreateNestedManyWithoutUserInput
    stocks?: StockUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type UserCreateWithoutCaregiversInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentCreateNestedManyWithoutUserInput
    stocks?: StockCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    patients?: UserCaregiverCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCaregiversInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentUncheckedCreateNestedManyWithoutUserInput
    stocks?: StockUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    patients?: UserCaregiverUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCaregiversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCaregiversInput, UserUncheckedCreateWithoutCaregiversInput>
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUpdateManyWithoutUserNestedInput
    stocks?: StockUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUncheckedUpdateManyWithoutUserNestedInput
    stocks?: StockUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUpsertWithoutCaregiversInput = {
    update: XOR<UserUpdateWithoutCaregiversInput, UserUncheckedUpdateWithoutCaregiversInput>
    create: XOR<UserCreateWithoutCaregiversInput, UserUncheckedCreateWithoutCaregiversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCaregiversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCaregiversInput, UserUncheckedUpdateWithoutCaregiversInput>
  }

  export type UserUpdateWithoutCaregiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUpdateManyWithoutUserNestedInput
    stocks?: StockUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCaregiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUncheckedUpdateManyWithoutUserNestedInput
    stocks?: StockUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreatmentCreateWithoutIntakesInput = {
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTreatmentsInput
    medication: MedicationCreateNestedOneWithoutTreatmentsInput
  }

  export type TreatmentUncheckedCreateWithoutIntakesInput = {
    id?: number
    user_id: string
    medication_id: number
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TreatmentCreateOrConnectWithoutIntakesInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutIntakesInput, TreatmentUncheckedCreateWithoutIntakesInput>
  }

  export type TreatmentUpsertWithoutIntakesInput = {
    update: XOR<TreatmentUpdateWithoutIntakesInput, TreatmentUncheckedUpdateWithoutIntakesInput>
    create: XOR<TreatmentCreateWithoutIntakesInput, TreatmentUncheckedCreateWithoutIntakesInput>
    where?: TreatmentWhereInput
  }

  export type TreatmentUpdateToOneWithWhereWithoutIntakesInput = {
    where?: TreatmentWhereInput
    data: XOR<TreatmentUpdateWithoutIntakesInput, TreatmentUncheckedUpdateWithoutIntakesInput>
  }

  export type TreatmentUpdateWithoutIntakesInput = {
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTreatmentsNestedInput
    medication?: MedicationUpdateOneRequiredWithoutTreatmentsNestedInput
  }

  export type TreatmentUncheckedUpdateWithoutIntakesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medication_id?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentCreateNestedManyWithoutUserInput
    stocks?: StockCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    patients?: UserCaregiverCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverCreateNestedManyWithoutCaregiverInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentUncheckedCreateNestedManyWithoutUserInput
    stocks?: StockUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    patients?: UserCaregiverUncheckedCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUpdateManyWithoutUserNestedInput
    stocks?: StockUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUncheckedUpdateManyWithoutUserNestedInput
    stocks?: StockUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUncheckedUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentCreateNestedManyWithoutUserInput
    stocks?: StockCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    patients?: UserCaregiverCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverCreateNestedManyWithoutCaregiverInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    email: string
    phone?: string | null
    password: string
    picture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    treatments?: TreatmentUncheckedCreateNestedManyWithoutUserInput
    stocks?: StockUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    patients?: UserCaregiverUncheckedCreateNestedManyWithoutUserInput
    caregivers?: UserCaregiverUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUpdateManyWithoutUserNestedInput
    stocks?: StockUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUpdateManyWithoutCaregiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatments?: TreatmentUncheckedUpdateManyWithoutUserNestedInput
    stocks?: StockUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    patients?: UserCaregiverUncheckedUpdateManyWithoutUserNestedInput
    caregivers?: UserCaregiverUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type TreatmentCreateManyUserInput = {
    id?: number
    medication_id: number
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockCreateManyUserInput = {
    id?: number
    medication_id: number
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentCreateManyUserInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCaregiverCreateManyUserInput = {
    id?: number
    caregiver_id: string
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCaregiverCreateManyCaregiverInput = {
    id?: number
    user_id: string
    status?: $Enums.CaregiverStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TreatmentUpdateWithoutUserInput = {
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutTreatmentsNestedInput
    intakes?: IntakeUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication_id?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    intakes?: IntakeUncheckedUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication_id?: IntFieldUpdateOperationsInput | number
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverUpdateWithoutUserInput = {
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: UserUpdateOneRequiredWithoutCaregiversNestedInput
  }

  export type UserCaregiverUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverUpdateWithoutCaregiverInput = {
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type UserCaregiverUncheckedUpdateWithoutCaregiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCaregiverUncheckedUpdateManyWithoutCaregiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCaregiverStatusFieldUpdateOperationsInput | $Enums.CaregiverStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentCreateManyMedicationInput = {
    id?: number
    user_id: string
    dosage: string
    frequency: string
    start_date: Date | string
    end_date?: Date | string | null
    status?: $Enums.TreatmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockCreateManyMedicationInput = {
    id?: number
    user_id: string
    quantity: number
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TreatmentUpdateWithoutMedicationInput = {
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTreatmentsNestedInput
    intakes?: IntakeUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateWithoutMedicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    intakes?: IntakeUncheckedUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateManyWithoutMedicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTreatmentStatusFieldUpdateOperationsInput | $Enums.TreatmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUpdateWithoutMedicationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockUncheckedUpdateWithoutMedicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateManyWithoutMedicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeCreateManyTreatmentInput = {
    id?: number
    taken_at?: Date | string | null
    status?: $Enums.IntakeStatus
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IntakeUpdateWithoutTreatmentInput = {
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeUncheckedUpdateWithoutTreatmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeUncheckedUpdateManyWithoutTreatmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    taken_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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