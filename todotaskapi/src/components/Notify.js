import React from 'react';
import { useSelector } from 'react-redux';
import { NOTIFY_FAIL } from '../constants/messageNotify';

export default function Notify() {
  let notify = useSelector(state=> state.notify);
  let classCheck = "";
  classCheck = (notify == NOTIFY_FAIL) ? "notifyFail" : "notifySuccess";
  return (
    <div className={classCheck}>{notify}</div>
  )
}
