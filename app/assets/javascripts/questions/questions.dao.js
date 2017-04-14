(function(dao){
  'use strict';

  function QuestionsDao($){
    this.getDisciplines = function getDisciplines(){
      return $.get("/disciplines");
    };

    this.getGreatThemes = function getGreatThemes(){
      return $.get("/great_themes");
    };

    this.getKnowledgeObjects = function getKnowledgeObjects(greatThemeId){
      return $.get("/great_themes/" + greatThemeId + "/knowledge_objects");
    };

    this.getAbilities = function getAbilities(knowledgeObjectId){
      return $.get("/knowledge_objects/" + knowledgeObjectId + "/abilities");
    };

    this.save = function save(question){
      console.log(question);
    };
  }

  dao.QuestionsDao = QuestionsDao;

})(dao);