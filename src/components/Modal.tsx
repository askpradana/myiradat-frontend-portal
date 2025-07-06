
'use client'

import { Modal } from 'antd'
import { useModal } from '@/context/ModalContext'

const GlobalModal = () => {
  const { modalConfig, isModalOpen, closeModal } = useModal()

  return (
    <Modal
      title={modalConfig?.title || ''}
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      okText={modalConfig?.okText || 'OK'}
      cancelButtonProps={{ style: { display: 'none' } }} // optional: hide cancel
      closable
    >
      {modalConfig?.content || null}
    </Modal>
  )
}

export default GlobalModal
