import styled from "styled-components";

export const TableGroup = styled.div`
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  overflow: hidden;
`;

export const MedalTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &.header {
    background-color: midnightblue;
    color: white;
    padding: 18px 10px;
  }

  &.odd {
    background-color: #d3d2d2;
  }

  &.even {
    background-color: white;
  }
`;

export const MedalTableCell = styled.p`
  flex-wrap: wrap;
  flex: 1;
  text-align: center;
  margin: 0;
`;

export const SortCheck = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
