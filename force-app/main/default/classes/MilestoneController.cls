public with sharing class MilestoneController {
    @AuraEnabled(cacheable=true)
    public static List <Milestone__c> getMilestones() {
        return [SELECT Name, Name__c, Where_are_we__c   FROM Milestone__c LIMIT 3];
            
        } 
   
}