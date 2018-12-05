import Yup from 'yup'

function equalTo (ref, msg) {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test (value) {
      return value === this.resolve(ref)
    }
  })
}

Yup.addMethod(Yup.string, 'equalTo', equalTo)

export default Yup
