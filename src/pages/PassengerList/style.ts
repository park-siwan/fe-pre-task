import styled from 'styled-components';

export const CardList = styled.div`
  border-top: 1px solid rgb(241, 243, 249);
  padding: 20px 0px;
  background-color: rgb(255, 255, 255);
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    h3 {
      font-size: 16px;
      font-weight: bold;
      color: rgb(0, 0, 0);
    }
    h4 {
      font-size: 12px;
      font-weight: 600;
      color: rgb(0, 0, 0);
    }
  }
  main {
    background-color: rgb(242, 242, 242);
    padding: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 80px;
      margin-right: 10px;
    }
    h2 {
      font-size: 14px;
      font-weight: 500;
    }
  }
  footer {
    display: flex;
    justify-content: end;
    align-items: center;
    h5 {
      font-size: 12px;
      font-weight: 700;
      color: rgb(211, 211, 211);
    }
  }
`;
