import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const hamburger = css`
  width: 25px;
  height: 3px;
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -12.5px;
  margin-top: -1.5px;
  transition: transform 200ms;
`;

export const hamburger1 = styled.span`
  ${hamburger};
  transform: translate3d(0, -8px, 0);
`;

export const hamburger2 = styled.span`
  ${hamburger};
  transform: translate3d(0, 0, 0);
`;
export const hamburger3 = styled.span`
  ${hamburger};
  transform: translate3d(0, 8px, 0);
`;

export const HeaderContainer = styled.nav`
  filter: url("#shadowed-goo");
  position: fixed;
  // left: 5%;
  margin-left: 0px;
  padding-top: 20px;
  padding-left: 2.5em;
  width: 572px;
  height: 90px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;
  z-index: 10;
`;

export const MenuOpen = styled.input`
  display: none;
  &:checked {
    + {
      .menu-open-button {
        .hamburger-1 {
          transform: translate3d(0, 0, 0) rotate(45deg);
        }
        .hamburger-2 {
          transform: translate3d(0, 0, 0) scale(0.1, 1);
        }
        .hamburger-3 {
          transform: translate3d(0, 0, 0) rotate(-45deg);
        }
        transition-timing-function: linear;
        transition-duration: 200ms;
        transform: scale(0.8, 0.8) translate3d(0, 0, 0);
      }
    }
    ~ {
      .menu-item {
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        &:nth-child(3) {
          transition-duration: 190ms;
          // transform: translate3d(110px, 0, 0);
          transform: translate3d(80px, 0, 0);
        }
        &:nth-child(4) {
          transition-duration: 290ms;
          // transform: translate3d(220px, 0, 0);
          transform: translate3d(175px, 0, 0);
        }
        &:nth-child(5) {
          transition-duration: 390ms;
          // transform: translate3d(330px, 0, 0);
          transform: translate3d(280px, 0, 0);
        }
        &:nth-child(6) {
          transition-duration: 490ms;
          // transform: translate3d(440px, 0, 0);
          transform: translate3d(390px, 0, 0);
        }
        &:nth-child(7) {
          transition-duration: 490ms;
          transform: translate3d(0px, 75px, 0);
        }
      }
    }
  }
`;

export const LinkContainer = styled(Link)`
  background: #ff0000;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin-left: -40px;
  position: absolute;
  top: 20px;
  color: white;
  text-align: center;
  line-height: 60px;
  transform: translate3d(0, 0, 0);
  transition: background-color 200ms ease-out, color 200ms ease-out,
    font-size 200ms ease-out, transform 200ms ease-out;

  cursor: pointer;

  &:nth-child(6) {
    margin-top: 0;
    margin-bottom: 0;
  }
  &:hover {
    background: white;
    i,
    span {
      color: #ff0000;
    }
    font-size: 1.5em;
  }
  &:nth-child(3) {
    transition-duration: 180ms;
  }
  &:nth-child(4) {
    transition-duration: 180ms;
  }
  &:nth-child(5) {
    transition-duration: 180ms;
  }
  &:nth-child(6) {
    transition-duration: 180ms;
  }
  &:nth-child(7) {
    transition-duration: 180ms;
    margin: 0px;
    margin-left: -40px;
  }
`;

export const menuOopenButton = styled.label`
  background: #ff0000;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin-left: -40px;
  position: absolute;
  top: 20px;
  color: white;
  text-align: center;
  line-height: 80px;
  transform: translate3d(0, 0, 0);
  transition: transform ease-out 200ms;
  z-index: 2;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;
  &:hover {
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
  }
`;
