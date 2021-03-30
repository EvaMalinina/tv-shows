export const theme = {
  $red:'#F65261',
  $white:'#FFF',
  $lightGrey:'#555',
  $grey:'#424242',
  $darkGrey:'#232323',
  $textGrey: '#a2a2a2',
  $btnBg: 'rgba(85, 85, 85, 0.5)',
  $bg: 'rgba(0, 0, 0, 0.85)',
  $trans: 'transparent',
  $green: '#577D3D',
  $smokyWhite: '#cdcdcd',

  mobile: '380px',
}

export const colourSelectStyles = {
  control: (styles: any) => (
      {...styles, backgroundColor: "#232323", color: "#232323"}
  ),
  singleValue: (styles: any) => ({...styles, color: 'white'}),
  valueContainer: (provided: any) => ({
    ...provided,
    height: "26px",
    padding: '0 10px',
  }),
  placeholder: (styles: any) => ({...styles, color: 'white'}),

  option: (provided: any, state: any) => ({
    ...provided,
    color: 'white',
    padding: '10px',
    backgroundColor: state.isFocused ? "#555" : "#232323",
    margin: 0
  }),
  menuList: (provided: any) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
};