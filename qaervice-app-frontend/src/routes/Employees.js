import './Employees.css';
import EmployeeTableItem from '../components/EmployeeTableItem'
import HomeWrapper from '../components/HomeWrapper'

import DavePortrait from '../images/dave-portrait.jpg';
import ElainePortrait from '../images/elaine-portrait.jpeg';
import JanePortrait from '../images/jane-portrait.jpeg';
import JohnPortrait from '../images/john-portrait.jpeg';
import MarkPortrait from '../images/mark-portrait.jpeg';

const Employees = () => {
  return (
    <HomeWrapper pos={1}>
      <section className='EmployeeWrapper'>
        <button className='EmployeeAdd'><p>Add a new employee</p>Add_Circle</button>
        <div className='EmployeeTable'>
          <EmployeeTableItem employee="Dave Schuster" picture={DavePortrait} jobs={32} rating={8.8} color='hsl(var(--success-500))'/>
          <EmployeeTableItem employee="Elaine Marble" picture={ElainePortrait} jobs={12} rating={7.2} color='hsl(var(--warn-500))'/>
          <EmployeeTableItem employee="Jane March" picture={JanePortrait} jobs={103} rating={9.9} color='hsl(var(--success-500))'/>
          <EmployeeTableItem employee="John Wood" picture={JohnPortrait} jobs={47} rating={6.3} color='hsl(var(--warn-500))'/>
          <EmployeeTableItem employee="Mark Smith" picture={MarkPortrait} jobs={52} rating={2.1} color='hsl(var(--error-500))'/>
        </div>
      </section>
    </HomeWrapper>
  );
};

export default Employees;
