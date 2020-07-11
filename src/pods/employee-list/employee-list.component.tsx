import React from 'react';
import { Employee } from './employee-list.vm';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  employees: Employee[];
  onEditEmployee: (id: string) => void;
}

export const EmployeeListComponent: React.FC<Props> = (
  { 
  employees,
  onEditEmployee,
  }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <EmployeeTableHeader />
        </TableHead>
        <TableBody>
          {employees.map(row => (
            <EmployeeRowComponent 
              key={row.id} 
              employee={row}
              onEditEmployee={onEditEmployee}
              />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const EmployeeTableHeader: React.FC = () => {
  return (
  <TableRow>
    <TableCell align="right">Activo</TableCell>
    <TableCell align="right">Id</TableCell>
    <TableCell align="right">Nombre</TableCell>
    <TableCell align="right">Email</TableCell>
    <TableCell align="right">Fecha último incurrido</TableCell>
    <TableCell align="right">Comandos</TableCell>
  </TableRow>
  )
}

interface RowProps {
  employee: Employee;
  onEditEmployee: (id: string) => void;
}


const EmployeeRowComponent: React.FC<RowProps> = (
  {
    employee,
    onEditEmployee,
  }
) => {
  return (
    <TableRow key={employee.id}>
      <TableCell component="th" scope="row">
        <Checkbox checked={employee.isActive} disabled />
      </TableCell>
      <TableCell align="right">{employee.id}</TableCell>
      <TableCell align="right">{employee.name}</TableCell>
      <TableCell align="right">{employee.email}</TableCell>
      <TableCell align="right">{employee.lastDateIncurred}</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => onEditEmployee(employee.id)}>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
