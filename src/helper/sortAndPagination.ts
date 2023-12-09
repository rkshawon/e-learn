interface IPaginationHelperOptions {
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
import { SortOrder } from "mongoose";

export interface IPaginationOptions {
  page: number;
  limit: number;
  skip: number;
  sort: { [key: string]: SortOrder };
}

const sortAndPagination = (
  options: IPaginationHelperOptions
): IPaginationOptions => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 100);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";

  const sort = {
    [sortBy]: sortOrder,
  };

  return {
    page,
    limit,
    skip,
    sort,
  };
};

export default sortAndPagination;
