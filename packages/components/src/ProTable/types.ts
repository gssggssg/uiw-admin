import { ButtonProps, TableColumns, TableProps } from 'uiw';
import { SWRConfiguration } from 'swr';

export interface ProtableProps extends TableProps {
  table: useTableData;
  btns?: Array<ButtonProps>;
  searchBtns?: Array<ButtonProps>;
  columns: FormCol[];
}

export interface FormCol extends TableColumns {
  props?: {
    widget:
      | 'input'
      | 'radio'
      | 'checkbox'
      | 'switch'
      | 'select'
      | 'textarea'
      | 'dateInput'
      | 'timePicker'
      | 'searchSelect'
      | 'monthPicker';
    [key: string]: any;
  };
}

export interface BaseFormProps {
  columns: FormCol[];
  searchBtns?: Array<ButtonProps>;
}

export type Fields = {
  [key: string]: any;
};

type Result = {
  total: number;
  data: Record<string, string | number | JSX.Element>[];
};

export type Params = {
  formatData?: (res: any) => Result;
  query?: (
    pageIndex: number,
    searchValues: object,
  ) => {
    [key: string]: any;
  };
  SWRConfiguration? : SWRConfiguration
};

export interface useTableData extends Params {
  data: Record<string, string | number | JSX.Element>[];
  total: number;
  key: string;
  reset: () => void;
  refersh: () => void;
  onSearch: () => void;
  updateStore: (p: stateParams) => void;
  searchValues: object;
  loading: boolean;
}

export type stateParams = {
  data?: Record<string, string | number | JSX.Element>[];
  total?: number;
  selectChecked?: [];
  selectCheckedRows?: [];
};
