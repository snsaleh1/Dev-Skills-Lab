const skills = [
    {skill: 'Javascript'},
    {skill: 'Cascading Style Sheets'},
    {skill: 'HTML'},
    {skill: 'Conflict Resolution'},
    {skill: 'Institutional Training'},
    {skill: 'Kick Ass'},
    {skill: 'Take Names'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    skills[id] = skill;
  }
  
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  
  function create(skill) {
    skills.push(skill);
  }
  
  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skills;
  }