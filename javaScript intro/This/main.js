global.fullname = 'John Doe';

const obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};

const test = obj.prop.getFullnme;
console.log(obj.prop.getFullname());
console.log(test.call(obj.prop));    