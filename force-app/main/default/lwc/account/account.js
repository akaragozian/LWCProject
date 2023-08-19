import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Stage', fieldName: 'Stage__c'},
    {label: 'Child Name', fieldName: 'Name__c'}
];

export default class Account extends LightningElement {
    columns = columns;
    @wire(getAccounts)
    accounts;
}