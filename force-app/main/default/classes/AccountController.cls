public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List <Account> getAccounts() {
        return [SELECT Name, Child_Name__c, Stage__c FROM Account LIMIT 3];
            
        } 
   
}