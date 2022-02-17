/**
 * @description This page contains custom styling for MUI Components
 * The styling of MUI Components
 * @author Sanjana Rao
 * @since 15-02-2022
 */
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
export const useStyles = makeStyles(() => ({
  catContainerBeauty: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
        'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #0db7af',
    },
  },
  catContainerHome: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #f2c210',
    },
  },
  catContainerKids: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #f26a10',
    },
  },
  catContainerMen: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #ee5f73',
    },
  },
  catContainerProfile: {
    fontSize: '14px',
    paddingLeft: '1.3em',
    fontFamily:
              ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
    color: '#3e4152',
  },
  catContainerStudio: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid #ee5f73',
    },
  },
  newSign: {
    color: '#ff3f6c',
    top: '-0.4rem',
    fontSize: '65%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
    textTransform: 'uppercase',
  },
  catContainerWomen: {
    paddingTop: '1.65em',
    color: '#282c3f',
    fontSize: '14px',
    letterSpacing: '0.5px',
    fontFamily:
      'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover ': {
      borderBottom: '4px solid ##fb56c1',
    },
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to Menu items
   */
export const MenuBold = styled(MenuItem)(() => ({
  fontSize: '14px',
  paddingTop: '2px',
  paddingBottom: '2px',
  paddingRight: '6px',
  fontFamily:
      ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#3e4152',
  '&:hover': {
    color: '#3e4152',
    fontWeight: '700',
    background: 'white',
  },
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to Menu items
 */
export const MenuBoldProfile = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily: ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#3e4152',
  '&:hover': {
    color: '#3e4152',
    fontWeight: '700',
    background: 'white',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to Menu items
   */
export const MenuBold2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  paddingTop: '2px',
  paddingBottom: '2px',
  paddingRight: '6px',
  fontFamily:
      ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#3e4152',
  '&:hover': {
    color: '#3e4152',
    fontWeight: '700',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const Heading = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
      ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#0db7af',
  '&:hover': {
    color: '#0db7af',
    background: '#fff',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const Heading2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
      ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#0db7af',
  '&:hover': {
    color: '#0db7af',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingHome = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
        ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#f2c210',
  '&:hover': {
    color: '#f2c210',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingHome2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
        ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#f2c210',
  '&:hover': {
    color: '#f2c210',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingKids2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
          ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#f26a10',
  '&:hover': {
    color: '#f26a10',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingKids = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
          ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#f26a10',
  '&:hover': {
    color: '#f26a10',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingMen = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
          ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#ee5f73',
  '&:hover': {
    color: '#ee5f73',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingMen2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
          ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#ee5f73',
  '&:hover': {
    color: '#ee5f73',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingWomen = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
          ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#fb56c1',
  '&:hover': {
    color: '#fb56c1',
    background: 'rgba(245,245,246,.4)',
  },
}));

/**
   * @description Makes use of styled from MUI to generate custom styling to heading in Menu items
   */
export const HeadingWomen2 = styled(MenuItem)(() => ({
  fontSize: '14px',
  fontFamily:
          ' Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  color: '#fb56c1',
  '&:hover': {
    color: '#fb56c1',
    background: 'rgba(245,245,246,.4)',
  },
}));
/**
 * @description Makes use of styled from MUI to generate custom styling to a button
 */
export const LoginButton = styled(Button)(() => ({
  color: '#ff3f6c',
  borderColor: '#eaeaec',
  borderRadius: '2px',
  '&:hover': {
    borderColor: '#ff3f6c',
  },
}));

/**
 * @description Makes use of styled from MUI to generate custom styling to a button
 */
export const ExploreButton = styled(Button)(() => ({
  color: 'black',
  fontFamily:
        'Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  border: '1px solid #d4d5d8',
  borderRadius: '2px',
  '&:hover': {
    borderColor: '#d4d5d8',
  },
}));
