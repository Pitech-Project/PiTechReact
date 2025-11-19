import { VariantType } from "notistack";

export const AppStrings = {
  ALL: "All",
  JOB_SAVED: "Job saved successfully",
  JOB_DELETED: "Job deleted successfully",
  ERROR_SAVING_JOB: "Error saving job",
  CANCEL: "Cancel",
  SUBMIT: "Submit",
  SAVE: "Save",
  BACK_TO_LIST: "← BACK TO JOB LIST",
  STATUS_DRAFT: "DRAFT",
  DELETE: "Delete",
  DELETE_CONFIRMATION: "Are you sure you want to delete this job?",
};

export const SnackbarVariants: Record<"SUCCESS" | "ERROR", VariantType> = {
  SUCCESS: "success",
  ERROR: "error",
};
