module.exports = {
  name: 'vacation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/vacation',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
