# blitz_first

## Commands

### tutorial

- blitz new blitz_first
- cd blitz_first
- blitz generate all question text hasMany:choices
- blitz generate resource choice text votes:int:default[0] belongsTo:question

### original

- yarn add @material-ui/core --save
- yarn add @material-ui/styles --save
- yarn add @material-ui/icons --save

## Original document

### Getting Started

1. Add this code to db/schema.prisma:

```
model Project {
  id      Int      @default(autoincrement()) @id
  name    String
}
```

2. DB migrate

```
blitz db migrate
```

3. Start the dev server

```
blitz start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
