import React, { Component } from 'react';  
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';  
class ThemeSwitcher extends Component {  
state = { theme: null, dropdownOpen: false }  
toggleDropdown = () => {  
this.setState({ dropdownOpen: !this.state.dropdownOpen });  
}  
resetTheme = evt => {  
evt.preventDefault();  
this.setState({ theme: null });  
}  
chooseTheme = (theme, evt) => {  
evt.preventDefault();  
this.setState({ theme });  
}  
render() {  
const { theme, dropdownOpen } = this.state;  
const themeClass = theme ? theme.toLowerCase() : 'secondary';  
return (  
<div className="d-flex flex-wrap justify-content-center align-items-center">  
<span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{theme || 'Default'}</span> 
 <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>  
<Button id="caret" color={themeClass}>{theme || 'Main'} Theme</Button>  
<DropdownToggle caret size="lg" color={themeClass} />  
<DropdownMenu>  
<DropdownItem onClick={e => this.chooseTheme('One', e)}>Theme1</DropdownItem>  
<DropdownItem onClick={e => this.chooseTheme('Two', e)}>Theme2</DropdownItem>  
<DropdownItem onClick={e => this.chooseTheme('Three', e)}>Theme3</DropdownItem>  
<DropdownItem divider />  
<DropdownItem onClick={this.resetTheme}>Theme0</DropdownItem>  
</DropdownMenu>  
</ButtonDropdown>  
</div>  
);    
}  
}  
export default ThemeSwitcher;