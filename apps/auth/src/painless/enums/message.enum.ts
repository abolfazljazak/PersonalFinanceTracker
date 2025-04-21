export enum UnauthorizedMessage {
  NotLogin = "login on your account",
  NoToken = "No token provided",
  InvalidToken = "Invalid token",
  TokenExpired = "Token has expired",
}

export enum BadRequestMessage {
  InvalidInput = "Invalid input provided",
  MissingFields = "Required fields are missing",
  InvalidFormat = "Invalid data format",
}

export enum NotFoundMessage {
  ResourceNotFound = "Requested resource not found",
  UserNotFound = "User not found",
  DataNotFound = "No data found",
  PostCodeNotFound = "Post Code not found",
}

export enum ForbiddenMessage {
  AccessDenied = "Access denied",
  InsufficientPermissions = "Insufficient permissions",
}

export enum ConflictMessage {
  UserAlreadyExists = "User already exists",
  DuplicateEntry = "Duplicate entry detected",
}

export enum ServerErrorMessage {
  InternalError = "Internal server error",
  DatabaseError = "Database operation failed",
  ServiceUnavailable = "Service temporarily unavailable",
  FailedFetchCityData = "Failed to fetch city data",
}

export enum SuccessMessage {
  OperationSuccessful = "Operation completed successfully",
  UserCreated = "User created successfully",
  DataRetrieved = "Data retrieved successfully",
  LoginSuccessful = "Login successful",
  TokenGenerated = "Token generated successfully",
}
