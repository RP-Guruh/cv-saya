// app/helpers/format-date.js
import { helper } from '@ember/component/helper';

export default helper(function formatDate([date]) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1; // getMonth() returns month from 0 to 11
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
});
