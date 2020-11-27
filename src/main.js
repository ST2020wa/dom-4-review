// 由于 dom 是 window 上的全局属性，所以可以在 main.js 上直接用 dom.create
const div = dom.create('<div>test的弟弟</div>');
const div2 = dom.create('<div>test的哥哥</div>');
const div3 = dom.create('<div>test的孩子</div>');
const div4 = dom.create('<div>test的妈妈</div>');

dom.after(test, div);
dom.before(test,div2);
dom.append(test,div3);
dom.wrap(test,div4);
dom.remove(div3)

const nodes = dom.empty(window.emptyTest)

dom.attr(test, 'title', '这是一个新名字')
const title = dom.attr(test, 'title')

dom.text(test, '哈喽，这是新的内容～')

dom.style(test, {border: '2px solid red', color: 'grey'})
dom.style(test, 'border', '3px dashed purple')

dom.class.add(test, 'pink')
dom.class.remove(test, 'pink')

const fn = () => {
    console.log('被点击了！')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
const test2 = dom.find('#test2')[0]
dom.find('.red', test2)

const findSib = dom.siblings(dom.find('#sis')[0])

const preSib = dom.previous(dom.find('#sis')[0])
const nextSib2 = dom.next(dom.find('#sis')[0])

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'blue'))

const sis = dom.find('#sis')[0]
console.log(dom.index(sis));
