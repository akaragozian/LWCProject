import { LightningElement, wire } from 'lwc';
import getMilestones from '@salesforce/apex/MilestoneController.getMilestones';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Child Name', fieldName: 'Child_Name__c'},
    {label: 'Where are we', fieldName: 'Where_are_we__c'}
];

export default class Milestone extends LightningElement {
    columns = columns;
    @wire(getMilestones)
    milestones;
}