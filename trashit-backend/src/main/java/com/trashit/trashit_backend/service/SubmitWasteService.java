// package com.trashit.trashit_backend.service;

// import com.trashit.trashit_backend.dto.SubmitWasteDTO;
// import com.trashit.trashit_backend.model.SubmitWaste;
// import com.trashit.trashit_backend.model.User;
// import com.trashit.trashit_backend.repository.SubmitWasteRepository;
// import com.trashit.trashit_backend.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

// @Service
// public class SubmitWasteService {

//     @Autowired
//     private SubmitWasteRepository submitWasteRepository;

//     @Autowired
//     private UserRepository userRepository;

//     @Transactional
//     public SubmitWaste submitWaste(SubmitWasteDTO submitWasteDTO) {
//         User user = userRepository.findById(submitWasteDTO.getUserId())
//                                   .orElseThrow(() -> new RuntimeException("User not found"));

//         SubmitWaste submitWaste = new SubmitWaste();
//         submitWaste.setUser(user);
//         submitWaste.setSolutionType(submitWasteDTO.getSolutionType());
//         submitWaste.setCategory(submitWasteDTO.getCategory());
//         submitWaste.setTaken(submitWasteDTO.isTaken());
//         submitWaste.setAddress(submitWasteDTO.getAddress());
//         submitWaste.setFirstName(submitWasteDTO.getFirstName());
//         submitWaste.setLastName(submitWasteDTO.getLastName());
//         submitWaste.setEmail(submitWasteDTO.getEmail());
//         submitWaste.setPhone(submitWasteDTO.getPhone());

//         return submitWasteRepository.save(submitWaste);
//     }
// }
package com.trashit.trashit_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trashit.trashit_backend.dto.SubmitWasteDTO;
import com.trashit.trashit_backend.model.SubmitWaste;
import com.trashit.trashit_backend.model.User;
import com.trashit.trashit_backend.repository.SubmitWasteRepository;
import com.trashit.trashit_backend.repository.UserRepository;

@Service
public class SubmitWasteService {

    @Autowired
    private SubmitWasteRepository submitWasteRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public SubmitWaste submitWaste(SubmitWasteDTO submitWasteDTO) {
        if (submitWasteDTO.getUserId() == null) {
            throw new IllegalArgumentException("User ID cannot be null");
        }

        User user = userRepository.findById(submitWasteDTO.getUserId())
                                  .orElseThrow(() -> new RuntimeException("User with ID " + submitWasteDTO.getUserId() + " not found"));

        SubmitWaste submitWaste = new SubmitWaste();
        submitWaste.setUser(user);
        submitWaste.setSolutionType(submitWasteDTO.getSolutionType());
        submitWaste.setCategory(submitWasteDTO.getCategory());
        submitWaste.setTaken(submitWasteDTO.isTaken());
        submitWaste.setAddress(submitWasteDTO.getAddress());
        submitWaste.setFirstName(submitWasteDTO.getFirstName());
        submitWaste.setLastName(submitWasteDTO.getLastName());
        submitWaste.setEmail(submitWasteDTO.getEmail());
        submitWaste.setPhone(submitWasteDTO.getPhone());

        return submitWasteRepository.save(submitWaste);
    }
}
