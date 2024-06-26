/* core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* instruments */
import { THEME_ENUM } from '@/common/constans';

export interface ThemeState {
  currentTheme: THEME_ENUM;
}

const initialState: ThemeState = {
  currentTheme: THEME_ENUM.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEME_ENUM>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
