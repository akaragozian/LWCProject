import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Number', fieldName: 'Phone'},
    {label: 'Friend Name', fieldName: 'My_Friend_s_Name__c'}
];

export default class Contact extends LightningElement {
    columns = columns;
    @wire(getContacts)
    contacts;
}