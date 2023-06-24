/* eslint-disable jsx-a11y/alt-text */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categoryDetails, tableCellName } from "../constants/tableData";
import { useState } from "react";

const TableWithAccordion = () => {
    const [expanded, setExpanded] = useState(1);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Container className="customer_section" maxWidth={false}>
      <Container maxWidth="lg">
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#1c1c1c",textAlign:"center" }}>
              <TableRow>
                {tableCellName.map((item, index) => {
                  return (
                    <TableCell
                      key={index}
                      sx={{ borderBottom: "none", color: "#fff",textAlign:"center" }}
                    >
                      {item}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryDetails?.map((category, index) => {
                return (
                  <TableRow>
                    <TableCell
                      colSpan={tableCellName?.length}
                      sx={{ padding: "16px 0px", borderBottom: "none" }}
                    >
                      <Accordion sx={{ backgroundColor: "#1c1c1c" }} expanded={expanded===index+1} onChange={handleChange(index+1)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:'#FFF'}}/>}>
                          <Typography
                            color="#fff"
                            variant="h5"
                            fontWeight="bold"
                            textAlign='center'
                          >
                            {category?.category}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Table>
                            <TableHead sx={{ backgroundColor: "#1c1c1c" }}>
                              <TableRow>
                                {tableCellName.map((item, index) => {
                                  return <></>;
                                })}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {category?.details?.map((category, index) => {
                                return (
                                  <TableRow>
                                    <>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        <img
                                          src={category?.image}
                                          width="50px"
                                        />
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.name}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.segment}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.age}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.zipCode}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.id}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.journey}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.convertsOn}
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          borderBottom: "none",
                                          color: "#fff",
                                        }}
                                      >
                                        {category?.totalOrders}
                                      </TableCell>
                                    </>
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </AccordionDetails>
                      </Accordion>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};
export default TableWithAccordion;
