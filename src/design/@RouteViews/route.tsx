import styled from 'styled-components';
import { View } from '../@AppView/component';
const RouteViews = styled(View)`
overflow: hidden;
 .button,
.input,
.select,
.textarea {
  font-family: var(--theme-font-gilroy);
}

a {
  color: inherit;
}

.modal-container {
  max-height: 600px;
  width: 80%;
  margin-top:5rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
  .modal-container {
    width: 90%;
  }
}

.modal-container-header {
  padding: 16px 32px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-container-title {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-weight: 700;
  font-size: 1.125;
}

.modal-container-title svg {
  width: 32px;
  height: 32px;
  color: #750550;
}

.modal-container-body {
  padding: 24px 32px 51px;
  overflow-y: auto;
}

.rtf h1,
.rtf h2,
.rtf h3,
.rtf h4,
.rtf h5,
.rtf h6 {
  font-weight: 700;
}

.rtf h1 {
  font-size: 1.5rem;
  line-height: 1.125;
}

.rtf h2 {
  font-size: 1.25rem;
  line-height: 1.25;
}

.rtf h3 {
  font-size: 1rem;
  line-height: 1.5;
}

.rtf > * + * {
  margin-top: 1em;
}

.rtf > * + :is(h1, h2, h3) {
  margin-top: 2em;
}

.rtf > :is(h1, h2, h3) + * {
  margin-top: 0.75em;
}

.rtf ul,
.rtf ol {
  margin-left: 20px;
  list-style-position: inside;
}

.rtf ol {
  list-style: numeric;
}

.rtf ul {
  list-style: disc;
}

.modal-container-footer {
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #ddd;
  gap: 12px;
  position: relative;
}

.modal-container-footer:after {
  content: "";
  display: block;
  position: absolute;
  top: -51px;
  left: 24px;
  right: 24px;
  height: 50px;
  flex-shrink: 0;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.75), transparent);
  pointer-events: none;
}

.button {
  padding: 12px 20px;
  border-radius: 8px;
  background-color: transparent;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s ease;
}

.button.is-ghost:hover, .button.is-ghost:focus {
  background-color: #dfdad7;
}

.button.is-primary {
  background-color: #750550;
  color: #fff;
}

.button.is-primary:hover, .button.is-primary:focus {
  background-color: #4a0433;
}

.icon-button {
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.15s ease;
}

.icon-button svg {
  width: 24px;
  height: 24px;
}

.icon-button:hover, .icon-button:focus {
  background-color: #dfdad7;
}
`;


// width:100%;
// padding: 2rem;
// margin: 5rem auto 0 auto;
// color: var(--theme-text);
// background: rgb(255, 255, 255);
// font-family: var(--theme-font-gilroy);
// font-size: 1.2rem;
// .text{
//     text-align: center;
//     color: var(--theme-hero-high-light_text);
// }



export { RouteViews };