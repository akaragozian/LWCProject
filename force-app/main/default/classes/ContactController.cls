public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List <Contact> getContacts() {
        return [SELECT Name, Phone, My_Friend_s_Name__c  FROM Contact LIMIT 3];
            
        } 
   
}